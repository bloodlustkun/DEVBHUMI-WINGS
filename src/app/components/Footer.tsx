import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Delhi NCR Cabs", href: "#services" },
    { name: "Pithoragarh Travel", href: "#services" },
    { name: "Group Tours", href: "#trips" },
    { name: "Corporate Travel", href: "#services" },
  ],
  destinations: [
    { name: "Haridwar & Rishikesh", href: "#trips" },
    { name: "Pithoragarh", href: "#trips" },
    { name: "Nainital & Mussoorie", href: "#trips" },
    { name: "Jim Corbett", href: "#trips" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#04121f] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-gradient-animated opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Logo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  DEVBHOOMI WINGS
                </span>
                <span className="text-xs text-cyan-400 tracking-wider">
                  Wings Travels Pvt. Ltd.
                </span>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted travel companion for exploring India's divine destinations. 
              Experience luxury, comfort, and spirituality with our premium travel services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@devbhoomiwings.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>info@devbhoomiwings.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">
              Follow us on social media for updates and travel inspiration
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Devbhoomi Wings Travels Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Refund Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
