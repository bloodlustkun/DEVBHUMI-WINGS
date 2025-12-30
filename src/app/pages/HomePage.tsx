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

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      
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
