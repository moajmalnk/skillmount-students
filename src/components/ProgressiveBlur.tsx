import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProgressiveBlurProps {
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
  aspectRatio?: string;
}

const ProgressiveBlur = ({
  src,
  alt,
  className,
  blurDataURL = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cfilter id="b"%3E%3CfeGaussianBlur stdDeviation="20"/%3E%3C/filter%3E%3Cpath fill="%23ddd" d="M0 0h400v300H0z"/%3E%3Cg filter="url(%23b)"%3E%3Cpath fill="%23bbb" d="M0 0h400v150H0z"/%3E%3Cpath fill="%23999" d="M0 150h400v150H0z"/%3E%3C/g%3E%3C/svg%3E',
  aspectRatio = '4/3'
}: ProgressiveBlurProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(blurDataURL);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div 
      className={cn('relative overflow-hidden bg-muted', className)}
      style={{ aspectRatio }}
    >
      <img
        src={currentSrc}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-all duration-700',
          !isLoaded && 'blur-lg scale-110',
          isLoaded && 'blur-0 scale-100'
        )}
      />
      {!isLoaded && (
        <div className="absolute inset-0 shimmer">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
        </div>
      )}
    </div>
  );
};

export default ProgressiveBlur;

