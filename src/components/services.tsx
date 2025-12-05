import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Compass, Sparkles, Tent, Bike } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Sparkles,
      title: "Spiritual Tours",
      description: "Visit ancient temples and ashrams in Rishikesh, Haridwar, and Badrinath",
      image: "https://images.unsplash.com/photo-1698723985345-f1456340f0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1dHRhcmFraGFuZCUyMHRlbXBsZXxlbnwxfHx8fDE3NjQxOTQ1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $299",
    },
    {
      icon: Compass,
      title: "Adventure Treks",
      description: "Experience thrilling treks through the Himalayas with expert guides",
      image: "https://images.unsplash.com/photo-1669768185505-8c611f00c088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmVra2luZ3xlbnwxfHx8fDE3NjQxOTQ1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $399",
    },
    {
      icon: Tent,
      title: "Camping Retreats",
      description: "Peaceful camping experiences in pristine mountain landscapes",
      image: "https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjQxNDQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $199",
    },
    {
      icon: Bike,
      title: "Yoga & Wellness",
      description: "Rejuvenate your body and soul with authentic yoga experiences",
      image: "https://images.unsplash.com/photo-1717677977177-c9577c04cf27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NDE5NDU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "From $249",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 tracking-wide uppercase">Our Services</span>
          <h2 className="mt-2 mb-4">Curated Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed packages that blend adventure, spirituality, 
            and natural beauty for an unforgettable journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white">{service.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
