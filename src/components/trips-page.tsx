"use client";

import { motion } from "motion/react";
import { MapPin, Calendar, Users, Clock, Star, Phone, Mail, Mountain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TripsPage() {
  const trips = [
    {
      id: 1,
      title: "Aadi Kailash Yatra",
      subtitle: "The Divine Journey to Chhota Kailash",
      duration: "10-12 Days",
      difficulty: "Moderate to Challenging",
      bestTime: "May to October",
      groupSize: "8-15 People",
      priceRange: "₹45,000 - ₹55,000",
      image: "https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3NzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Darshan at Om Parvat",
        "Trek to Aadi Kailash (6,191m)",
        "Visit Parvati Sarovar & Gauri Kund",
        "Spiritual awakening experience",
        "Scenic Himalayan landscapes",
      ],
      info: "High altitude trek requiring good fitness. See the natural OM formation on the mountain. Includes acclimatization days, camping equipment, and permits.",
    },
    {
      id: 2,
      title: "Char Dham Yatra",
      subtitle: "Complete Spiritual Circuit",
      duration: "10-12 Days",
      difficulty: "Moderate",
      bestTime: "May to November",
      groupSize: "10-20 People",
      priceRange: "₹35,000 - ₹45,000",
      image: "https://images.unsplash.com/photo-1736914322688-89be02b72249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVdHRhcmFraGFuZCUyMHRlbXBsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NjQ3NzY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Yamunotri Temple",
        "Gangotri Temple",
        "Kedarnath Temple",
        "Badrinath Temple",
        "Sacred river bathing",
      ],
      info: "Visit all four dhams in one journey. Includes hotel stays, meals, and experienced local guides who know the routes and temples intimately.",
    },
    {
      id: 3,
      title: "Kashmir Paradise Tour",
      subtitle: "Heaven on Earth",
      duration: "7-9 Days",
      difficulty: "Easy",
      bestTime: "April to October",
      groupSize: "6-12 People",
      priceRange: "₹30,000 - ₹40,000",
      image: "https://images.unsplash.com/photo-1622642897052-9410411a798a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwdmFsbGV5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDc3NjYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Dal Lake Shikara Ride",
        "Gulmarg Cable Car",
        "Pahalgam Valley",
        "Mughal Gardens",
        "Traditional houseboats",
      ],
      info: "Stay in houseboats on Dal Lake, enjoy gondola rides in Gulmarg, explore Betaab Valley in Pahalgam. All sightseeing and local transport included.",
    },
    {
      id: 4,
      title: "Valley of Flowers Trek",
      subtitle: "UNESCO World Heritage Site",
      duration: "8-10 Days",
      difficulty: "Moderate to Challenging",
      bestTime: "July to September",
      groupSize: "8-12 People",
      priceRange: "₹25,000 - ₹35,000",
      image: "https://images.unsplash.com/photo-1685850749074-9cf8023d7e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjQ3NzY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Rare alpine flowers",
        "Hemkund Sahib",
        "Ghangaria village",
        "Himalayan wildlife",
        "Pristine landscapes",
      ],
      info: "Best time July-August when flowers bloom. Trek through meadows of rare alpine flowers. Visit sacred Hemkund Sahib gurudwara at 4,632m altitude.",
    },
    {
      id: 5,
      title: "Manali Adventure",
      subtitle: "Snow & Mountains",
      duration: "5-7 Days",
      difficulty: "Easy to Moderate",
      bestTime: "October to March",
      groupSize: "6-15 People",
      priceRange: "₹20,000 - ₹30,000",
      image: "https://images.unsplash.com/photo-1684041466699-2763d85b0ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5hbGklMjBJbmRpYSUyMHNub3d8ZW58MXx8fHwxNzY0Nzc2NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Rohtang Pass",
        "Solang Valley activities",
        "Hadimba Temple",
        "River rafting",
        "Snow activities",
      ],
      info: "Perfect for adventure lovers. Activities include paragliding in Solang, snow activities at Rohtang, river rafting in Kullu. All adventure sports optional.",
    },
    {
      id: 6,
      title: "Uttarakhand Spiritual Retreat",
      subtitle: "Divine Lands Experience",
      duration: "6-8 Days",
      difficulty: "Easy",
      bestTime: "Year Round",
      groupSize: "8-15 People",
      priceRange: "₹18,000 - ₹25,000",
      image: "https://images.unsplash.com/photo-1736914322688-89be02b72249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVdHRhcmFraGFuZCUyMHRlbXBsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NjQ3NzY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: [
        "Rishikesh yoga & meditation",
        "Haridwar Ganga Aarti",
        "Mussoorie hill station",
        "Dehradun city tour",
        "Spiritual experiences",
      ],
      info: "Experience Ganga Aarti at Har Ki Pauri, yoga sessions in Rishikesh, scenic views from Mussoorie. Includes ashram visits and spiritual guidance.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3NzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Trips"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/90 to-[#0a1628]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mountain className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-white">Travel Packages</h1>
            <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Discover our curated collection of premium travel experiences across India's most divine and breathtaking destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-400/20 backdrop-blur-md border border-cyan-400/30">
                    <span className="text-cyan-400 text-xs">{trip.difficulty}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white mb-1">{trip.title}</h3>
                    <p className="text-cyan-400/80 text-sm">{trip.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Trip Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-xs text-gray-500">Duration</div>
                        <div className="text-sm text-gray-300">{trip.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-xs text-gray-500">Best Time</div>
                        <div className="text-sm text-gray-300">{trip.bestTime}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-xs text-gray-500">Group Size</div>
                        <div className="text-sm text-gray-300">{trip.groupSize}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-xs text-gray-500">Price Range</div>
                        <div className="text-sm text-cyan-400">{trip.priceRange}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Highlights</div>
                    <div className="space-y-2">
                      {trip.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <MapPin className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-400">{highlight}</span>
                        </div>
                      ))}
                      {trip.highlights.length > 3 && (
                        <span className="text-xs text-cyan-400/60">+{trip.highlights.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="tel:+919311344461"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 hover:from-cyan-500/30 hover:to-blue-600/30 transition-colors"
                  >
                    Contact for Booking
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#050d1a] to-[#0a1628]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20"
          >
            <h2 className="text-white">Ready for Your Adventure?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Contact us to customize your perfect journey or get more details about any package.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="tel:+919311344461"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-xl shadow-cyan-400/20 flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9311344461</span>
              </motion.a>

              <motion.a
                href="mailto:info@devbhoomiwings.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white border border-cyan-400/30 hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>info@devbhoomiwings.com</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}