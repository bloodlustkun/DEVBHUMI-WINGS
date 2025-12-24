/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { motion } from "motion/react";
import { CheckCircleIcon } from "lucide-react";

const features = [
  "Experienced mountain drivers",
  "Well-maintained vehicles",
  "GPS tracking enabled",
  "Insurance coverage",
  "Flexible booking options",
  "Customer support",
  "Sanitized interiors",
  "Multiple payment methods",
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-slate-800">Why Choose Devbhumi Wings?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We combine local expertise with modern amenities to provide 
            the best travel experience in the Himalayan region
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircleIcon className="size-6 text-green-500 flex-shrink-0" />
              <span className="text-slate-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
