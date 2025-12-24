import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-cyan-400 text-sm tracking-wider">Scroll Down</span>
        <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
      </div>
    </motion.div>
  );
}
