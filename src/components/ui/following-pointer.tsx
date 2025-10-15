import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface FollowingPointerProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  trailSize?: number;
}

export const FollowingPointer: React.FC<FollowingPointerProps> = ({
  children,
  className,
  size = 200,
  trailSize = 20,
}) => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(springY, [0, window.innerHeight], [30, -30]);
  const rotateY = useTransform(springX, [0, window.innerWidth], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePosition({ x, y });
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {!isMobile && (
        <>
          {/* Custom cursor */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
            style={{
              x: springX,
              y: springY,
              rotateX,
              rotateY,
            }}
            animate={{
              scale: isHovering ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div
              className="w-6 h-6 rounded-full bg-white"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.div>

          {/* Trail effect */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-40"
            style={{
              x: springX,
              y: springY,
            }}
            animate={{
              scale: isHovering ? 2 : 1,
              opacity: isHovering ? 0.3 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div
              className="rounded-full bg-violet-500/20 blur-sm"
              style={{
                width: trailSize,
                height: trailSize,
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
