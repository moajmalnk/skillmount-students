import React, { useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface WobbleCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "elevated" | "minimal";
  intensity?: "low" | "medium" | "high";
}

const CARD_VARIANTS = {
  default: "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900",
  elevated: "border-0 shadow-lg bg-white dark:bg-neutral-900",
  minimal: "border-0 bg-transparent",
} as const;

const INTENSITY_SETTINGS = {
  low: { scale: 1.01, rotation: 8, spring: { stiffness: 400, damping: 40 } },
  medium: { scale: 1.02, rotation: 12, spring: { stiffness: 300, damping: 30 } },
  high: { scale: 1.03, rotation: 16, spring: { stiffness: 200, damping: 20 } },
} as const;

export const WobbleCard: React.FC<WobbleCardProps> = ({
  children,
  containerClassName,
  className,
  onClick,
  disabled = false,
  variant = "default",
  intensity = "medium",
}) => {
  const isMobile = useIsMobile();
  const enableEffects = !isMobile && !disabled;
  
  // Motion values for smooth animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth transitions
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [intensity === "high" ? 16 : intensity === "medium" ? 12 : 8, intensity === "high" ? -16 : intensity === "medium" ? -12 : -8]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [intensity === "high" ? -16 : intensity === "medium" ? -12 : -8, intensity === "high" ? 16 : intensity === "medium" ? 12 : 8]));
  
  const settings = useMemo(() => INTENSITY_SETTINGS[intensity], [intensity]);
  
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!enableEffects) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }, [enableEffects, mouseX, mouseY]);
  
  const handleMouseLeave = useCallback(() => {
    if (!enableEffects) return;
    mouseX.set(0);
    mouseY.set(0);
  }, [enableEffects, mouseX, mouseY]);

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl p-4 transition-all duration-200",
        CARD_VARIANTS[variant],
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
      whileHover={enableEffects ? { scale: settings.scale } : undefined}
      whileTap={enableEffects ? { scale: 0.98 } : undefined}
      transition={settings.spring}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && !disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-disabled={disabled}
    >
      {/* Gradient overlay - only on desktop */}
      {enableEffects && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
          }}
        />
      )}
      
      {/* Content with 3D rotation */}
      <motion.div
        className={cn("relative z-10", className)}
        style={{
          rotateX: enableEffects ? rotateX : 0,
          rotateY: enableEffects ? rotateY : 0,
        }}
        transition={settings.spring}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
