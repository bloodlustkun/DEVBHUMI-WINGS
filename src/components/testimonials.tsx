import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "An absolutely transformative experience! The spiritual tour exceeded all my expectations. The guides were knowledgeable and the arrangements were perfect.",
      image: "PS",
    },
    {
      name: "David Wilson",
      location: "London, UK",
      rating: 5,
      text: "The trek through the Himalayas was breathtaking. Devbhoomi Wings made everything seamless and safe. Highly recommend for adventure seekers!",
      image: "DW",
    },
    {
      name: "Ananya Reddy",
      location: "Bangalore, India",
      rating: 5,
      text: "The yoga retreat was exactly what I needed. Beautiful location, authentic practices, and wonderful hospitality. I'll definitely be back!",
      image: "AR",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "Best tour company I've worked with in India. Professional, punctual, and genuinely caring about the experience. The cultural immersion was authentic.",
      image: "MC",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 tracking-wide uppercase">Testimonials</span>
          <h2 className="mt-2 mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our guests have to say about their experiences.
          </p>
        </motion.div>

        {/* Main Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 relative"
          >
            <Quote className="absolute top-8 left-8 w-16 h-16 text-blue-200" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-700 text-xl text-center mb-8">
                "{testimonials[activeIndex].text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  {testimonials[activeIndex].image}
                </div>
                <div className="text-left">
                  <div className="text-gray-900">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-500">{testimonials[activeIndex].location}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-2xl border-2 transition-all ${
                activeIndex === index
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                    activeIndex === index ? "bg-blue-600" : "bg-gray-400"
                  }`}
                >
                  {testimonial.image}
                </div>
                <div className="text-left">
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
