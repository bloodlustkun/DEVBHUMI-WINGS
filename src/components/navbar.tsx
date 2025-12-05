"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/60e125f48eba70acc7c4bd712a78ebd53a2c0c09.png";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "trips", label: "Trips" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-xl border-b border-cyan-400/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img src={logo} alt="Devbhoomi Wings" className="h-12 w-auto" />
              </motion.div>
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-white tracking-wider">DEVBHOOMI WINGS</div>
              <div className="text-xs text-cyan-400/70 tracking-widest">Premium Travel</div>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <span
                  className={`text-sm tracking-wider transition-colors ${
                    currentPage === item.id
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
                {currentPage === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Contact Button */}
          <motion.a
            href="tel:+919311344462"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-lg shadow-cyan-400/20"
          >
            Contact Us
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-400 p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-4 space-y-4"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                whileHover={{ x: 5 }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="tel:+919311344462"
              whileHover={{ scale: 1.02 }}
              className="block w-full text-center px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30"
            >
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
