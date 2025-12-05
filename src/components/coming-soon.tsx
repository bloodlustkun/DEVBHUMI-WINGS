import { motion } from "motion/react";
import { Sparkles, Mountain, Compass } from "lucide-react";

interface ComingSoonProps {
  onExplore?: () => void;
}

export function ComingSoon({ onExplore }: ComingSoonProps) {
  const features = [
    {
      icon: Mountain,
      title: "Spiritual Journeys",
      description: "Experience the divine beauty of Uttarakhand",
    },
    {
      icon: Compass,
      title: "Adventure Tours",
      description: "Thrilling treks and expeditions await",
    },
    {
      icon: Sparkles,
      title: "Premium Service",
      description: "Curated experiences for discerning travelers",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a1628] to-[#051120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <h2 className="text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Something Amazing
              </h2>
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-cyan-500/20 blur-3xl -z-10"
              />
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl text-white mb-6">Is Coming Soon</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We're crafting an extraordinary travel experience platform. 
            Stay tuned for the launch of your gateway to Devbhoomi.
          </p>
        </motion.div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden h-full">
                  {/* Hover gradient effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)"
                    }}
                  />
                  
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out"
                    >
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </motion.div>
                    <h3 className="text-white text-2xl mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2 + 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 origin-left"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stay Tuned Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
            />
            
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-cyan-400" />
              </motion.div>
              
              <h3 className="text-3xl text-white mb-4">Stay Connected</h3>
              <p className="text-gray-400 mb-8">
                Be the first to know when we launch. Follow our journey as we prepare 
                to bring you unforgettable experiences in the Himalayas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {onExplore && (
                  <motion.button
                    onClick={onExplore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 font-medium"
                  >
                    Explore Our Trips
                  </motion.button>
                )}
                <motion.a
                  href="tel:+919311344461"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium"
                >
                  Contact Us
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
