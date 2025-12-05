import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import logoImg from "figma:asset/d4aee886d64317bcbf0e8750fa3b775c2a72c1c4.png";
import { InteractiveBackground } from "./interactive-background";

interface HeroProps {
  onExplore?: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1b35] to-[#051120]">
      {/* Interactive Particle Background */}
      <InteractiveBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-16 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img 
                src={logoImg} 
                alt="Devbhoomi Wings" 
                className="h-48 w-auto filter drop-shadow-2xl"
              />
              {/* Glow effect around logo */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-cyan-400/40 blur-3xl -z-10"
              />
            </motion.div>
          </motion.div>

          {/* Brand Name - Simple and Clean */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-20"
          >
            <h1 className="text-white mb-4 tracking-tight">
              DEVBHOOMI WINGS
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-gray-400 text-lg"
            >
              Premium Travel Experiences
            </motion.p>
            {onExplore && (
              <motion.button
                onClick={onExplore}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Our Journeys</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            )}
          </motion.div>

          {/* Work Under Construction - Clean and Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-24"
          >
            <div className="inline-flex flex-col items-center gap-6">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-12 h-12 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full"
              />
              <div className="space-y-2">
                <p className="text-cyan-400/80 tracking-[0.3em] uppercase text-sm">
                  Work Under Construction
                </p>
                <p className="text-gray-500 text-sm">
                  Something extraordinary is on the way
                </p>
                {onExplore && (
                  <motion.button
                    onClick={onExplore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors text-sm underline"
                  >
                    Preview Our Journeys →
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.a
              href="tel:+919311344461"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="relative">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-gray-400 text-sm mb-2">Call Us</div>
                <div className="text-white">+91 9311344461</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:devbhoomiwings@gmail.com"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="relative">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-gray-400 text-sm mb-2">Email Us</div>
                <div className="text-white text-sm">devbhoomiwings@gmail.com</div>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="relative">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-gray-400 text-sm mb-2">Location</div>
                <div className="text-white">Vasundhara, Ghaziabad</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}
