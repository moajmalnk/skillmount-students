import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down";
  speed?: "slow" | "normal" | "fast";
}

export const ContainerScrollAnimation: React.FC<ContainerScrollAnimationProps> = ({
  children,
  className,
  direction = "up",
  speed = "normal",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const speedMap = {
    slow: 0.5,
    normal: 1,
    fast: 1.5,
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" 
      ? [100 * speedMap[speed], -100 * speedMap[speed]]
      : [-100 * speedMap[speed], 100 * speedMap[speed]]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y: springY, opacity, scale }}
        className="will-change-transform relative"
      >
        {children}
      </motion.div>
    </div>
  );
};
