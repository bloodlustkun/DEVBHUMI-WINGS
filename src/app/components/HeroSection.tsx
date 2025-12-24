import { motion } from "motion/react";
import { Compass, Phone } from "lucide-react";
import { AnimatedMeshBackground } from "./AnimatedMeshBackground";
import { ParticleBackground } from "./ParticleBackground";
import { ScrollIndicator } from "./ScrollIndicator";
import { Logo } from "./Logo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedMeshBackground />
      <ParticleBackground />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <Logo className="w-24 h-24 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
              DEVBHOOMI WINGS
            </h1>
            <p className="text-cyan-300/80 text-lg md:text-xl tracking-[0.3em] font-light uppercase">
              Wings Travels Pvt. Ltd.
            </p>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white/95">
            Premium Travel Experiences
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A startup venture of a big travel company. Embark on unforgettable journeys across India's
            most divine destinations with our big professional team. Experience luxury, comfort, and
            spirituality across Delhi NCR, Pithoragarh, Haridwar, Dehradun and beyond.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-3 text-white font-semibold text-lg">
              <Compass className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Explore Trips
            </span>
          </button>

          <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-400/50 rounded-full hover:bg-white/20 hover:border-cyan-400 transition-all duration-300 shadow-lg">
            <span className="flex items-center gap-3 text-white font-semibold text-lg">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Contact Us
            </span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "10k+", label: "Happy Travelers" },
            { value: "50+", label: "Destinations" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
