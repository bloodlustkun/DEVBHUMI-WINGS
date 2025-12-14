import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { GlassCard } from "./GlassCard";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Excellent service! The driver was professional and the journey to Pithoragarh was comfortable and safe. Highly recommend Devbhoomi Wings for mountain travel.",
    date: "November 2024",
  },
  {
    name: "Priya Sharma",
    location: "Noida",
    rating: 5,
    text: "Best travel experience! The team arranged everything perfectly for our family trip to Haridwar. The vehicle was clean and the driver was very helpful.",
    date: "October 2024",
  },
  {
    name: "Amit Singh",
    location: "Gurgaon",
    rating: 5,
    text: "Very satisfied with the group package. The tempo traveller was spacious and comfortable. Great value for money and professional service throughout.",
    date: "December 2024",
  },
  {
    name: "Sneha Patel",
    location: "Faridabad",
    rating: 5,
    text: "Amazing service from start to finish. Booking was easy, driver was punctual, and the entire journey was smooth. Will definitely use again!",
    date: "September 2024",
  },
  {
    name: "Vikram Mehta",
    location: "Delhi NCR",
    rating: 5,
    text: "Professional and reliable. Used their services for our corporate trip. The team handled everything efficiently and the rates were very competitive.",
    date: "November 2024",
  },
  {
    name: "Ananya Verma",
    location: "Ghaziabad",
    rating: 5,
    text: "Wonderful experience! The driver knew all the scenic routes and made our trip to Nainital truly memorable. Highly recommended for family trips.",
    date: "October 2024",
  },
];

export function ReviewsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04121f] via-[#0f2233] to-[#04121f]" />
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
            Customer Reviews
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our customers say about their travel experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <GlassCard key={index} delay={index * 0.1} className="relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-500/20" />
              
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="border-t border-cyan-500/20 pt-4">
                <p className="text-white font-semibold">{review.name}</p>
                <p className="text-cyan-400 text-sm">{review.location}</p>
                <p className="text-gray-500 text-xs mt-1">{review.date}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg mb-4">Trusted by over 10,000+ travelers</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">5.0</span>
            <span className="text-gray-400">Average Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
