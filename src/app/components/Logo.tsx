import { motion } from "motion/react";

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mountain */}
      <path
        d="M100 40L140 100H60L100 40Z"
        fill="url(#mountain-gradient)"
        stroke="#06b6d4"
        strokeWidth="2"
      />
      
      {/* Left Wing */}
      <motion.path
        d="M50 80Q30 90 20 100Q30 95 50 90L60 100L50 80Z"
        fill="url(#wing-gradient)"
        stroke="#06b6d4"
        strokeWidth="1.5"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      
      {/* Right Wing */}
      <motion.path
        d="M150 80Q170 90 180 100Q170 95 150 90L140 100L150 80Z"
        fill="url(#wing-gradient)"
        stroke="#06b6d4"
        strokeWidth="1.5"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      
      {/* Wings Details */}
      <path
        d="M35 92L45 88M165 92L155 88M30 98L40 95M170 98L160 95"
        stroke="#0ea5e9"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient id="mountain-gradient" x1="100" y1="40" x2="100" y2="100">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="wing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
