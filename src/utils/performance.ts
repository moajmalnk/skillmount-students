/**
 * Performance Monitoring Utilities
 * Helps track and optimize website performance
 */

export interface PerformanceMetrics {
  fcp?: number;  // First Contentful Paint
  lcp?: number;  // Largest Contentful Paint
  fid?: number;  // First Input Delay
  cls?: number;  // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Get Web Vitals metrics
 */
export const getWebVitals = (): Promise<PerformanceMetrics> => {
  return new Promise((resolve) => {
    if (!('PerformanceObserver' in window)) {
      resolve({});
      return;
    }

    const metrics: PerformanceMetrics = {};

    try {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.fcp = fcpEntry.startTime;
        }
      }).observe({ type: 'paint', buffered: true });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.lcp = lastEntry.startTime;
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            metrics.cls = clsValue;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });

      // Navigation Timing (TTFB)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }

      // Resolve after a short delay to collect metrics
      setTimeout(() => resolve(metrics), 3000);
    } catch (error) {
      console.error('Error collecting performance metrics:', error);
      resolve(metrics);
    }
  });
};

/**
 * Log performance metrics to console (development only)
 */
export const logPerformanceMetrics = async () => {
  if (import.meta.env.DEV) {
    const metrics = await getWebVitals();
    console.group('📊 Performance Metrics');
    console.log('First Contentful Paint (FCP):', metrics.fcp?.toFixed(2), 'ms');
    console.log('Largest Contentful Paint (LCP):', metrics.lcp?.toFixed(2), 'ms');
    console.log('Cumulative Layout Shift (CLS):', metrics.cls?.toFixed(4));
    console.log('Time to First Byte (TTFB):', metrics.ttfb?.toFixed(2), 'ms');
    console.groupEnd();
  }
};

/**
 * Prefetch resources for faster navigation
 */
export const prefetchResources = (urls: string[]) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      urls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      urls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    }, 1000);
  }
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Detect slow network connection
 */
export const isSlowConnection = (): boolean => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' || 
           connection.saveData === true;
  }
  return false;
};

/**
 * Optimize images based on device pixel ratio
 */
export const getOptimizedImageUrl = (baseUrl: string, width: number): string => {
  const dpr = window.devicePixelRatio || 1;
  const optimizedWidth = Math.round(width * dpr);
  
  // If using a CDN that supports dynamic image resizing
  // Example: Cloudinary, imgix, etc.
  // return `${baseUrl}?w=${optimizedWidth}&q=auto&f=auto`;
  
  return baseUrl;
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = (resources: { href: string; as: string; type?: string }[]) => {
  resources.forEach(({ href, as, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  });
};

/**
 * Measure component render time
 */
export const measureRenderTime = (componentName: string, callback: () => void) => {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  
  if (import.meta.env.DEV) {
    console.log(`⏱️ ${componentName} render time: ${(endTime - startTime).toFixed(2)}ms`);
  }
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

