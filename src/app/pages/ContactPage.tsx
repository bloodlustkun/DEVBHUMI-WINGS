import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
  const whatsappNumbers = ['9311344462', '9311344461', '9311344463'];
  const randomWhatsApp = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];

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
              <form className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input placeholder="Your Name" className="mt-2" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" className="mt-2" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input placeholder="+91 1234567890" className="mt-2" />
                </div>
                <div>
                  <Label>Message</Label>
                  <Textarea placeholder="Tell us about your travel plans..." className="mt-2" rows={4} />
                </div>
                <Button className="w-full bg-[#14b8a6]">Send Message</Button>
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
                    <p className="text-[#64748b]">9311344461</p>
                    <p className="text-[#64748b]">9311344462</p>
                    <p className="text-[#64748b]">9311344463</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-[#64748b]">bhupalsingh@devbhoomiwings.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-[#64748b]">Shop no. 208, Ganga complex</p>
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
