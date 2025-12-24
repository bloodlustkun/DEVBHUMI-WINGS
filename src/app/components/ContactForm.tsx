/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Label } from "./ui/label";
import { motion } from "motion/react";
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from "lucide-react";
import { toast } from "sonner";

// Contact numbers for randomization
const contactNumbers = [
  { display: "93113 44462", tel: "9311344462", whatsapp: "919311344462" },
  { display: "93113 44463", tel: "9311344463", whatsapp: "919311344463" },
  { display: "93113 44461", tel: "9311344461", whatsapp: "919311344461" },
  { display: "93113 38083", tel: "9311338083", whatsapp: "919311338083" },
];

export function ContactForm() {
  const [selectedContact] = useState(() => 
    contactNumbers[Math.floor(Math.random() * contactNumbers.length)]
  );
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-slate-800">Get in Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to embark on your journey? Contact us for bookings or inquiries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Contact Information</CardTitle>
                <CardDescription>Reach out to us anytime</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="size-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 mb-1">Phone</h3>
                    <a href={`tel:${selectedContact.tel}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      +91 {selectedContact.display}
                    </a>
                    <p className="text-slate-600 text-sm">Available 24/7</p>
                    <a 
                      href={`https://wa.me/${selectedContact.whatsapp}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="size-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">info@devbhumiwings.com</p>
                    <p className="text-slate-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="size-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 mb-1">Location</h3>
                    <p className="text-slate-600">Pithoragarh, Uttarakhand</p>
                    <p className="text-slate-600">Serving Himalayan region</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-slate-800 mb-3">Business Hours</h3>
                  <p className="text-slate-600">24/7 Service Available</p>
                  <p className="text-slate-600">Office: Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Send us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans..."
                      required
                      rows={4}
                      className="mt-1.5"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 gap-2"
                  >
                    <SendIcon className="size-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
