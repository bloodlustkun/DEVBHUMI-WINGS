import { TripCard } from './TripCard';

const packages = [
  {
    title: 'Char Dham Circuit',
    image: 'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWRhcm5hdGglMjB0ZW1wbGV8ZW58MXx8fHwxNzY2NTk4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 328,
    duration: '10-12 Days',
    price: '₹45,000',
    tags: ['Spiritual', 'Family-friendly', 'Guided'],
    itinerary: [
      'Yamunotri - Source of Yamuna',
      'Gangotri - Origin of Ganga',
      'Kedarnath - Sacred Shiva Temple',
      'Badrinath - Vishnu Dhaam',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'May-Oct',
  },
  {
    title: 'Nainital – Corbett – Mussoorie Classic',
    image: 'https://images.unsplash.com/photo-1634804246495-0b77a9e9834f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNzb29yaWUlMjBoaWxsc3xlbnwxfHx8fDE3NjY1OTg0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 452,
    duration: '5-7 Days',
    price: '₹28,000',
    tags: ['Family', 'Wildlife', 'Scenic'],
    itinerary: [
      'Nainital Lake - Boating & Mall Road',
      'Jim Corbett - Safari & Wildlife',
      'Mussoorie - Queen of Hills',
    ],
    intensity: 'Low' as const,
    bestSeason: 'Mar-Jun',
  },
  {
    title: 'Auli Snow & Chopta',
    image: 'https://images.unsplash.com/photo-1605199024013-5954321963dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwbW91bnRhaW5zJTIwc2tpaW5nfGVufDF8fHx8MTc2NjU5ODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 267,
    duration: '4-6 Days',
    price: '₹32,000',
    tags: ['Adventure', 'Snow', 'Trek'],
    itinerary: [
      'Auli - Skiing & Cable Car',
      'Chopta - Mini Switzerland',
      'Tungnath - Highest Shiva Temple',
    ],
    intensity: 'High' as const,
    bestSeason: 'Dec-Feb',
  },
  {
    title: 'Pithoragarh Explorer',
    image: 'https://images.unsplash.com/photo-1692272579704-786c80392913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMHRyZWt8ZW58MXx8fHwxNzY2NTk4NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 143,
    duration: '7-9 Days',
    price: '₹38,000',
    tags: ['Remote', 'Trek', 'Cultural'],
    itinerary: [
      'Pithoragarh Fort - Historic Gateway',
      'Munsiyari - Little Kashmir',
      'Johar Valley - Hidden Gem',
      'Milam Glacier - Trekkers Paradise',
    ],
    intensity: 'High' as const,
    bestSeason: 'Apr-Oct',
  },
  {
    title: 'Rishikesh Adventure Weekend',
    image: 'https://images.unsplash.com/photo-1715230656262-9410dfbead2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNoaWtlc2glMjByYWZ0aW5nJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2NjU5ODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 589,
    duration: '2-3 Days',
    price: '₹12,000',
    tags: ['Weekend', 'Adventure', 'Yoga'],
    itinerary: [
      'River Rafting - Ganga Rapids',
      'Bungee Jumping - India\'s Highest',
      'Riverside Camping',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'Sep-Jun',
  },
  {
    title: 'Custom Corporate Offsite – NCR to Devbhoomi',
    image: 'https://images.unsplash.com/photo-1632980277341-3c502ccd1d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YSUyMG1vdW50YWlucyUyMGxha2V8ZW58MXx8fHwxNzY2NTk4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 234,
    duration: '3-5 Days',
    price: '₹25,000',
    tags: ['Corporate', 'Team Building', 'Luxury'],
    itinerary: [
      'Team Activities - Leadership & Trust',
      'Luxury Mountain Resort',
      'Conference Facilities',
    ],
    intensity: 'Low' as const,
    bestSeason: 'Year-round',
  },
];

export function PackagesGrid() {
  return (
    <section className="py-16 bg-[#fafaf9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] text-sm mb-4">
            Smart Packages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Curated Journeys for Every Explorer
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From spiritual pilgrimages to adrenaline-pumping adventures. 
            Each package crafted by local experts who know Devbhoomi inside out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <TripCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
