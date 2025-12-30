import { useState } from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Card } from './ui/card';

interface Destination {
  id: string;
  name: string;
  position: { x: number; y: number };
  image: string;
  timeFromHub: string;
  idealMonth: string;
  tagline: string;
}

const destinations: Destination[] = [
  { 
    id: 'dehradun', 
    name: 'Dehradun', 
    position: { x: 30, y: 45 },
    image: 'https://images.unsplash.com/photo-1632980277341-3c502ccd1d12?w=400',
    timeFromHub: '5h from Delhi',
    idealMonth: 'Year-round',
    tagline: 'Gateway to Devbhoomi',
  },
  { 
    id: 'rishikesh', 
    name: 'Rishikesh', 
    position: { x: 35, y: 52 },
    image: 'https://images.unsplash.com/photo-1715230656262-9410dfbead2a?w=400',
    timeFromHub: '5h from Delhi',
    idealMonth: 'Sep-Jun',
    tagline: 'Yoga Capital of the World',
  },
  { 
    id: 'haridwar', 
    name: 'Haridwar', 
    position: { x: 38, y: 58 },
    image: 'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=400',
    timeFromHub: '4h from Delhi',
    idealMonth: 'Year-round',
    tagline: 'Gateway to the Gods',
  },
  { 
    id: 'nainital', 
    name: 'Nainital', 
    position: { x: 65, y: 55 },
    image: 'https://images.unsplash.com/photo-1634804246495-0b77a9e9834f?w=400',
    timeFromHub: '7h from Delhi',
    idealMonth: 'Mar-Jun',
    tagline: 'Lake District of India',
  },
  { 
    id: 'mussoorie', 
    name: 'Mussoorie', 
    position: { x: 25, y: 35 },
    image: 'https://images.unsplash.com/photo-1634804246495-0b77a9e9834f?w=400',
    timeFromHub: '6h from Delhi',
    idealMonth: 'Apr-Jun',
    tagline: 'Queen of the Hills',
  },
  { 
    id: 'corbett', 
    name: 'Jim Corbett', 
    position: { x: 70, y: 65 },
    image: 'https://images.unsplash.com/photo-1632980277341-3c502ccd1d12?w=400',
    timeFromHub: '5h from Delhi',
    idealMonth: 'Nov-Jun',
    tagline: 'Wildlife Sanctuary',
  },
  { 
    id: 'auli', 
    name: 'Auli', 
    position: { x: 45, y: 20 },
    image: 'https://images.unsplash.com/photo-1605199024013-5954321963dd?w=400',
    timeFromHub: '12h from Delhi',
    idealMonth: 'Dec-Mar',
    tagline: 'Skiing Paradise',
  },
  { 
    id: 'chopta', 
    name: 'Chopta', 
    position: { x: 50, y: 30 },
    image: 'https://images.unsplash.com/photo-1692272579704-786c80392913?w=400',
    timeFromHub: '10h from Delhi',
    idealMonth: 'Apr-Nov',
    tagline: 'Mini Switzerland',
  },
  { 
    id: 'pithoragarh', 
    name: 'Pithoragarh', 
    position: { x: 80, y: 25 },
    image: 'https://images.unsplash.com/photo-1692272579704-786c80392913?w=400',
    timeFromHub: '14h from Delhi',
    idealMonth: 'Apr-Oct',
    tagline: 'Little Kashmir',
  },
  { 
    id: 'kedarnath', 
    name: 'Kedarnath', 
    position: { x: 40, y: 15 },
    image: 'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=400',
    timeFromHub: '2 days from Delhi',
    idealMonth: 'May-Oct',
    tagline: 'Sacred Jyotirlinga',
  },
  { 
    id: 'badrinath', 
    name: 'Badrinath', 
    position: { x: 48, y: 10 },
    image: 'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=400',
    timeFromHub: '2 days from Delhi',
    idealMonth: 'May-Oct',
    tagline: 'Vishnu Dhaam',
  },
];

export function DestinationsMap() {
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-sm mb-4">
            Interactive Map
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Explore Uttarakhand
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover destinations across the Himalayas. Hover over any location 
            to learn more about what makes it special.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 relative overflow-hidden">
              {/* Stylized Map Background */}
              <div className="relative h-[500px]">
                {/* Mountain silhouette background */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 350L100 320L200 280L300 250L400 200L500 220L600 280L700 320L800 350V500H0V350Z" fill="#0f172a"/>
                    <path d="M0 380L100 350L200 320L300 300L400 280L500 300L600 340L700 370L800 390V500H0V380Z" fill="#14b8a6" opacity="0.3"/>
                  </svg>
                </div>

                {/* Destination Pins */}
                {destinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ 
                      left: `${dest.position.x}%`, 
                      top: `${dest.position.y}%`,
                    }}
                    onMouseEnter={() => setHoveredDest(dest)}
                    onMouseLeave={() => setHoveredDest(null)}
                  >
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full bg-[#14b8a6] border-2 border-white shadow-lg transition-all duration-300 ${
                        hoveredDest?.id === dest.id ? 'scale-150' : 'group-hover:scale-125'
                      }`} />
                      <div className={`w-6 h-6 rounded-full bg-[#14b8a6]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping ${
                        hoveredDest?.id === dest.id ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs font-semibold text-[#0f172a] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {dest.name}
                    </div>
                  </div>
                ))}

                {/* Connecting Routes (illustrative) */}
                <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  {/* Sample route lines */}
                  <line x1="30%" y1="45%" x2="35%" y2="52%" stroke="url(#routeGradient)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="35%" y1="52%" x2="40%" y2="15%" stroke="url(#routeGradient)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="40%" y1="15%" x2="48%" y2="10%" stroke="url(#routeGradient)" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-md">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-[#14b8a6]" />
                  <span>Major Destinations</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Destination Info Panel */}
          <div className="lg:col-span-1">
            {hoveredDest ? (
              <Card className="overflow-hidden shadow-lg">
                <img 
                  src={hoveredDest.image} 
                  alt={hoveredDest.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-[#0f172a] mb-1">
                      {hoveredDest.name}
                    </h3>
                    <p className="text-sm text-slate-600 italic">
                      {hoveredDest.tagline}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-[#14b8a6]" />
                      <span className="text-slate-600">{hoveredDest.timeFromHub}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-[#f59e0b]" />
                      <span className="text-slate-600">Best: {hoveredDest.idealMonth}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-8 h-full flex items-center justify-center bg-slate-50">
                <div className="text-center space-y-3">
                  <MapPin className="h-12 w-12 text-slate-300 mx-auto" />
                  <p className="text-slate-500">
                    Hover over any destination pin to see details
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
