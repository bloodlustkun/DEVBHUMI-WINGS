import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { SpecialOffersSection } from "./components/SpecialOffersSection";
import { ServicesSection } from "./components/ServicesSection";
import { TripsSection } from "./components/TripsSection";
import { AboutSection } from "./components/AboutSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { BackToTop } from "./components/BackToTop";
import { LoadingScreen } from "./components/LoadingScreen";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[#04121f] text-white overflow-x-hidden">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* SEO Component */}
      <SEO />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Special Offers Section */}
        <section id="offers">
          <SpecialOffersSection />
        </section>

        {/* Trips Section */}
        <section id="trips">
          <TripsSection />
        </section>

        {/* Reviews Section */}
        <section id="reviews">
          <ReviewsSection />
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}