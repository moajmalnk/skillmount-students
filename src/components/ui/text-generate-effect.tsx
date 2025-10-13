import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
  duration = 0.5,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < words.length) {
        setDisplayedText(prev => prev + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, duration * 1000 / words.length);

    return () => clearTimeout(timer);
  }, [currentIndex, words, duration]);

  return (
    <motion.div
      className={cn(
        "text-center font-bold tracking-tight text-neutral-900 dark:text-neutral-100",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="text-4xl md:text-6xl lg:text-7xl">
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={cn(
              char === " " ? "inline-block w-4" : "inline-block",
              // Apply purple to the last word (after the last space)
              index > displayedText.lastIndexOf(" ") && displayedText.lastIndexOf(" ") !== -1 && "text-violet-500",
              // Apply black to everything before the last word
              index <= displayedText.lastIndexOf(" ") && displayedText.lastIndexOf(" ") !== -1 && "text-black dark:text-white",
              // If no spaces, apply purple to last few characters
              displayedText.lastIndexOf(" ") === -1 && index >= Math.max(0, displayedText.length - 10) && "text-violet-500",
              // If no spaces, apply black to everything else
              displayedText.lastIndexOf(" ") === -1 && index < Math.max(0, displayedText.length - 10) && "text-black dark:text-white"
            )}
          >
            {char}
          </motion.span>
        ))}
        {currentIndex < words.length && (
          <motion.span
            className="inline-block w-1 h-8 md:h-12 lg:h-16 bg-violet-500 ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </span>
    </motion.div>
  );
};
