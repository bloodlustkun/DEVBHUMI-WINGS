/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import logo from "../../assets/60e125f48eba70acc7c4bd712a78ebd53a2c0c09.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Devbhumi Wings" className="h-12 w-auto" />
              <div>
                <h3 className="text-white">Devbhumi Wings</h3>
              </div>
            </div>
            <p className="text-slate-400">
              Your trusted travel partner in the Himalayas. Safe, reliable, and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                📞 <span>93113 38083</span>
              </li>
              <li className="flex items-center gap-2">
                📱 <a href="tel:9311344462" className="hover:text-white transition-colors">93113 44462</a>
              </li>
              <li className="flex items-center gap-2">
                💬 <a href="https://wa.me/919311344462" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Chat</a>
              </li>
              <li className="text-xs text-slate-500 mt-2">
                Available 24/7 for bookings
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Devbhumi Wings. All rights reserved.</p>
          <p className="mt-2">Pithoragarh to Anywhere - Your Price, Expertise Ours</p>
        </div>
      </div>
    </footer>
  );
}
