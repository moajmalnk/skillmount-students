import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
  children: React.ReactNode;
}

export const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("relative h-full w-full bg-neutral-950", className)}>
      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-neutral-950">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Animated beams */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Beam 1 */}
          <motion.div
            className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Beam 2 */}
          <motion.div
            className="absolute top-3/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
            animate={{
              x: [0, -100, 50, 0],
              y: [0, 50, -100, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 5,
            }}
          />
          
          {/* Beam 3 */}
          <motion.div
            className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-2xl"
            animate={{
              x: [0, 150, -75, 0],
              y: [0, -75, 150, 0],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              delay: 10,
            }}
          />
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};
