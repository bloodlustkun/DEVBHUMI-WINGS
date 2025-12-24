import { motion } from "motion/react";
import { Award, Target, Zap, Globe } from "lucide-react";
import { GlassCard } from "./GlassCard";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering premium travel experiences with attention to every detail.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Punctual service and transparent pricing you can count on for every journey.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging technology to provide seamless booking and real-time trip updates.",
  },
  {
    icon: Globe,
    title: "Connectivity",
    description: "Connecting travelers to divine destinations across India's spiritual heartland.",
  },
];

export function AboutSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04121f] via-[#071d29] to-[#04121f]" />
      <div className="absolute inset-0 mesh-gradient-animated" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Devbhoomi Wings
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Devbhoomi Wings Travels Pvt. Ltd. is a startup venture backed by a renowned travel company with years of industry expertise. We specialize in providing premium travel services across India's most sacred and scenic destinations.
            </p>
            <p>
              Based in Delhi NCR, we offer comprehensive travel solutions including shared cabs, luxury SUVs, tempo travellers, and complete tour packages. Our experienced team of professional drivers and local guides ensures your journey is not just a trip, but an unforgettable experience.
            </p>
            <p>
              Whether you're seeking spiritual enlightenment in Haridwar, adventure in Pithoragarh, or tranquility in Nainital, Devbhoomi Wings is your trusted travel companion, connecting hearts to Devbhoomi - the Land of Gods.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
              >
                <value.icon className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <GlassCard className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To make divine travel accessible to everyone by providing safe, comfortable, 
              and affordable travel services while promoting the rich cultural and spiritual 
              heritage of Uttarakhand and beyond.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
