import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  const viewDetailsWhatsApp = '9311344462'; // +91 93113 44462
  const cabBookingWhatsApp = '9311344461'; // +91 93113 44461
  const techSupportPhone = '6395734224';
  const randomWhatsApp = '9690707002';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-lg text-sm">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name" 
                    className="mt-2" 
                    required
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com" 
                    className="mt-2" 
                    required
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 1234567890" 
                    className="mt-2" 
                    required
                  />
                </div>
                <div>
                  <Label>Message</Label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your travel plans..." 
                    className="mt-2" 
                    rows={4} 
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#14b8a6]">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-[#64748b]">9690707002</p>
                    <p className="text-[#64748b]">View Details: +91 {viewDetailsWhatsApp}</p>
                    <p className="text-[#64748b]">Cab Booking: +91 {cabBookingWhatsApp}</p>
                    <p className="text-[#64748b]">Tech Support: +91 {techSupportPhone}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-[#64748b]">Admin: info@devbhoomiwings.com</p>
                    <p className="text-[#64748b]">Support: bhupalsingh@devbhoomiwings.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-[#64748b]">Shop no 8 ganga complex Vasundhra ghaziabad</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-[#14b8a6] to-[#0d9488]">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                    <p className="text-white/90 mb-3">Get instant support on WhatsApp</p>
                    <a
                      href={`https://wa.me/91${randomWhatsApp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#14b8a6] rounded-lg hover:shadow-lg transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
