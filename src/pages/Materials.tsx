import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Code, Download, ExternalLink, Palette, Package, FolderOpen, PlayCircle, ArrowRight, Sparkles, BookOpen, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation";
import { FollowingPointer } from "@/components/ui/following-pointer";
import SEO from "@/components/SEO";

const Materials = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // WordPress/Elementor focused materials
  const materials = {
    videos: [
      {
        id: 1,
        title: "Elementor Pro Complete Tutorial - Build Professional Websites",
        description: "Master Elementor Pro from basics to advanced features. Learn to create stunning landing pages, headers, footers, and dynamic content.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual URLs
        url: "https://youtube.com/watch?v=example",
        duration: "2h 45m",
        category: "Elementor",
        topics: ["Page Builder", "Templates", "Widgets"]
      },
      {
        id: 2,
        title: "WooCommerce Complete Setup & Configuration",
        description: "Complete guide to setting up an online store with WooCommerce. Payment gateways, shipping, tax configuration, and product management.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        url: "https://youtube.com/watch?v=example",
        duration: "3h 15m",
        category: "WooCommerce",
        topics: ["E-commerce", "Products", "Checkout"]
      },
      {
        id: 3,
        title: "WordPress Theme Customization Masterclass",
        description: "Learn to customize WordPress themes using the Customizer, child themes, and custom CSS. Create unique designs without coding.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        url: "https://youtube.com/watch?v=example",
        duration: "1h 50m",
        category: "WordPress",
        topics: ["Themes", "Customization", "CSS"]
      },
      {
        id: 4,
        title: "WordPress Performance Optimization Guide",
        description: "Speed up your WordPress site with caching, image optimization, CDN setup, and database optimization techniques.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        url: "https://youtube.com/watch?v=example",
        duration: "1h 30m",
        category: "Performance",
        topics: ["Caching", "Speed", "Optimization"]
      },
      {
        id: 5,
        title: "Advanced Elementor Animations & Effects",
        description: "Create stunning animations and effects with Elementor. Learn motion effects, scrolling animations, and interactive elements.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        url: "https://youtube.com/watch?v=example",
        duration: "2h 10m",
        category: "Elementor",
        topics: ["Animations", "Effects", "Design"]
      },
      {
        id: 6,
        title: "WordPress SEO with Yoast - Complete Guide",
        description: "Master WordPress SEO using Yoast SEO plugin. Learn keyword optimization, meta descriptions, sitemaps, and technical SEO.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        url: "https://youtube.com/watch?v=example",
        duration: "2h 00m",
        category: "SEO",
        topics: ["Yoast", "Keywords", "Rankings"]
      }
    ],
    themes: [
      {
        id: 1,
        title: "Astra Pro - Multi-Purpose WordPress Theme",
        description: "Lightweight, fast-loading theme perfect for any website. Includes 150+ starter templates and full Elementor compatibility.",
        type: "Premium Theme",
        size: "8.5 MB",
        downloadUrl: "#",
        previewUrl: "#",
        features: ["Elementor Ready", "WooCommerce", "Fast Loading"],
        version: "4.6.0"
      },
      {
        id: 2,
        title: "OceanWP - E-commerce Theme Package",
        description: "Complete e-commerce solution with WooCommerce integration. Mobile-responsive and SEO optimized design.",
        type: "Premium Theme",
        size: "12.3 MB",
        downloadUrl: "#",
        previewUrl: "#",
        features: ["WooCommerce", "Mobile First", "SEO Ready"],
        version: "3.5.2"
      },
      {
        id: 3,
        title: "Elementor Landing Page Templates Pack",
        description: "50+ professional landing page templates for various industries. Fully customizable and conversion-optimized.",
        type: "Template Pack",
        size: "15.7 MB",
        downloadUrl: "#",
        previewUrl: "#",
        features: ["50+ Templates", "Industry Specific", "Conversion Ready"],
        version: "2.3.0"
      },
      {
        id: 4,
        title: "Corporate Business Theme Bundle",
        description: "Professional business theme with multiple homepage layouts, portfolio section, and team member showcases.",
        type: "Theme Bundle",
        size: "18.2 MB",
        downloadUrl: "#",
        previewUrl: "#",
        features: ["Multiple Layouts", "Portfolio", "Contact Forms"],
        version: "1.8.5"
      }
    ],
    plugins: [
      {
        id: 1,
        title: "Yoast SEO - Complete Configuration Guide",
        description: "Comprehensive PDF guide covering all Yoast SEO settings, optimization techniques, schema markup, and XML sitemaps. Includes best practices and checklist.",
        type: "PDF Guide",
        size: "4.2 MB",
        downloadUrl: "#",
        pages: 45,
        category: "SEO",
        lastUpdated: "2024-09"
      },
      {
        id: 2,
        title: "WP Rocket - Caching & Performance Manual",
        description: "Step-by-step manual for configuring WP Rocket caching plugin. Covers cache preloading, lazy loading, database optimization, and CDN integration.",
        type: "PDF Manual",
        size: "3.8 MB",
        downloadUrl: "#",
        pages: 38,
        category: "Performance",
        lastUpdated: "2024-10"
      },
      {
        id: 3,
        title: "Wordfence Security - Complete Setup Guide",
        description: "Security hardening guide for WordPress. Firewall configuration, malware scanning, two-factor authentication, and security best practices.",
        type: "PDF Guide",
        size: "5.1 MB",
        downloadUrl: "#",
        pages: 52,
        category: "Security",
        lastUpdated: "2024-08"
      },
      {
        id: 4,
        title: "Contact Form 7 - Forms & Validation Checklist",
        description: "Quick reference checklist for creating effective contact forms. Includes spam protection, email configuration, and validation rules.",
        type: "PDF Checklist",
        size: "1.9 MB",
        downloadUrl: "#",
        pages: 12,
        category: "Forms",
        lastUpdated: "2024-09"
      },
      {
        id: 5,
        title: "WooCommerce Payment Gateway Setup",
        description: "Detailed guide for integrating popular payment gateways: Stripe, PayPal, Square, and local payment methods. Includes troubleshooting tips.",
        type: "PDF Guide",
        size: "6.3 MB",
        downloadUrl: "#",
        pages: 58,
        category: "E-commerce",
        lastUpdated: "2024-10"
      },
      {
        id: 6,
        title: "Backup & Migration with UpdraftPlus",
        description: "Complete guide to WordPress backup strategies using UpdraftPlus. Scheduled backups, cloud storage, and site migration procedures.",
        type: "PDF Manual",
        size: "3.5 MB",
        downloadUrl: "#",
        pages: 32,
        category: "Maintenance",
        lastUpdated: "2024-09"
      }
    ],
    assets: [
      {
        id: 1,
        title: "E-commerce Product Photography Pack",
        description: "High-quality product images for WooCommerce stores. 50+ images in multiple angles and sizes, optimized for web.",
        type: "Image Pack",
        size: "125 MB",
        downloadUrl: "#",
        fileCount: 50,
        formats: ["JPG", "PNG"],
        category: "Images"
      },
      {
        id: 2,
        title: "Website Content Templates - Service Business",
        description: "Pre-written content for service-based business websites. Includes About, Services, FAQ, and Contact page content.",
        type: "Text Content",
        size: "500 KB",
        downloadUrl: "#",
        fileCount: 8,
        formats: ["DOCX", "TXT"],
        category: "Content"
      },
      {
        id: 3,
        title: "Icon Library - 500+ SVG Icons",
        description: "Comprehensive icon library for WordPress websites. Includes business, e-commerce, social media, and UI icons.",
        type: "Icon Pack",
        size: "8.5 MB",
        downloadUrl: "#",
        fileCount: 500,
        formats: ["SVG", "PNG"],
        category: "Icons"
      },
      {
        id: 4,
        title: "Hero Images Collection - Business & Tech",
        description: "Professional hero images for headers and landing pages. High-resolution images optimized for various screen sizes.",
        type: "Image Pack",
        size: "245 MB",
        downloadUrl: "#",
        fileCount: 30,
        formats: ["JPG", "WEBP"],
        category: "Images"
      },
      {
        id: 5,
        title: "Logo Design Files - PSD & AI Templates",
        description: "Editable logo templates in Photoshop and Illustrator formats. Customize for your brand with easy-to-edit layers.",
        type: "Design Assets",
        size: "95 MB",
        downloadUrl: "#",
        fileCount: 20,
        formats: ["PSD", "AI", "SVG"],
        category: "Design"
      },
      {
        id: 6,
        title: "Sample Blog Posts - WordPress Ready",
        description: "20 sample blog posts covering WordPress, web design, and digital marketing topics. Ready to import and customize.",
        type: "Text Content",
        size: "750 KB",
        downloadUrl: "#",
        fileCount: 20,
        formats: ["DOCX", "HTML"],
        category: "Content"
      }
    ],
    snippets: [
      {
        id: 1,
        title: "Custom WordPress Login Page Styling",
        description: "CSS code to customize your WordPress login page with your brand colors, logo, and custom background.",
        language: "CSS",
        category: "WordPress Core",
        code: `/* Custom Login Page Styles */
.login h1 a {
  background-image: url('your-logo.png');
  background-size: contain;
  width: 100%;
}

body.login {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login form {
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}`
      },
      {
        id: 2,
        title: "Remove WordPress Version from Header",
        description: "PHP snippet to remove WordPress version number from your site header for enhanced security.",
        language: "PHP",
        category: "Security",
        code: `// Remove WordPress version from header
function remove_wp_version() {
  return '';
}
add_filter('the_generator', 'remove_wp_version');

// Remove version from scripts and styles
function remove_version_scripts_styles($src) {
  if (strpos($src, 'ver=')) {
    $src = remove_query_arg('ver', $src);
  }
  return $src;
}
add_filter('style_loader_src', 'remove_version_scripts_styles', 9999);
add_filter('script_loader_src', 'remove_version_scripts_styles', 9999);`
      },
      {
        id: 3,
        title: "WooCommerce Custom Add to Cart Button",
        description: "PHP code to customize WooCommerce 'Add to Cart' button text based on product type.",
        language: "PHP",
        category: "WooCommerce",
        code: `// Customize Add to Cart button text
add_filter('woocommerce_product_single_add_to_cart_text', 'custom_cart_button_text');
add_filter('woocommerce_product_add_to_cart_text', 'custom_cart_button_text');

function custom_cart_button_text() {
  global $product;
  
  $product_type = $product->get_type();
  
  switch ($product_type) {
    case 'external':
      return __('Buy Now', 'woocommerce');
    case 'variable':
      return __('Select Options', 'woocommerce');
    default:
      return __('Add to Cart', 'woocommerce');
  }
}`
      },
      {
        id: 4,
        title: "Elementor Custom CSS Animations",
        description: "CSS animations to enhance Elementor widgets with smooth entrance effects and hover states.",
        language: "CSS",
        category: "Elementor",
        code: `/* Fade In Up Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.elementor-widget:hover {
  animation: fadeInUp 0.6s ease-out;
}

/* Card Hover Effect */
.elementor-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.elementor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}`
      },
      {
        id: 5,
        title: "Disable WordPress Admin Bar for Subscribers",
        description: "PHP function to hide the WordPress admin bar for non-admin users to improve frontend user experience.",
        language: "PHP",
        category: "WordPress Core",
        code: `// Hide admin bar for non-admins
add_action('after_setup_theme', 'remove_admin_bar');

function remove_admin_bar() {
  if (!current_user_can('administrator') && !is_admin()) {
    show_admin_bar(false);
  }
}

// Alternative: Disable for specific roles
add_action('after_setup_theme', 'disable_admin_bar_by_role');

function disable_admin_bar_by_role() {
  $user = wp_get_current_user();
  if (in_array('subscriber', $user->roles) || in_array('customer', $user->roles)) {
    show_admin_bar(false);
  }
}`
      },
      {
        id: 6,
        title: "WordPress Custom Post Type Registration",
        description: "PHP code to register a custom post type for portfolios, testimonials, or any custom content.",
        language: "PHP",
        category: "WordPress Core",
        code: `// Register Custom Post Type
function create_portfolio_post_type() {
  $args = array(
    'labels' => array(
      'name' => __('Portfolio'),
      'singular_name' => __('Portfolio Item')
    ),
    'public' => true,
    'has_archive' => true,
    'rewrite' => array('slug' => 'portfolio'),
    'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
    'menu_icon' => 'dashicons-portfolio',
    'show_in_rest' => true,
  );
  
  register_post_type('portfolio', $args);
}
add_action('init', 'create_portfolio_post_type');`
      }
    ]
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalResource",
    "name": "SkillMount Learning Materials",
    "description": "Comprehensive WordPress, Elementor, and WooCommerce learning resources",
    "url": "https://students.moajmalnk.in/materials",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "SkillMount",
      "founder": {
        "@type": "Person",
        "name": "Mohammed Ajmal NK"
      }
    },
    "hasPart": [
      {
        "@type": "LearningResource",
        "name": "Video Tutorials",
        "description": "Comprehensive video tutorials for WordPress and No-Code platforms"
      },
      {
        "@type": "LearningResource", 
        "name": "Themes & Templates",
        "description": "Professional WordPress themes and Elementor templates"
      }
    ]
  };

  return (
    <FollowingPointer>
      {/* Advanced SEO Meta Tags */}
      <SEO
        title="Learning Materials - WordPress & No-Code Resources | SkillMount"
        description="Access comprehensive learning materials including video tutorials, themes, plugins, and code snippets for WordPress, Elementor, and WooCommerce development."
        keywords="WordPress tutorials, Elementor training, WooCommerce guides, learning materials, web development resources, SkillMount, Mohammed Ajmal NK"
        url="https://students.moajmalnk.in/materials"
        image="https://moajmalnk.in/assets/img/logo/logo-lightaj.png"
        author="Mohammed Ajmal NK"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section - Enhanced */}
        <section className="min-h-screen bg-background relative">
          {/* Professional Background Layers */}
          <div className="absolute inset-0">
            {/* Primary Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
              style={{
                backgroundImage: 'url("/tutor-hero.jpg")',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
              }}
            ></div>
            
            {/* Professional Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60"></div>
            
            {/* Ultra-subtle professional texture */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center pt-20 pb-16">
                {/* Ultra-minimal badge */}
                <div className="mt-10 flex items-center justify-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 w-fit mx-auto mb-8">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground tracking-wide">Learning Resources</span>
                </div>
                
                <div className="space-y-8 mb-16">
                  <TextGenerateEffect 
                    words="Learning Materials & Resources" 
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground tracking-tight max-w-6xl mx-auto"
                    duration={2}
                  />
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
                    Access comprehensive WordPress, Elementor, and WooCommerce resources. 
                    Everything you need to build professional websites and launch your career.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border/20 max-w-4xl mx-auto">
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{materials.videos.length}</div>
                    <div className="text-sm text-muted-foreground font-medium">Video Tutorials</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{materials.themes.length}</div>
                    <div className="text-sm text-muted-foreground font-medium">Themes & Templates</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{materials.plugins.length}</div>
                    <div className="text-sm text-muted-foreground font-medium">Plugin Guides</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-primary">{materials.snippets.length}</div>
                    <div className="text-sm text-muted-foreground font-medium">Code Snippets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tutorial Videos Tab */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Materials Navigation - Enhanced */}
          <ContainerScrollAnimation direction="up" speed="normal">
            <section className="pt-4 sm:pt-16 bg-background relative overflow-hidden">
              {/* Minimal ambient lighting */}
              <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Browse Materials</span>
                  </div>
                  <TextGenerateEffect 
                    words="Choose Your Learning Path" 
                    className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                </div>
                
                {/* Enhanced Tabs */}
                <div className="flex justify-center mb-12">
                  <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700">
                    <TabsList className="grid grid-cols-5 h-auto bg-transparent p-2 gap-2">
                      <TabsTrigger 
                        value="videos" 
                        className="flex flex-col items-center gap-2 py-4 px-6 rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/10 group"
                      >
                        <Video className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs md:text-sm font-medium">Tutorial Videos</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="themes" 
                        className="flex flex-col items-center gap-2 py-4 px-6 rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/10 group"
                      >
                        <Palette className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs md:text-sm font-medium">Themes</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="plugins" 
                        className="flex flex-col items-center gap-2 py-4 px-6 rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/10 group"
                      >
                        <Package className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs md:text-sm font-medium">Plugin Guides</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="assets" 
                        className="flex flex-col items-center gap-2 py-4 px-6 rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/10 group"
                      >
                        <FolderOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs md:text-sm font-medium">Assets</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="snippets" 
                        className="flex flex-col items-center gap-2 py-4 px-6 rounded-2xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/10 group"
                      >
                        <Code className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs md:text-sm font-medium">Code</span>
                      </TabsTrigger>
                    </TabsList>
                  </WobbleCard>
                </div>
              </div>
            </section>
          </ContainerScrollAnimation>
          <ContainerScrollAnimation direction="up" speed="normal">
            <TabsContent value="videos" className="space-y-6">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                    <Video className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Video Tutorials</span>
                  </div>
                  <TextGenerateEffect 
                    words="Master with Video Learning" 
                    className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    Watch comprehensive video tutorials on WordPress, Elementor, and WooCommerce
                  </p>
                </div>
                
                {/* Video Player Section */}
                {selectedVideo && (
                  <WobbleCard className="mb-12 border border-border/30 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700">
                    <div className="aspect-video w-full">
                      <iframe
                        src={selectedVideo}
                        title="Tutorial Video"
                        className="w-full h-full rounded-t-3xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-6 bg-card/50 backdrop-blur-sm">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedVideo(null)}
                        className="rounded-full border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                      >
                        Close Video
                      </Button>
                    </div>
                  </WobbleCard>
                )}
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {materials.videos.map((video, index) => (
                    <div 
                      key={video.id}
                      className="animate-elegant-entrance"
                      style={{ 
                        animationDelay: `${index * 120}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WobbleCard className="border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group hover:-translate-y-2 bg-card/30 backdrop-blur-sm overflow-hidden h-full">
                        <CardHeader className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">{video.category}</Badge>
                            <PlayCircle className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors group-hover:scale-110" />
                          </div>
                          <CardTitle className="text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-300">{video.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {video.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {video.topics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs rounded-full border-border/40 hover:border-primary/50 transition-colors">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <Separator className="my-6 bg-border/30" />
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center gap-2">
                              <Video className="w-4 h-4" />
                              {video.duration}
                            </span>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                onClick={() => setSelectedVideo(video.embedUrl)}
                                className="rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 group-hover:scale-105"
                              >
                                Watch
                              </Button>
                              <Button size="sm" variant="outline" asChild className="rounded-full border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300">
                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </WobbleCard>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </ContainerScrollAnimation>
          
          {/* Themes & Templates Tab */}
          <ContainerScrollAnimation direction="up" speed="normal">
            <TabsContent value="themes" className="space-y-6">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                    <Palette className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Themes & Templates</span>
                  </div>
                  <TextGenerateEffect 
                    words="Professional Themes Ready to Use" 
                    className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    Pre-built WordPress themes and Elementor templates ready to use
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {materials.themes.map((theme, index) => (
                    <div 
                      key={theme.id}
                      className="animate-elegant-entrance"
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WobbleCard className="border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group hover:-translate-y-2 bg-card/30 backdrop-blur-sm overflow-hidden h-full">
                        <CardHeader className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex gap-2">
                              <Badge className="rounded-full px-3 py-1 text-xs font-medium">{theme.type}</Badge>
                              <Badge variant="outline" className="rounded-full px-3 py-1 text-xs border-border/40">v{theme.version}</Badge>
                            </div>
                            <Palette className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">{theme.title}</CardTitle>
                          <CardDescription className="text-muted-foreground leading-relaxed">
                            {theme.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0">
                          <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                              {theme.features.map((feature, featureIndex) => (
                                <Badge key={featureIndex} variant="secondary" className="text-xs rounded-full border-border/40 hover:border-primary/50 transition-colors">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                            <Separator className="bg-border/30" />
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">
                                Size: {theme.size}
                              </span>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" asChild className="rounded-full border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300">
                                  <a href={theme.previewUrl} target="_blank" rel="noopener noreferrer">
                                    Preview
                                  </a>
                                </Button>
                                <Button size="sm" asChild className="rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 group-hover:scale-105">
                                  <a href={theme.downloadUrl} download>
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </WobbleCard>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </ContainerScrollAnimation>
          
          {/* Plugin Guides Tab */}
          <ContainerScrollAnimation direction="up" speed="normal">
            <TabsContent value="plugins" className="space-y-6">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                    <Package className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Plugin Guides</span>
                  </div>
                  <TextGenerateEffect 
                    words="Essential Plugin Documentation" 
                    className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    Comprehensive guides and manuals for essential WordPress plugins
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {materials.plugins.map((plugin, index) => (
                    <div 
                      key={plugin.id}
                      className="animate-elegant-entrance"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WobbleCard className="border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group hover:-translate-y-2 bg-card/30 backdrop-blur-sm overflow-hidden h-full">
                        <CardHeader className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex flex-col gap-2">
                              <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">{plugin.category}</Badge>
                              <Badge variant="outline" className="text-xs rounded-full border-border/40">
                                {plugin.type}
                              </Badge>
                            </div>
                            <FileText className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <CardTitle className="text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-300">{plugin.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {plugin.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{plugin.pages} pages</span>
                              <span>{plugin.size}</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Updated: {plugin.lastUpdated}
                            </div>
                            <Separator className="bg-border/30" />
                            <Button size="sm" className="w-full rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 group-hover:scale-105" asChild>
                              <a href={plugin.downloadUrl} download>
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </WobbleCard>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </ContainerScrollAnimation>
          
          {/* Project Assets Tab */}
          <ContainerScrollAnimation direction="up" speed="normal">
            <TabsContent value="assets" className="space-y-6">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                    <FolderOpen className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Project Assets</span>
                  </div>
                  <TextGenerateEffect 
                    words="Design Assets & Resources" 
                    className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    Design assets, images, icons, and content templates for your projects
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {materials.assets.map((asset, index) => (
                    <div 
                      key={asset.id}
                      className="animate-elegant-entrance"
                      style={{ 
                        animationDelay: `${index * 120}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WobbleCard className="border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group hover:-translate-y-2 bg-card/30 backdrop-blur-sm overflow-hidden h-full">
                        <CardHeader className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex flex-col gap-2">
                              <Badge className="rounded-full px-3 py-1 text-xs font-medium">{asset.type}</Badge>
                              <Badge variant="secondary" className="text-xs rounded-full border-border/40">
                                {asset.category}
                              </Badge>
                            </div>
                            <FolderOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <CardTitle className="text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-300">{asset.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                            {asset.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 pt-0">
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {asset.formats.map((format, formatIndex) => (
                                <Badge key={formatIndex} variant="outline" className="text-xs rounded-full border-border/40 hover:border-primary/50 transition-colors">
                                  {format}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>{asset.fileCount} files</span>
                              <span>{asset.size}</span>
                            </div>
                            <Separator className="bg-border/30" />
                            <Button size="sm" className="w-full rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 group-hover:scale-105" asChild>
                              <a href={asset.downloadUrl} download>
                                <Download className="w-4 h-4 mr-2" />
                                Download Pack
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </WobbleCard>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </ContainerScrollAnimation>
          
          {/* Code Snippets Tab */}
          <ContainerScrollAnimation direction="up" speed="normal">
            <TabsContent value="snippets" className="space-y-6">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                    <Code className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Code Snippets</span>
                  </div>
                  <TextGenerateEffect 
                    words="Ready-to-Use Code" 
                    className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                    Ready-to-use PHP and CSS code snippets for WordPress customization
                  </p>
                </div>
                
                <div className="grid gap-8">
                  {materials.snippets.map((snippet, index) => (
                    <div 
                      key={snippet.id}
                      className="animate-elegant-entrance"
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WobbleCard className="border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group hover:-translate-y-2 bg-card/30 backdrop-blur-sm overflow-hidden">
                        <CardHeader className="p-8">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-4">
                                <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">{snippet.category}</Badge>
                                <Badge variant="outline" className="rounded-full border-border/40 text-xs">{snippet.language}</Badge>
                              </div>
                              <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">{snippet.title}</CardTitle>
                              <CardDescription className="text-muted-foreground leading-relaxed">{snippet.description}</CardDescription>
                            </div>
                            <Code className="w-6 h-6 text-primary flex-shrink-0 ml-4 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </CardHeader>
                        <CardContent className="p-8 pt-0">
                          <div className="space-y-6">
                            <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-6 overflow-x-auto border border-border/30">
                              <pre className="text-sm font-mono text-foreground">
                                <code className="language-php">{snippet.code}</code>
                              </pre>
                            </div>
                            <div className="flex gap-3">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  navigator.clipboard.writeText(snippet.code);
                                }}
                                className="flex-1 rounded-full border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                              >
                                Copy Code
                              </Button>
                              <Button size="sm" variant="outline" className="rounded-full border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </WobbleCard>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </ContainerScrollAnimation>
        </Tabs>
        
        {/* Additional Resources Section - Enhanced */}
        <ContainerScrollAnimation direction="up" speed="slow">
          <section className="pt-4 sm:pt-16 bg-background relative overflow-hidden">
            {/* Minimal ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.015] rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6 max-w-6xl relative">
              <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background shadow-xl hover:shadow-2xl transition-all duration-700">
                <div className="p-8 sm:p-12 md:p-16 text-center">
                  <div className="inline-flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-full px-6 py-3 mb-8">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary tracking-wide">Need More Resources?</span>
                  </div>
                  
                  <TextGenerateEffect 
                    words="Can't Find What You Need?" 
                    className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                  
                  <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    We regularly update our materials library with new content based on student requests. 
                    Let us know what resources would help you most.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl" asChild>
                      <a href="/contact">
                        <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Request Materials
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 group" asChild>
                      <a href="/faq">
                        <BookOpen className="w-5 h-5 mr-2 group-hover:text-primary" />
                        View FAQ
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </div>
                </div>
              </WobbleCard>
            </div>
          </section>
        </ContainerScrollAnimation>
        
        {/* Enhanced Quick Stats */}
        <ContainerScrollAnimation direction="up" speed="normal">
          <section className="pt-4 sm:pt-16 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div 
                  className="animate-elegant-entrance p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: '0ms', animationFillMode: 'both' }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{materials.videos.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Video Tutorials</div>
                </div>
                <div 
                  className="animate-elegant-entrance p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: '100ms', animationFillMode: 'both' }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{materials.themes.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Themes & Templates</div>
                </div>
                <div 
                  className="animate-elegant-entrance p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: '200ms', animationFillMode: 'both' }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{materials.plugins.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Plugin Guides</div>
                </div>
                <div 
                  className="animate-elegant-entrance p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: '300ms', animationFillMode: 'both' }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{materials.assets.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Asset Packs</div>
                </div>
                <div 
                  className="animate-elegant-entrance p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: '400ms', animationFillMode: 'both' }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{materials.snippets.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Code Snippets</div>
                </div>
              </div>
            </div>
          </section>
        </ContainerScrollAnimation>
      </div>
    </FollowingPointer>
  );
};

export default Materials;
