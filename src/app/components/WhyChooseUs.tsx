import { motion } from "motion/react";
import { Shield, Users, Clock, Star, Sparkles, Heart } from "lucide-react";
import { GlassCard } from "./GlassCard";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Verified mountainous drivers with years of experience in hill terrain",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced local guides and dedicated support staff for your journey",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service and emergency assistance",
  },
  {
    icon: Star,
    title: "Premium Comfort",
    description: "Well-maintained vehicles with AC and scenic route expertise",
  },
  {
    icon: Sparkles,
    title: "Best Prices",
    description: "Competitive rates with no hidden charges and transparent billing",
  },
  {
    icon: Heart,
    title: "Trusted by Thousands",
    description: "5+ years of excellence with 10,000+ satisfied travelers",
  },
];

export function WhyChooseUs() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Customers Love Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what makes Devbhoomi Wings the preferred choice for travelers across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
              >
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
