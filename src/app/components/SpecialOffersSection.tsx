import { motion } from "motion/react";
import { Check, Tag } from "lucide-react";
import { GlassCard } from "./GlassCard";

const offers = [
  {
    title: "Delhi → Pithoragarh Shared Cab",
    price: "₹3,000 per seat",
    badge: null,
    features: [
      "Comfortable shared AC cab",
      "Verified mountainous drivers",
      "Safe & scenic routes",
      "Pickup from Delhi NCR",
    ],
  },
  {
    title: "Luxury SUV Family Trip",
    price: "Starting at ₹7,999",
    badge: "Flat 10% Off",
    features: [
      "Premium SUV experience",
      "Haridwar, Nainital, Pithoragarh routes",
      "Family-friendly comfort",
      "Customizable itineraries",
      "Experienced local guides",
    ],
  },
  {
    title: "Tempo Traveller Group Package",
    price: "Starting at ₹7,999",
    badge: null,
    features: [
      "Spacious group travel",
      "Complete tour packages",
      "Professional drivers",
      "All-inclusive pricing",
    ],
  },
];

export function SpecialOffersSection() {
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
            Special Offers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exclusive deals and packages for your next adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <GlassCard key={index} delay={index * 0.15}>
              {offer.badge && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <Tag className="w-4 h-4" />
                  {offer.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-4">
                {offer.title}
              </h3>
              
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                {offer.price}
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Book Now
              </motion.button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
