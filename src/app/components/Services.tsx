/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { MapPinIcon, ClockIcon, ShieldCheckIcon, WalletIcon } from "lucide-react";

const services = [
  {
    icon: MapPinIcon,
    title: "Local & Outstation",
    description: "Complete travel solutions from Pithoragarh to any destination across India",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ClockIcon,
    title: "24/7 Service",
    description: "Round-the-clock availability for your convenience and emergency travel needs",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safe & Reliable",
    description: "Verified professional drivers with extensive experience in mountain terrain",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: WalletIcon,
    title: "Best Rates",
    description: "Competitive pricing with no hidden charges - your budget, our expertise",
    color: "from-emerald-500 to-green-500",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-slate-800">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Premium transportation services designed to meet all your travel needs 
            with professionalism and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="size-7 text-white" />
                  </div>
                  <CardTitle className="text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
