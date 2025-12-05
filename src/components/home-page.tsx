"use client";

import { motion } from "motion/react";
import { Shield, Users, Star, Phone, Mail, Car, Hotel, Map, Compass, TrendingUp, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/60e125f48eba70acc7c4bd712a78ebd53a2c0c09.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { value: "5+", label: "Years Experience", icon: Award },
    { value: "10k+", label: "Happy Customers", icon: Users },
    { value: "50+", label: "Premium Routes", icon: Map },
    { value: "4.7★", label: "Customer Rating", icon: Star },
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your safety is our top priority. Professional drivers and maintained vehicles.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Luxury experience with attention to every detail. Best-in-class service.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional, polite staff with 5+ years of expertise in travel industry.",
    },
    {
      icon: TrendingUp,
      title: "Best Performance",
      description: "Top-rated cab & tour provider during Corona lockdown. Proven track record.",
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Premium Cab Booking",
      description: "Sedan, SUV, Tempo Traveller - all premium vehicles for comfortable journeys.",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Hotel,
      title: "Hotel Suite Booking",
      description: "Handpicked luxury accommodations at partner hotels across India.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Compass,
      title: "Custom Tour Packages",
      description: "Curated experiences for Char Dham, Kashmir, Manali, Uttarakhand & more.",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const destinations = [
    {
      name: "Kashmir Deluxe Tour",
      image: "https://images.unsplash.com/photo-1622642897052-9410411a798a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwdmFsbGV5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDc3NjYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Paradise on Earth",
    },
    {
      name: "Char Dham Yatra",
      image: "https://images.unsplash.com/photo-1736914322688-89be02b72249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVdHRhcmFraGFuZCUyMHRlbXBsZSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NjQ3NzY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Spiritual Journey",
    },
    {
      name: "Manali Adventure",
      image: "https://images.unsplash.com/photo-1684041466699-2763d85b0ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5hbGklMjBJbmRpYSUyMHNub3d8ZW58MXx8fHwxNzY0Nzc2NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Snow & Mountains",
    },
    {
      name: "Uttarakhand Spiritual",
      image: "https://images.unsplash.com/photo-1685850749074-9cf8023d7e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjQ3NzY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Divine Lands",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3NzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Himalayan Mountains"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#0a1628]/80 to-[#0a1628]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img src={logo} alt="Devbhoomi Wings" className="h-40 w-auto drop-shadow-2xl" />
              </motion.div>
              <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-white mb-4 tracking-tight">
              DEVBHOOMI WINGS
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"
            />
            <p className="text-cyan-400/90 text-xl md:text-2xl tracking-wider">
              Premium Travel Experiences
            </p>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              A startup venture of a big travel company. Embark on unforgettable journeys across India's most divine destinations with our big professional team. 
              Experience luxury, comfort, and spirituality across Delhi NCR, Pithoragarh, Haldwani, Dehradun and beyond.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-6 pt-8"
          >
            <motion.button
              onClick={() => onNavigate("trips")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-xl shadow-cyan-400/20 flex items-center gap-3"
            >
              <Compass className="w-5 h-5" />
              <span>Explore Trips</span>
            </motion.button>

            <motion.a
              href="tel:+919311344462"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white border border-cyan-400/30 hover:bg-white/10 transition-colors flex items-center gap-3"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Contact Us</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 border-y border-cyan-400/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-3 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl text-white tracking-tight">{stat.value}</div>
                <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Why Choose Us</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              With 5+ years of excellence, we've been the top choice for travelers seeking premium experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-white tracking-wider">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0a1628] to-[#050d1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Services</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-3 tracking-wider">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <motion.button
                    onClick={() => onNavigate("services")}
                    whileHover={{ x: 5 }}
                    className="text-cyan-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Popular Destinations</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Discover India's most breathtaking locations with our curated travel packages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <h3 className="text-white tracking-wider">{destination.name}</h3>
                  <p className="text-cyan-400/80 text-sm">{destination.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => onNavigate("trips")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-lg shadow-cyan-400/20"
            >
              View All Trips
            </motion.button>
          </motion.div>
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
            className="space-y-8"
          >
            <h2 className="text-white">Ready to Start Your Journey?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Contact our expert team today to book your premium travel experience. Available 24/7 to assist you.
            </p>

            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:+919311344462"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-xl shadow-cyan-400/20 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div>+91 9311344462</div>
                    <div className="text-xs opacity-80">Mr. Vaibhav Bisht - Travel Head</div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919311344463"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-xl shadow-cyan-400/20 flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div>+91 9311344463</div>
                    <div className="text-xs opacity-80">Mr. Shivam Tiwari - Director</div>
                  </div>
                </motion.a>
              </div>

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
