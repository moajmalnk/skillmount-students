import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Code, Download, ExternalLink, Palette, Package, FolderOpen, PlayCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Materials = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
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

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Learning Materials & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive WordPress, Elementor, and WooCommerce resources. 
            Everything you need to build professional websites.
          </p>
        </div>
        
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 mb-8 h-auto">
            <TabsTrigger value="videos" className="flex flex-col items-center gap-1 py-3">
              <Video className="w-5 h-5" />
              <span className="text-xs md:text-sm">Tutorial Videos</span>
            </TabsTrigger>
            <TabsTrigger value="themes" className="flex flex-col items-center gap-1 py-3">
              <Palette className="w-5 h-5" />
              <span className="text-xs md:text-sm">Themes</span>
            </TabsTrigger>
            <TabsTrigger value="plugins" className="flex flex-col items-center gap-1 py-3">
              <Package className="w-5 h-5" />
              <span className="text-xs md:text-sm">Plugin Guides</span>
            </TabsTrigger>
            <TabsTrigger value="assets" className="flex flex-col items-center gap-1 py-3">
              <FolderOpen className="w-5 h-5" />
              <span className="text-xs md:text-sm">Assets</span>
            </TabsTrigger>
            <TabsTrigger value="snippets" className="flex flex-col items-center gap-1 py-3">
              <Code className="w-5 h-5" />
              <span className="text-xs md:text-sm">Code</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Tutorial Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                Watch comprehensive video tutorials on WordPress, Elementor, and WooCommerce
              </p>
            </div>
            
            {/* Video Player Section */}
            {selectedVideo && (
              <Card className="mb-8 overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src={selectedVideo}
                    title="Tutorial Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <CardContent className="pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedVideo(null)}
                  >
                    Close Video
                  </Button>
                </CardContent>
              </Card>
            )}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.videos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{video.category}</Badge>
                      <PlayCircle className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {video.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {video.duration}
                      </span>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => setSelectedVideo(video.embedUrl)}
                        >
                          Watch
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={video.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Themes & Templates Tab */}
          <TabsContent value="themes" className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                Pre-built WordPress themes and Elementor templates ready to use
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {materials.themes.map((theme) => (
                <Card key={theme.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        <Badge>{theme.type}</Badge>
                        <Badge variant="outline">v{theme.version}</Badge>
                      </div>
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{theme.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {theme.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {theme.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Size: {theme.size}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a href={theme.previewUrl} target="_blank" rel="noopener noreferrer">
                              Preview
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={theme.downloadUrl} download>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Plugin Guides Tab */}
          <TabsContent value="plugins" className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                Comprehensive guides and manuals for essential WordPress plugins
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.plugins.map((plugin) => (
                <Card key={plugin.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-col gap-1">
                        <Badge variant="secondary">{plugin.category}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {plugin.type}
                        </Badge>
                      </div>
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{plugin.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {plugin.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{plugin.pages} pages</span>
                        <span>{plugin.size}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Updated: {plugin.lastUpdated}
                      </div>
                      <Separator />
                      <Button size="sm" className="w-full" asChild>
                        <a href={plugin.downloadUrl} download>
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Project Assets Tab */}
          <TabsContent value="assets" className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                Design assets, images, icons, and content templates for your projects
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.assets.map((asset) => (
                <Card key={asset.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-col gap-1">
                        <Badge>{asset.type}</Badge>
                        <Badge variant="secondary" className="text-xs">
                          {asset.category}
                        </Badge>
                      </div>
                      <FolderOpen className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{asset.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {asset.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {asset.formats.map((format, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{asset.fileCount} files</span>
                        <span>{asset.size}</span>
                      </div>
                      <Separator />
                      <Button size="sm" className="w-full" asChild>
                        <a href={asset.downloadUrl} download>
                        <Download className="w-4 h-4 mr-2" />
                          Download Pack
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Code Snippets Tab */}
          <TabsContent value="snippets" className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">
                Ready-to-use PHP and CSS code snippets for WordPress customization
              </p>
            </div>
            <div className="grid gap-6">
              {materials.snippets.map((snippet) => (
                <Card key={snippet.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{snippet.category}</Badge>
                          <Badge variant="outline">{snippet.language}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{snippet.title}</CardTitle>
                        <CardDescription>{snippet.description}</CardDescription>
                      </div>
                      <Code className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="language-php">{snippet.code}</code>
                        </pre>
                      </div>
                    <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText(snippet.code);
                          }}
                          className="flex-1"
                        >
                          Copy Code
                      </Button>
                      <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                      </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Additional Resources Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl p-8 md:p-12 text-center border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Specific Resources?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? We regularly update our materials library 
            with new content based on student requests. Let us know what resources would help you most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <a href="/contact">Request Materials</a>
          </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/faq">View FAQ</a>
            </Button>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-primary">{materials.videos.length}</div>
            <div className="text-sm text-muted-foreground">Video Tutorials</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-primary">{materials.themes.length}</div>
            <div className="text-sm text-muted-foreground">Themes & Templates</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-primary">{materials.plugins.length}</div>
            <div className="text-sm text-muted-foreground">Plugin Guides</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-primary">{materials.assets.length}</div>
            <div className="text-sm text-muted-foreground">Asset Packs</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-primary">{materials.snippets.length}</div>
            <div className="text-sm text-muted-foreground">Code Snippets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
