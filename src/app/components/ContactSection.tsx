import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04121f] via-[#071d29] to-[#04121f]" />
      <div className="absolute inset-0 mesh-gradient-animated" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your journey? Contact us today and let's plan your perfect trip
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <GlassCard delay={0}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
            >
              <Phone className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <a
              href="tel:+919876543210"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              +91 98765 43210
            </a>
            <p className="text-gray-400 text-sm mt-2">Mon-Sun: 24/7 Available</p>
          </GlassCard>

          <GlassCard delay={0.1}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
            >
              <Mail className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <a
              href="mailto:info@devbhoomiwings.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors break-all"
            >
              info@devbhoomiwings.com
            </a>
            <p className="text-gray-400 text-sm mt-2">We reply within 24 hours</p>
          </GlassCard>

          <GlassCard delay={0.2}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
            >
              <MessageSquare className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/919876543210"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <p className="text-gray-400 text-sm mt-2">Instant response</p>
          </GlassCard>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="block text-gray-300 mb-2 text-sm">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-gray-300 mb-2 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <label className="block text-gray-300 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              
              <div className="text-left">
                <label className="block text-gray-300 mb-2 text-sm">Destination</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors">
                  <option value="" className="bg-[#0f2233]">Select Destination</option>
                  <option value="haridwar" className="bg-[#0f2233]">Haridwar & Rishikesh</option>
                  <option value="pithoragarh" className="bg-[#0f2233]">Pithoragarh</option>
                  <option value="nainital" className="bg-[#0f2233]">Nainital & Mussoorie</option>
                  <option value="dehradun" className="bg-[#0f2233]">Dehradun</option>
                  <option value="corbett" className="bg-[#0f2233]">Jim Corbett</option>
                  <option value="auli" className="bg-[#0f2233]">Auli</option>
                  <option value="other" className="bg-[#0f2233]">Other</option>
                </select>
              </div>
              
              <div className="text-left">
                <label className="block text-gray-300 mb-2 text-sm">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Office Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <GlassCard className="max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Office</h3>
            <p className="text-gray-400">
              Delhi NCR, India
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Serving customers across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
