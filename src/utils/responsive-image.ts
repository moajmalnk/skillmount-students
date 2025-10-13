/**
 * Responsive Image Positioning Utilities
 * Provides professional image positioning for different screen sizes
 */

export interface ResponsiveImageConfig {
  mobile: {
    size: string;
    position: string;
    attachment: string;
  };
  tablet: {
    size: string;
    position: string;
    attachment: string;
  };
  desktop: {
    size: string;
    position: string;
    attachment: string;
  };
}

export const getResponsiveImageConfig = (): ResponsiveImageConfig => ({
  mobile: {
    size: 'cover',
    position: 'center center',
    attachment: 'scroll'
  },
  tablet: {
    size: 'cover',
    position: 'center center',
    attachment: 'scroll'
  },
  desktop: {
    size: 'cover',
    position: 'center center',
    attachment: 'fixed'
  }
});

export const getImagePositionClasses = (position: 'top' | 'center' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') => {
  const positions = {
    top: 'bg-position-top',
    center: 'bg-position-center',
    bottom: 'bg-position-bottom',
    left: 'bg-position-left',
    right: 'bg-position-right',
    'top-left': 'bg-position-top bg-position-left',
    'top-right': 'bg-position-top bg-position-right',
    'bottom-left': 'bg-position-bottom bg-position-left',
    'bottom-right': 'bg-position-bottom bg-position-right'
  };

  return positions[position] || positions.center;
};

export const getResponsiveBackgroundStyles = (
  imageUrl: string,
  position: string = 'center center',
  size: string = 'cover'
) => {
  return {
    backgroundImage: `url("${imageUrl}")`,
    backgroundPosition: position,
    backgroundSize: size,
    backgroundRepeat: 'no-repeat'
  };
};

export const createResponsiveImageStyle = (
  imageUrl: string,
  config: ResponsiveImageConfig
) => {
  const baseStyle = {
    backgroundImage: `url("${imageUrl}")`,
    backgroundRepeat: 'no-repeat'
  };

  return {
    ...baseStyle,
    // Mobile first
    backgroundSize: config.mobile.size,
    backgroundPosition: config.mobile.position,
    backgroundAttachment: config.mobile.attachment,
    
    // Tablet
    '@media (min-width: 768px)': {
      backgroundSize: config.tablet.size,
      backgroundPosition: config.tablet.position,
      backgroundAttachment: config.tablet.attachment
    },
    
    // Desktop
    '@media (min-width: 1024px)': {
      backgroundSize: config.desktop.size,
      backgroundPosition: config.desktop.position,
      backgroundAttachment: config.desktop.attachment
    }
  };
};

// Professional image optimization utilities
export const optimizeImageForDevice = (imageUrl: string, deviceType: 'mobile' | 'tablet' | 'desktop') => {
  const optimizations = {
    mobile: {
      quality: 80,
      format: 'webp',
      width: 640
    },
    tablet: {
      quality: 85,
      format: 'webp',
      width: 1024
    },
    desktop: {
      quality: 90,
      format: 'webp',
      width: 1920
    }
  };

  const config = optimizations[deviceType];
  
  // If using a CDN that supports dynamic optimization
  // Example: Cloudinary, imgix, etc.
  // return `${imageUrl}?w=${config.width}&q=${config.quality}&f=${config.format}`;
  
  return imageUrl;
};

export const detectDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Professional background positioning presets
export const professionalBackgroundPresets = {
  hero: {
    mobile: { size: 'cover', position: 'center center', attachment: 'scroll' },
    tablet: { size: 'cover', position: 'center center', attachment: 'scroll' },
    desktop: { size: 'cover', position: 'center center', attachment: 'fixed' }
  },
  card: {
    mobile: { size: 'cover', position: 'center center', attachment: 'scroll' },
    tablet: { size: 'cover', position: 'center center', attachment: 'scroll' },
    desktop: { size: 'cover', position: 'center center', attachment: 'scroll' }
  },
  section: {
    mobile: { size: 'cover', position: 'center center', attachment: 'scroll' },
    tablet: { size: 'cover', position: 'center center', attachment: 'scroll' },
    desktop: { size: 'cover', position: 'center center', attachment: 'fixed' }
  }
};

export const getProfessionalPreset = (preset: keyof typeof professionalBackgroundPresets) => {
  return professionalBackgroundPresets[preset];
};
