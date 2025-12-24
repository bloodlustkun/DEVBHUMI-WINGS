import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function GlassCard({ children, className = "", delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`
        bg-[#0a1824]/50 
        backdrop-blur-xl 
        border border-cyan-500/10 
        rounded-2xl 
        p-8 
        shadow-lg 
        hover:shadow-cyan-500/10 
        hover:border-cyan-500/30
        transition-all 
        duration-300 
        text-center
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
