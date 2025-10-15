import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface WobbleCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  onClick?: () => void;
}

export const WobbleCard: React.FC<WobbleCardProps> = ({
  children,
  containerClassName,
  className,
  onClick,
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const isMobile = useIsMobile();
  const enableEffects = !isMobile; // disable wobble on tablet and mobile

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4",
        containerClassName
      )}
      onMouseMove={enableEffects ? handleMouseMove : undefined}
      onMouseEnter={enableEffects ? () => setIsHovering(true) : undefined}
      onMouseLeave={enableEffects ? () => setIsHovering(false) : undefined}
      onClick={onClick}
      whileHover={enableEffects ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {enableEffects && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: isHovering
              ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), transparent 40%)`
              : "radial-gradient(600px circle at 0px 0px, rgba(139, 92, 246, 0), transparent 40%)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <motion.div
        className={cn("relative z-10", className)}
        animate={{
          rotateX: enableEffects && isHovering ? (mousePosition.y - 150) / 25 : 0,
          rotateY: enableEffects && isHovering ? (mousePosition.x - 150) / -25 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
