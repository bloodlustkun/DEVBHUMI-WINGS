"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "figma:asset/60e125f48eba70acc7c4bd712a78ebd53a2c0c09.png";

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="relative bg-[#050d1a] border-t border-cyan-400/10">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <img src={logo} alt="Devbhoomi Wings" className="h-14 w-auto" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full" />
              </div>
              <div>
                <div className="text-white tracking-wider">DEVBHOOMI</div>
                <div className="text-white tracking-wider">WINGS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium travel experiences across the divine lands of India. Your journey to the Himalayas starts here.
            </p>
            <p className="text-xs text-cyan-400/60">
              Travelmour Wings India Pvt. Ltd.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-white tracking-wider mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
            </h3>
            <div className="space-y-3">
              {["Home", "About Us", "Services", "Trips", "Reviews"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 5, color: "#00e5ff" }}
                  className="block text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-white tracking-wider mb-6 relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
            </h3>
            <div className="space-y-3">
              {["Premium Cab Booking", "Hotel Suite Booking", "Custom Tour Packages", "Char Dham Yatra", "Kashmir Tours"].map((service) => (
                <div key={service} className="text-gray-400 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-white tracking-wider mb-6 relative inline-block">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-cyan-400/60 mb-3 uppercase tracking-wider">Contact Numbers</div>
                <div className="space-y-3">
                  <motion.a
                    href="tel:+919311344461"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div>+91 9311344461</div>
                      <div className="text-xs text-gray-500">Main Office</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919311344462"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div>+91 9311344462</div>
                      <div className="text-xs text-gray-500">Mr. Vaibhav Bisht - Travel Head</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+919311344463"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div>+91 9311344463</div>
                      <div className="text-xs text-gray-500">Mr. Shivam Tiwari - Director</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              <motion.a
                href="mailto:info@devbhoomiwings.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span>info@devbhoomiwings.com</span>
              </motion.a>

              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div>Vasundhara, Ghaziabad</div>
                  <div className="text-xs text-gray-500 mt-1">Serving: Delhi NCR, Pithoragarh, Haldwani, Dehradun</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/20 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-cyan-400/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Travelmour Wings India Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-cyan-400/40 text-xs mt-2">
            Crafted with care for premium travel experiences
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
