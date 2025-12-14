import { motion } from "motion/react";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { GlassCard } from "./GlassCard";

const trips = [
  {
    destination: "Haridwar & Rishikesh",
    duration: "2-3 Days",
    type: "Spiritual Tour",
    price: "₹8,999",
    rating: 4.9,
    highlights: ["Ganga Aarti", "Yoga & Meditation", "Adventure Sports", "Temple Visits"],
    image: "spiritual",
  },
  {
    destination: "Pithoragarh",
    duration: "3-4 Days",
    type: "Mountain Adventure",
    price: "₹12,999",
    rating: 5.0,
    highlights: ["Scenic Valleys", "Ancient Temples", "Local Culture", "Himalayan Views"],
    image: "mountain",
  },
  {
    destination: "Nainital & Mussoorie",
    duration: "4-5 Days",
    type: "Hill Station Tour",
    price: "₹14,999",
    rating: 4.8,
    highlights: ["Lake Views", "Cable Car Rides", "Mall Road", "Scenic Viewpoints"],
    image: "hillstation",
  },
  {
    destination: "Dehradun & Dhanaulti",
    duration: "2-3 Days",
    type: "Weekend Getaway",
    price: "₹9,999",
    rating: 4.7,
    highlights: ["Forest Trails", "Eco Parks", "Adventure Activities", "Local Cuisine"],
    image: "weekend",
  },
  {
    destination: "Jim Corbett",
    duration: "2-3 Days",
    type: "Wildlife Safari",
    price: "₹11,999",
    rating: 4.9,
    highlights: ["Tiger Safari", "Nature Walks", "Bird Watching", "Riverside Camps"],
    image: "wildlife",
  },
  {
    destination: "Auli & Joshimath",
    duration: "4-5 Days",
    type: "Snow Adventure",
    price: "₹15,999",
    rating: 5.0,
    highlights: ["Skiing", "Cable Car", "Snow Activities", "Mountain Peaks"],
    image: "snow",
  },
];

export function TripsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04121f] via-[#0f2233] to-[#04121f]" />
      <div className="absolute inset-0 mesh-gradient-animated" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Popular Trips
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our carefully curated travel packages to Uttarakhand's most beautiful destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold border border-cyan-500/30">
                    {trip.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-semibold">{trip.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {trip.destination}
                </h3>
                
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    2-8 People
                  </div>
                </div>

                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  {trip.price}
                  <span className="text-sm text-gray-400 font-normal"> /person</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-left">
                <p className="text-sm font-semibold text-cyan-400 mb-2">Highlights:</p>
                {trip.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                View Details
              </motion.button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
