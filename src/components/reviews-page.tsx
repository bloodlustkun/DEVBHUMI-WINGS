"use client";

import { motion } from "motion/react";
import { Star, Quote, Award, Users, TrendingUp, Phone, Mail } from "lucide-react";

export function ReviewsPage() {
  const reviews = [
    {
      name: "Rohit Negi",
      location: "Delhi",
      rating: 4,
      date: "November 2024",
      text: "Amazing experience with Devbhoomi Wings! Their cab service during the Corona lockdown was exceptional. Clean vehicles, professional drivers, and complete safety measures. Highly recommended for anyone traveling to Uttarakhand.",
      trip: "Char Dham Yatra",
    },
    {
      name: "Akanksha Tiwari",
      location: "Mumbai",
      rating: 5,
      date: "October 2024",
      text: "Very safe, comfortable and professional staff. The hotel bookings were perfect and the entire journey was smooth. Their attention to detail and customer care is outstanding. Will definitely book again!",
      trip: "Kashmir Paradise Tour",
    },
    {
      name: "Harshit Garbyal",
      location: "Dehradun",
      rating: 4,
      date: "September 2024",
      text: "Cleanest cabs I've ever traveled in! Premium service at reasonable rates. The drivers were polite and knew the routes perfectly. Made our family trip to Manali absolutely memorable.",
      trip: "Manali Adventure",
    },
    {
      name: "Priya Rawat",
      location: "Ghaziabad",
      rating: 5,
      date: "August 2024",
      text: "Very friendly drivers and smooth trip from start to finish. The entire team was supportive and made sure we were comfortable throughout. Best travel company in the region!",
      trip: "Valley of Flowers Trek",
    },
    {
      name: "Vikram Singh Chauhan",
      location: "Jaipur",
      rating: 4,
      date: "July 2024",
      text: "Professional service and great hospitality. The Aadi Kailash yatra was well organized with experienced guides. Every detail was taken care of. Truly premium experience!",
      trip: "Aadi Kailash Yatra",
    },
    {
      name: "Anjali Sharma",
      location: "Noida",
      rating: 5,
      date: "June 2024",
      text: "Excellent service! Their team went above and beyond to make our spiritual journey comfortable. The hotel arrangements were perfect and the cab was always on time. 10/10 would recommend!",
      trip: "Uttarakhand Spiritual Retreat",
    },
    {
      name: "Rajesh Kumar",
      location: "Lucknow",
      rating: 4,
      date: "May 2024",
      text: "Best cab service we've used! The SUV was spacious and well-maintained. Driver was courteous and knowledgeable. Made our family vacation stress-free and enjoyable.",
      trip: "Mussoorie Getaway",
    },
    {
      name: "Neha Bisht",
      location: "Haridwar",
      rating: 5,
      date: "April 2024",
      text: "Wonderful experience from booking to completion. The staff is very professional and the service quality is top-notch. They truly care about customer satisfaction. Highly recommended!",
      trip: "Kashmir Paradise Tour",
    },
  ];

  const stats = [
    { value: "10k+", label: "Happy Customers", icon: Users },
    { value: "4.7★", label: "Average Rating", icon: Star },
    { value: "94%", label: "Satisfaction Rate", icon: TrendingUp },
    { value: "5+", label: "Years Experience", icon: Award },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-white">Customer Reviews</h1>
            <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Hear from our satisfied travelers who experienced the Devbhoomi Wings difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-6 border-y border-cyan-400/10">
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
                <div className="text-4xl text-white tracking-tight">{stat.value}</div>
                <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-cyan-400" />
                </div>

                <div className="relative space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-400 text-sm leading-relaxed">{review.text}</p>

                  {/* Trip Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                    <span className="text-xs text-cyan-400">{review.trip}</span>
                  </div>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-cyan-400/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white">{review.name}</div>
                        <div className="text-xs text-gray-500">{review.location}</div>
                      </div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#050d1a] to-[#0a1628]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full" />
            
            <div className="relative text-center space-y-6">
              <Quote className="w-16 h-16 text-cyan-400/30 mx-auto" />
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "Devbhoomi Wings proved their excellence during the toughest times. 
                As the best performing cab & tour provider during Corona lockdown, 
                they set new standards for safety, reliability, and service quality."
              </p>
              <div className="pt-6">
                <div className="text-cyan-400">Industry Recognition</div>
                <div className="text-sm text-gray-500 mt-1">Best Cab Service 2020-2021</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Why Customers Love Us</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Staff",
                description: "Polite, friendly, and chill - our team makes every journey enjoyable.",
              },
              {
                title: "Clean Vehicles",
                description: "Spotlessly maintained cabs with regular sanitization and quality checks.",
              },
              {
                title: "Safety First",
                description: "100% safety record with trained drivers and emergency protocols.",
              },
              {
                title: "Reliable Service",
                description: "Always on time, every time. Proven track record of punctuality.",
              },
              {
                title: "Fair Pricing",
                description: "Premium quality at competitive rates with no hidden charges.",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support for complete peace of mind.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center">
                  <Star className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#050d1a] to-[#0a1628]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-white">Join Our Happy Travelers</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the premium service that thousands of customers trust and love.
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