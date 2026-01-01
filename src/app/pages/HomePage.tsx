import { Header } from '../components/Header';
import { FilterSidebar } from '../components/FilterSidebar';
import { HeroSection } from '../components/HeroSection';
import { PackagesGrid } from '../components/PackagesGrid';
import { DestinationsMap } from '../components/DestinationsMap';
import { TransportOS } from '../components/TransportOS';
import { StaysExperiences } from '../components/StaysExperiences';
import { ItineraryBuilder } from '../components/ItineraryBuilder';
import { ReviewsSection } from '../components/ReviewsSection';
import { Footer } from '../components/Footer';
import { NewsTicker } from '../components/NewsTicker';
import { SEO, SchemaMarkup } from '../components/SEO';

export function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Devbhoomi Wings",
    "url": "https://devbhoomiwings.com",
    "logo": "/src/assets/devbhoomi.png",
    "description": "Affordable travel packages for Pithoragarh, Kashmir, and North India",
    "telephone": "+91 93113 44463",
    "email": "info@devbhoomiwings.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Uttarakhand",
      "addressLocality": "Pithoragarh"
    },
    "priceRange": "₹5000-₹50000",
    "areaServed": ["Pithoragarh", "Kashmir", "Uttarakhand", "Himachal Pradesh"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <SEO
        title="Affordable Travel Packages for Pithoragarh, Kashmir & India | Devbhoomi Wings"
        description="Book cheap tour packages for Pithoragarh, Kashmir, and North India with trusted local guides. Best prices guaranteed. Spiritual, adventure, and family trips available."
        keywords="Pithoragarh tour, Kashmir tour packages, cheap travel, budget tours, Uttarakhand travel, local travel India, best tour prices, affordable holidays"
      />
      <SchemaMarkup data={schemaData} />
      
      <Header />
      <NewsTicker />
      
      {/* Main Layout with Sidebar */}
      <div className="relative">
        <FilterSidebar />
        
        {/* Main Content - offset for sidebar on desktop */}
        <div className="lg:ml-72 transition-all duration-300">
          <main>
            {/* Hero Section */}
            <HeroSection />
            
            {/* Packages Grid */}
            <PackagesGrid />
            
            {/* Destinations Map */}
            <DestinationsMap />
            
            {/* Transport OS */}
            <TransportOS />
            
            {/* Stays & Experiences */}
            <StaysExperiences />
            
            {/* Itinerary Builder */}
            <ItineraryBuilder />
            
            {/* Reviews Section */}
            <ReviewsSection />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
