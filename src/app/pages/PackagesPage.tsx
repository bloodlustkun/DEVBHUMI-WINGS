import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PackagesGrid } from '../components/PackagesGrid';
import { SEO, SchemaMarkup } from '../components/SEO';

export function PackagesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Affordable Travel Packages",
    "description": "Best cheap tour packages for Pithoragarh, Kashmir & India",
    "url": "https://devbhoomiwings.com/packages",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "5000",
      "highPrice": "50000",
      "offerCount": "15"
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <SEO
        title="Cheap Travel Packages in Pithoragarh, Kashmir & India | Best Prices"
        description="Book affordable tour packages starting from ₹5000. Spiritual, adventure & family tours in Pithoragarh, Kashmir & Uttarakhand with best local prices guaranteed."
        keywords="cheap tour packages, budget travel, affordable holidays, Pithoragarh tours, Kashmir packages, best prices, tour deals India"
        url="https://devbhoomiwings.com/packages"
      />
      <SchemaMarkup data={schemaData} />
      
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-8">Affordable Travel Packages - Best Prices in India</h1>
          <p className="text-gray-600 mb-8">Discover our budget-friendly travel packages for Pithoragarh, Kashmir, and across North India. Starting from ₹5000 only!</p>
          <PackagesGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
