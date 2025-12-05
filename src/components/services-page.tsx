"use client";

import { motion } from "motion/react";
import { Car, Hotel, Map, Phone, Mail, CheckCircle, Users, Shield, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesPage() {
  const cabServices = [
    {
      name: "Premium Sedan",
      description: "Comfortable 4-seater sedans perfect for Delhi NCR, Dehradun city tours and short trips.",
      features: ["AC", "Professional Driver", "GPS Tracking", "Clean & Sanitized", "From Vasundhara Office"],
      image: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzM1Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Luxury SUV",
      description: "Spacious SUVs for family trips to Haldwani, Pithoragarh and mountain terrain with extra comfort.",
      features: ["7-Seater", "Mountain Ready", "Premium Interiors", "Extra Luggage Space", "Hill Station Expert"],
      image: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzM1Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Tempo Traveller",
      description: "Group travel solution for 10-17 passengers with maximum comfort for long journeys.",
      features: ["Group Travel", "Pushback Seats", "Entertainment System", "First Aid Kit", "Long Distance Ready"],
      image: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzM1Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Share Cab to Pithoragarh",
      description: "Affordable shared cab service from Delhi NCR to Pithoragarh. Regular departures available.",
      features: ["₹3,000 per seat", "₹14,000 full booking", "Weekly Service", "AC & Comfortable", "Direct Route"],
      price: "₹3,000/seat",
      image: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzM1Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const tourPackages = [
    {
      name: "Char Dham Yatra",
      destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
      description: "Complete spiritual journey to all four sacred Hindu pilgrimage sites in Uttarakhand. Experience divine blessings at each temple with our expert guides.",
      duration: "10-12 Days",
      difficulty: "Moderate",
      info: "Visit all four dhams in one journey. Includes hotel stays, meals, and experienced local guides who know the routes and temples intimately.",
    },
    {
      name: "Adi Kailash Tour",
      destinations: ["Adi Kailash", "Om Parvat", "Parvati Sarovar"],
      description: "Trek to the mystical Adi Kailash, also known as Chhota Kailash. Witness the divine Om Parvat formation.",
      duration: "12-14 Days",
      difficulty: "Challenging",
      info: "High altitude trek requiring good fitness. See the natural OM formation on the mountain. Includes acclimatization days, camping equipment, and permits.",
    },
    {
      name: "Kashmir Paradise",
      destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
      description: "Experience the breathtaking beauty of Kashmir valleys and lakes. Dal Lake shikara rides and Mughal gardens.",
      duration: "7-9 Days",
      difficulty: "Easy",
      info: "Stay in houseboats on Dal Lake, enjoy gondola rides in Gulmarg, explore Betaab Valley in Pahalgam. All sightseeing and local transport included.",
    },
    {
      name: "Manali Adventure",
      destinations: ["Manali", "Rohtang Pass", "Solang Valley", "Kullu"],
      description: "Adventure-filled trip with snow activities and mountain landscapes. Paragliding, skiing, and river rafting options.",
      duration: "5-7 Days",
      difficulty: "Easy to Moderate",
      info: "Perfect for adventure lovers. Activities include paragliding in Solang, snow activities at Rohtang, river rafting in Kullu. All adventure sports optional.",
    },
    {
      name: "Uttarakhand Spiritual",
      destinations: ["Rishikesh", "Haridwar", "Dehradun", "Mussoorie"],
      description: "Explore the spiritual and scenic beauty of Uttarakhand's famous cities. Yoga, meditation, and Ganga Aarti.",
      duration: "6-8 Days",
      difficulty: "Easy",
      info: "Experience Ganga Aarti at Har Ki Pauri, yoga sessions in Rishikesh, scenic views from Mussoorie. Includes ashram visits and spiritual guidance.",
    },
    {
      name: "Valley of Flowers Trek",
      destinations: ["Valley of Flowers", "Hemkund Sahib", "Badrinath"],
      description: "UNESCO World Heritage site with stunning alpine flowers and landscapes. Rare Himalayan flora and fauna.",
      duration: "8-10 Days",
      difficulty: "Moderate to Challenging",
      info: "Best time July-August when flowers bloom. Trek through meadows of rare alpine flowers. Visit sacred Hemkund Sahib gurudwara at 4,632m altitude.",
    },
  ];

  const whyChooseFeatures = [
    {
      icon: Shield,
      title: "100% Safety",
      description: "All vehicles sanitized and drivers trained in safety protocols.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Well-maintained fleet with regular servicing and quality checks.",
    },
    {
      icon: Users,
      title: "Expert Drivers",
      description: "Professional, polite drivers with extensive route knowledge.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NzM1Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Services"
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
            <h1 className="text-white">Our Services</h1>
            <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Comprehensive travel solutions designed to make your journey comfortable, safe, and memorable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Cab Booking */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Car className="w-8 h-8 text-cyan-400" />
              <h2 className="text-white">Premium Cab Booking</h2>
            </div>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Choose from our fleet of premium vehicles for a comfortable and safe journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cabServices.map((cab, index) => (
              <motion.div
                key={cab.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={cab.image}
                    alt={cab.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {cab.price && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-400/20 backdrop-blur-md border border-cyan-400/30">
                      <span className="text-cyan-400 text-sm">{cab.price}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-white tracking-wider">{cab.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cab.description}</p>

                  <div className="space-y-2 pt-2">
                    {cab.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="tel:+919311344462"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 hover:from-cyan-500/30 hover:to-blue-600/30 transition-colors mt-4"
                  >
                    Contact to Book
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Suite Booking */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0a1628] to-[#050d1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Hotel className="w-8 h-8 text-cyan-400" />
              <h2 className="text-white">Hotel Suite Booking</h2>
            </div>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Handpicked luxury accommodations at partner hotels across India for your comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlfGVufDF8fHx8MTc2NDY2ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hotel Suite"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-white text-2xl">Premium Accommodations</h3>
              <p className="text-gray-400 leading-relaxed">
                We partner with the finest hotels to ensure your stay is as comfortable as your journey. From luxury suites to boutique hotels, we offer accommodations that match your preferences and budget.
              </p>

              <div className="space-y-3">
                {[
                  "Handpicked partner hotels",
                  "Clean and well-maintained rooms",
                  "Prime locations near attractions",
                  "24/7 room service available",
                  "Special rates for our customers",
                  "Verified and trusted properties",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="tel:+919311344461"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-lg shadow-cyan-400/20 mt-4"
              >
                Book Your Stay
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Tour Packages */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Map className="w-8 h-8 text-cyan-400" />
              <h2 className="text-white">Custom Tour Packages</h2>
            </div>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Curated travel experiences across India's most divine and scenic destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <motion.div
                key={tour.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-white tracking-wider">{tour.name}</h3>
                    <div className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                      <span className="text-cyan-400 text-xs">{tour.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{tour.description}</p>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Destinations</div>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.map((dest) => (
                        <span
                          key={dest}
                          className="px-3 py-1 rounded-full bg-white/5 border border-cyan-400/20 text-cyan-400/80 text-xs"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs text-gray-500">Difficulty:</span>
                    <span className="text-xs text-cyan-400">{tour.difficulty}</span>
                  </div>

                  <motion.a
                    href="tel:+919311344461"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-400 hover:from-cyan-500/30 hover:to-blue-600/30 transition-colors mt-4"
                  >
                    Contact for Booking
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#050d1a] to-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Why Choose Our Services</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20"
          >
            <h2 className="text-white">Ready to Book?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Contact us today for personalized service packages and exclusive rates.
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