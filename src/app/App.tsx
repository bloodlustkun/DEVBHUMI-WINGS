/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { Analytics } from "@vercel/analytics/react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { CookieConsent } from "./components/CookieConsent";
import { LegalSections } from "./components/LegalSections";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Features />
      <Gallery />
      <ContactForm />
      <LegalSections />
      <Footer />
      <CookieConsent />
      <Toaster position="top-center" />
      <Analytics />
    </div>
  );
}