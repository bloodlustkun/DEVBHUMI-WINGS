"use client";

import { useState } from "react";
import { InteractiveBackground } from "./components/interactive-background";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { HomePage } from "./components/home-page";
import { AboutPage } from "./components/about-page";
import { ServicesPage } from "./components/services-page";
import { TripsPage } from "./components/trips-page";
import { ReviewsPage } from "./components/reviews-page";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "trips":
        return <TripsPage />;
      case "reviews":
        return <ReviewsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a1628] overflow-x-hidden">
      {/* Interactive Particle Background */}
      <InteractiveBackground />

      {/* Navigation */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Main Content */}
      <main className="relative z-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
