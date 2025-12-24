import { motion } from "motion/react";
import { Car, Users as UsersIcon, Plane, MapPin, Calendar, Phone } from "lucide-react";
import { GlassCard } from "./GlassCard";

const services = [
  {
    icon: Car,
    title: "Delhi NCR Cab Service",
    description: "Reliable cab service across Delhi NCR with verified drivers and comfortable vehicles. Airport pickups, city tours, and outstation trips.",
  },
  {
    icon: MapPin,
    title: "Pithoragarh Travel",
    description: "Specialized routes to Pithoragarh with experienced mountain drivers. Scenic routes through Uttarakhand's beautiful landscapes.",
  },
  {
    icon: UsersIcon,
    title: "Group Tour Packages",
    description: "Customized group tours with tempo travellers and luxury buses. Perfect for family trips, pilgrimage, and corporate outings.",
  },
  {
    icon: Plane,
    title: "Tour & Travel Planning",
    description: "Complete tour packages to Haridwar, Dehradun, Nainital, and beyond. Accommodation, sightseeing, and guided tours included.",
  },
  {
    icon: Calendar,
    title: "Corporate Travel",
    description: "Professional corporate travel solutions with dedicated account managers. Monthly packages and preferential rates available.",
  },
  {
    icon: Phone,
    title: "24/7 Booking Support",
    description: "Round-the-clock booking assistance and customer support. Emergency roadside assistance and trip modifications anytime.",
  },
];

export function ServicesSection() {
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
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
              >
                <service.icon className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
