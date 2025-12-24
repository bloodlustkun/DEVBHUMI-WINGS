/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mountain, Heart, Award, Users } from "lucide-react";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Mountain,
      title: "Expert Guides",
      description:
        "Professional and experienced local guides who know every trail and temple",
    },
    {
      icon: Heart,
      title: "Spiritual Journey",
      description:
        "Connect with ancient wisdom and find inner peace in sacred destinations",
    },
    {
      icon: Award,
      title: "Premium Service",
      description: "Comfortable accommodations and seamless travel arrangements",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Join a community of travelers seeking authentic experiences",
    },
  ];

  const stats = [
    { value: "10K+", label: "Happy Travelers" },
    { value: "50+", label: "Destinations" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 tracking-wide uppercase">About Us</span>
          <h2 className="mt-2 mb-4">Your Gateway to Devbhoomi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are passionate about sharing the incredible beauty and spirituality
            of Uttarakhand with travelers from around the world. Every journey is
            crafted with care and authenticity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6"
                >
                  <Icon className="w-7 h-7 text-blue-600" />
                </motion.div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-blue-600 rounded-3xl p-12 text-white"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                className="mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
