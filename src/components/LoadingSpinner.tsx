import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-12 h-12 border-3',
  xl: 'w-16 h-16 border-4'
};

const LoadingSpinner = ({ size = 'md', className, text }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={cn(
          'animate-spin rounded-full border-primary border-t-transparent',
          sizeClasses[size],
          className
        )}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

// Skeleton Components for Better Loading States
export const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={cn('rounded-2xl bg-card border border-border/40 overflow-hidden', className)}>
    <div className="aspect-[4/3] skeleton" />
    <div className="p-5 space-y-4">
      <div className="h-6 w-3/4 skeleton rounded" />
      <div className="h-4 w-1/2 skeleton rounded" />
      <div className="flex gap-2">
        <div className="h-6 w-16 skeleton rounded-full" />
        <div className="h-6 w-20 skeleton rounded-full" />
      </div>
      <div className="flex gap-2 pt-2">
        <div className="h-8 w-24 skeleton rounded-lg" />
        <div className="h-8 w-20 skeleton rounded-lg" />
      </div>
    </div>
  </div>
);

export const SkeletonText = ({ lines = 3, className }: { lines?: number; className?: string }) => (
  <div className={cn('space-y-3', className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="h-4 skeleton rounded"
        style={{ width: i === lines - 1 ? '70%' : '100%' }}
      />
    ))}
  </div>
);

