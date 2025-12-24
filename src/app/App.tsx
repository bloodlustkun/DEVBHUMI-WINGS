/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { CookieConsent } from "./components/CookieConsent";
import { LegalSections } from "./components/LegalSections";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <ContactForm />
      <LegalSections />
      <Footer />
      <CookieConsent />
      <Toaster position="top-center" />
    </div>
  );
}