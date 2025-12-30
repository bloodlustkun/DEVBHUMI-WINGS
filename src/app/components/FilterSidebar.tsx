import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function FilterSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with pre-filled content
      const mailtoLink = `mailto:bhupalsingh@devbhoomiwings.com?subject=${encodeURIComponent(subject || 'Query from Devbhoomi Wings')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Also try to send via API if available
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: 'bhupalsingh@devbhoomiwings.com',
            replyTo: email,
            subject: subject || 'Query from Devbhoomi Wings',
            name,
            message,
          }),
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setTimeout(() => setSubmitStatus('idle'), 3000);
        }
      } catch (err) {
        console.log('API not available, email client opened instead');
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCollapsed) {
    return (
      <div className="fixed left-0 top-20 z-40 bg-white border-r border-slate-200 rounded-r-lg shadow-lg">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(false)}
          className="h-12 w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <aside className="fixed left-0 top-20 z-40 w-72 h-[calc(100vh-5rem)] bg-white border-r border-slate-200 overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Collapse Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#14b8a6]" />
            <h3 className="font-semibold text-[#0f172a]">Send Query</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(true)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Query Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Your Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-slate-300"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Email Address</label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-slate-300"
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Subject</label>
            <Input
              type="text"
              placeholder="Query about..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border-slate-300"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Message</label>
            <Textarea
              placeholder="Tell us about your query or requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border-slate-300 min-h-32 resize-none"
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
              ✓ Query sent successfully! We'll respond soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              ✗ Error sending query. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white"
          >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Query'}
          </Button>

          {/* Contact Info */}
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-[#64748b] text-center">
              Direct Email:<br />
              <span className="font-semibold text-[#0f172a]">bhupalsingh@devbhoomiwings.com</span>
            </p>
          </div>
        </form>
      </div>
    </aside>
  );
}
