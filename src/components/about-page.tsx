"use client";

import { motion } from "motion/react";
import { Shield, Heart, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety and security are our highest priorities on every journey.",
    },
    {
      icon: Heart,
      title: "Comfort",
      description: "Premium vehicles and accommodations for a relaxing travel experience.",
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Expert team with 5+ years of experience in the travel industry.",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building long-lasting relationships with transparency and reliability.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Founded",
      description: "Started our journey to redefine premium travel experiences.",
    },
    {
      year: "2020",
      title: "Corona Hero",
      description: "Best performing cab & tour provider during the lockdown period.",
    },
    {
      year: "2022",
      title: "10k+ Customers",
      description: "Reached milestone of serving 10,000+ happy travelers.",
    },
    {
      year: "2024",
      title: "Premium Expansion",
      description: "Big team startup expanding to 50+ premium routes across India.",
    },
  ];

  const teamMembers = [
    {
      name: "Mr. Vaibhav Bisht",
      role: "Travel Head",
      experience: "Expert in Delhi NCR, Pithoragarh, Haldwani & Uttarakhand regions",
      image: "https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJbmRpYW4lMjBzdGFmZnxlbnwxfHx8fDE3NjQ3NzY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Mr. Shivam Tiwari",
      role: "Director",
      experience: "Specialist in Delhi NCR, Dehradun & premium tour packages",
      image: "https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJbmRpYW4lMjBzdGFmZnxlbnwxfHx8fDE3NjQ3NzY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Priya Sharma",
      role: "Senior Travel Consultant",
      experience: "5+ years in customer relations",
      image: "https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJbmRpYW4lMjBzdGFmZnxlbnwxfHx8fDE3NjQ3NzY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Rahul Negi",
      role: "Operations Manager",
      experience: "Expert in logistics & route planning",
      image: "https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJbmRpYW4lMjBzdGFmZnxlbnwxfHx8fDE3NjQ3NzY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const achievements = [
    "Best performing cab service during Corona lockdown 2020",
    "5+ years of continuous service excellence",
    "10,000+ satisfied customers and counting",
    "Big professional team from a leading travel company",
    "Serving Delhi NCR, Pithoragarh, Haldwani, Dehradun regions",
    "50+ premium routes across India",
    "100% safety record",
    "24/7 customer support",
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3NzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/90 to-[#0a1628]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-white">About Devbhoomi Wings</h1>
            <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 text-lg leading-relaxed">
              Travelmour Wings India Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-white">Our Story</h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-400 to-transparent" />
              
              <p className="text-gray-400 leading-relaxed">
                <span className="text-cyan-400">Devbhoomi Wings</span> is a startup venture of a big travel company, bringing together a large professional team with over 5 years of combined expertise. We are dedicated to revolutionizing premium travel experiences across India.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Led by <span className="text-cyan-400">Mr. Vaibhav Bisht (Travel Head)</span> and <span className="text-cyan-400">Mr. Shivam Tiwari (Director)</span>, our team specializes in serving <span className="text-cyan-400">Delhi NCR, Pithoragarh, Haldwani, Dehradun</span> and surrounding regions with exceptional service quality.
              </p>

              <p className="text-gray-400 leading-relaxed">
                During the challenging Corona lockdown in 2020, we emerged as the <span className="text-cyan-400">best performing cab and tour provider</span>, serving essential travelers with utmost care and safety protocols. This achievement, along with serving 10,000+ happy customers, reflects our unwavering commitment.
              </p>

              <div className="pt-6 space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1685850749074-9cf8023d7e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NjQ3NzY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Journey"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="text-4xl text-white">5+</div>
                <div className="text-sm text-cyan-400">Years</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0a1628] to-[#050d1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Journey</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent hidden lg:block" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                    <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                      <div className="text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border-4 border-[#0a1628]">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Core Values</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-white tracking-wider">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#050d1a] to-[#0a1628]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Meet Our Team</h2>
            <div className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Professional, polite, and chill - our expert team is here to make your journey unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                    <h3 className="text-white tracking-wider">{member.name}</h3>
                    <p className="text-cyan-400 text-sm">{member.role}</p>
                    {member.experience && (
                      <p className="text-gray-400 text-xs mt-1">{member.experience}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-white">Join Us on Your Next Adventure</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the difference of traveling with a team that truly cares about your journey.
            </p>

            <motion.a
              href="tel:+919311344461"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/30 shadow-xl shadow-cyan-400/20"
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
