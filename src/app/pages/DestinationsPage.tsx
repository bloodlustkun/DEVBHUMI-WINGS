import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DestinationsMap } from '../components/DestinationsMap';
import { SEO, SchemaMarkup } from '../components/SEO';

export function DestinationsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Travel Destinations - Pithoragarh, Kashmir, Uttarakhand",
    "description": "Explore top travel destinations in Pithoragarh, Kashmir, and North India. Best cheap packages with local guides.",
    "url": "https://devbhoomiwings.com/destinations",
    "mainEntity": {
      "@type": "Thing",
      "name": "Destination Tours in India"
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <SEO
        title="Top Travel Destinations in Pithoragarh, Kashmir & Uttarakhand | Cheap Tours"
        description="Explore the best travel destinations in Pithoragarh, Kashmir, Uttarakhand & North India. Affordable tour packages with local expertise and best prices."
        keywords="Pithoragarh destinations, Kashmir tours, Uttarakhand travel, cheap tour packages, local destinations, budget travel India"
        url="https://devbhoomiwings.com/destinations"
      />
      <SchemaMarkup data={schemaData} />
      
      <Header />
      <main className="py-16">
        <DestinationsMap />
      </main>
      <Footer />
    </div>
  );
}
