import { useState, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StudentCard from "@/components/StudentCard";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { Award, BookOpen, GraduationCap, TrendingUp, ArrowRight, Sparkles, Code2, Palette, Database, Target, Heart, Mail, MessageSquare, Users, Clock, Star, ExternalLink } from "lucide-react";
import { BATCHES, formatBatchForDisplay } from "@/lib/batches";

// Memoized Category Card Component - Wall of Portfolios Inspired
const CategoryCard = memo(({ to, gradient, icon: Icon, title, count, delay }: any) => (
  <Link to={to} className="group block" style={{ animationDelay: `${delay}ms` }}>
    <Card className="overflow-hidden border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 h-full hover:-translate-y-2 bg-card/40 backdrop-blur-sm">
      <div className={`aspect-[4/3] ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/15 rounded-3xl blur-3xl group-hover:scale-125 group-hover:opacity-80 transition-all duration-700"></div>
            <Icon className="w-20 h-20 text-white/95 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={1.2} />
          </div>
        </div>
        {/* Ultra-subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      <CardContent className="p-8 bg-card/50 backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{count}</p>
      </CardContent>
    </Card>
  </Link>
));

CategoryCard.displayName = "CategoryCard";

// Memoized Stats Component
const StatCard = memo(({ value, label, delay }: any) => (
  <div className="text-center p-6 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-sm text-muted-foreground font-medium">{label}</div>
  </div>
));

StatCard.displayName = "StatCard";

const Home = () => {
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Stats data
  const stats = {
    totalStudents: "1000+",
    batchesCompleted: "12+",
    successRate: "95%",
    placementSuccess: "Proven"
  };
  
  const topPerformers = [
    {
      id: 1,
      name: "Alex Johnson",
      batchId: "0925", // September 2025
      domain: "https://moajmalnk.in",
      github: "https://github.com/alexj",
      email: "alex@example.com",
      phone: "+1234567890",
      skills: ["WordPress", "Elementor", "WooCommerce"],
      isTopPerformer: true
    },
    {
      id: 2,
      name: "Sarah Williams",
      batchId: "0925", // September 2025
      domain: "https://moajmalnk.in",
      github: "https://github.com/sarahw",
      email: "sarah@example.com",
      skills: ["Custom Theme Design", "SEO Optimization", "Speed Optimization"],
      isTopPerformer: true
    },
    {
      id: 3,
      name: "Michael Chen",
      batchId: "0825", // August 2025
      domain: "https://moajmalnk.in",
      email: "michael@example.com",
      skills: ["Gutenberg", "E-commerce", "Security & Backup"],
      isTopPerformer: true
    },
    {
      id: 4,
      name: "Emma Davis",
      batchId: "0925", // September 2025
      domain: "https://moajmalnk.in",
      github: "https://github.com/emmad",
      skills: ["WordPress", "Accessibility", "E-commerce"],
      isTopPerformer: true
    }
  ].map(student => ({
    ...student,
    batch: formatBatchForDisplay(student.batchId)
  }));
  
  const latestBatchStudents = [
    {
      id: 5,
      name: "John Doe",
      batchId: "0925", // September 2025
      domain: "https://moajmalnk.in",
      skills: ["WordPress", "Elementor", "WooCommerce"]
    },
    {
      id: 6,
      name: "Jane Smith",
      batchId: "0925", // September 2025
      skills: ["WordPress", "SEO Optimization"]
    },
    // Add more students...
  ].map(student => ({
    ...student,
    batch: formatBatchForDisplay(student.batchId)
  }));
  
  const faqs = [
    {
      question: "What No-Code and CMS platforms do you teach?",
      answer: "We specialize in WordPress, Elementor, WooCommerce, Webflow, Shopify, and other popular No-Code platforms. Our curriculum focuses on practical, job-ready skills."
    },
    {
      question: "Do I need coding experience to join?",
      answer: "Not at all! Our courses are designed for beginners. We start with the basics and progressively build your skills to professional levels."
    },
    {
      question: "What is the duration of the training program?",
      answer: "Our monthly batch programs typically run for 4-6 weeks, with intensive hands-on training and real-world project work."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes! We have a proven track record of successful placements with a 95% success rate. We also guide students in freelancing and entrepreneurship opportunities."
    },
    {
      question: "Is the course online or offline?",
      answer: "We offer flexible learning modes including online live classes and hybrid options to suit different learning preferences and schedules."
    },
    {
      question: "Will I get hands-on project experience?",
      answer: "Absolutely! Every student works on multiple real-world projects and builds a professional portfolio website to showcase their skills."
    },
    {
      question: "What support is available after course completion?",
      answer: "We provide lifetime access to course materials, ongoing mentorship, community support, and assistance with portfolio updates and job applications."
    }
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Skill Mount",
    "description": "Professional WordPress and No-Code training institute led by Mohammed Ajmal NK",
    "url": "https://students.moajmalnk.in",
    "logo": "https://moajmalnk.in/assets/img/logo/logo-lightaj.png",
    "founder": {
      "@type": "Person",
      "name": "Mohammed Ajmal NK",
      "url": "https://moajmalnk.in"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WordPress & No-Code Training Courses",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "WordPress Development",
          "description": "Complete WordPress training including themes, plugins, and customization"
        },
        {
          "@type": "Course", 
          "name": "No-Code Development",
          "description": "Training in Elementor, WooCommerce, and other No-Code platforms"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000"
    }
  };

  return (
    <>
      {/* Advanced SEO Meta Tags */}
      <SEO
        title="Skill Mount Students - WordPress & No-Code Training Success Stories"
        description="Explore success stories of 1000+ students trained in WordPress, Elementor, WooCommerce, and No-Code platforms by Mohammed Ajmal NK at Skill Mount. 95% placement success rate."
        keywords="WordPress training, No-Code development, CMS training, Elementor, WooCommerce, student portfolios, Skill Mount, Mohammed Ajmal NK, web development bootcamp, online courses, digital skills training"
        url="https://moajmalnk.in"
        image="https://moajmalnk.in/assets/img/logo/logo-lightaj.png"
        author="Mohammed Ajmal NK"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section - Wall of Portfolios Inspired Minimalist Design */}
        <section className="relative bg-background py-24 md:py-32 overflow-hidden">
          {/* Ultra-subtle background texture */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
          
          {/* Minimal ambient lighting */}
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                {/* Left Column - Minimalist Content */}
                <div className="space-y-10">
                  {/* Ultra-minimal badge */}
                  <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">No-Code Excellence</span>
                  </div>
                  
                  <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-foreground tracking-tight">
                      Student Success{" "}
                      <a 
                        href="https://moajmalnk.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative inline-block cursor-pointer hover:scale-105 transition-transform duration-500"
                      >
                        <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                          Stories
                        </span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/8 -rotate-1 rounded"></span>
                      </a>
                    </h1>
                    
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                        Led by <a 
                          href="https://moajmalnk.in" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-semibold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                        >
                          Mohammed Ajmal NK
                        </a>
                      </p>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Discover how 1000+ students transformed their careers through expert training in WordPress, No-Code platforms, and CMS development.
                      </p>
                    </div>
                  </div>

                  {/* Refined Stats Grid */}
                  <div className="grid grid-cols-2 gap-8 py-8 border-t border-border/20">
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">{stats.totalStudents}</div>
                      <div className="text-sm text-muted-foreground font-medium">Students Trained</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">{stats.batchesCompleted}</div>
                      <div className="text-sm text-muted-foreground font-medium">Batches Completed</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">{stats.successRate}</div>
                      <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">{stats.placementSuccess}</div>
                      <div className="text-sm text-muted-foreground font-medium">Placement Success</div>
                    </div>
                  </div>
                  
                  {/* Minimalist CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button size="lg" className="rounded-full px-10 h-14 text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl">
                        <Mail className="w-4 h-4 mr-2" />
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                    <Link to="/students">
                      <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-base font-semibold border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group">
                        <Users className="w-4 h-4 mr-2" />
                        View Portfolios
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Column - Refined Image Presentation with Optimized Loading */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/50">
                    <OptimizedImage
                      src="https://moajmalnk.in/assets/img/hero/moajmalnk.webp"
                      alt="Mohammed Ajmal NK - Lead Instructor at Skill Mount, WordPress and No-Code training expert"
                      width={600}
                      height={400}
                      priority={true}
                      className="w-full h-auto"
                      objectFit="cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* Floating credential card */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-md border border-border/30 rounded-2xl px-8 py-6 shadow-2xl">
                    <a 
                      href="https://moajmalnk.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">Mohammed Ajmal NK</div>
                        <div className="text-sm text-muted-foreground">Lead Instructor @ Skill Mount</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* Vision & Mission Section - Ultra-Minimalist Design */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 25%, currentColor 25%, currentColor 50%, transparent 50%, transparent 75%, currentColor 75%)',
            backgroundSize: '20px 20px'
          }}></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                <Target className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground tracking-wide">Our Purpose</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]">
                Vision &{" "}
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision Card - Ultra-Clean Design */}
              <Card className="group border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 bg-card/30 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/8 to-primary/4 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      To create a generation of skilled professionals who contribute to job creation and economic growth. 
                      We envision a future where every student becomes not just employable, but an employer – driving innovation 
                      and opportunities in the digital economy.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Mission Card - Ultra-Clean Design */}
              <Card className="group border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 bg-card/30 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/8 to-primary/4 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">
                      To inspire through student success stories and provide world-class training in No-Code and CMS platforms. 
                      We are committed to delivering practical, industry-ready skills that transform beginners into confident 
                      professionals ready to make their mark.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      
        {/* Student Categories - Ultra-Minimalist Grid */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Minimal ambient lighting */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground tracking-wide">Student Categories</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]">
                Browse by{" "}
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Explore student portfolios organized by specialization and skill set
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <CategoryCard 
                to="/students?category=top-performers"
                gradient="bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-500"
                icon={Award}
                title="Top Performers"
                count="Elite Portfolio Showcase"
                delay={0}
              />
              
              <CategoryCard 
                to="/students?category=wordpress"
                gradient="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"
                icon={Code2}
                title="WordPress Masters"
                count="Theme & Plugin Developers"
                delay={100}
              />
              
              <CategoryCard 
                to="/students?category=ecommerce"
                gradient="bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400"
                icon={Palette}
                title="E-commerce Builders"
                count="WooCommerce & Shopify"
                delay={200}
              />
              
              <CategoryCard 
                to="/students?category=optimization"
                gradient="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500"
                icon={Database}
                title="SEO & Performance"
                count="Speed & Optimization Experts"
                delay={300}
              />
            </div>
          </div>
        </section>
      
        {/* Top Performers Showcase - Ultra-Minimalist */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Minimal ambient gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative">
            {/* Section Header - Minimalist */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500/8 to-orange-500/8 border border-amber-500/15 rounded-full px-5 py-2">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-medium text-amber-600 tracking-wide">Elite Showcase</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-[0.95]">
                  Top{" "}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                    Performers
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                  Exceptional students who have demonstrated outstanding skills, creativity, and dedication to their craft
                </p>
              </div>
              <Link 
                to="/students?category=top-performers" 
                className="group flex items-center gap-3 text-base font-semibold text-foreground hover:text-amber-600 transition-all duration-300 px-8 py-4 rounded-full border border-border/30 hover:border-amber-500/30 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10"
              >
                View All Top Performers
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Portfolio Grid - Clean Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {topPerformers.map((student, index) => (
                <div 
                  key={student.id}
                  className="animate-elegant-entrance"
                  style={{ 
                    animationDelay: `${index * 120}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <StudentCard {...student} />
                </div>
              ))}
            </div>
            
            {/* Minimalist View More */}
            <div className="text-center">
              <Link to="/students?category=top-performers">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-10 h-14 border-border/30 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-amber-500/10 text-base font-semibold"
                >
                  <span>View All Top Performers</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      
        {/* Latest Batch Showcase - Ultra-Minimalist */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Subtle texture */}
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/8 to-primary/5 border border-primary/15 rounded-full px-5 py-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-primary tracking-wide">Batch 12 • October 2025</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-[0.95]">
                  Latest{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    Graduates
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                  Meet our newest batch of talented students ready to make their mark in the digital world
                </p>
              </div>
              <Link 
                to="/students" 
                className="hidden md:flex group items-center gap-3 text-base font-semibold text-foreground hover:text-primary transition-all duration-300 px-8 py-4 rounded-full border border-border/30 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
              >
                View All Students
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Portfolio Grid - Clean Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {latestBatchStudents.slice(0, showAllStudents ? 40 : 20).map((student, index) => (
                <div 
                  key={student.id}
                  className="animate-elegant-entrance"
                  style={{ 
                    animationDelay: `${index * 80}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <StudentCard {...student} />
                </div>
              ))}
            </div>
            
            {!showAllStudents && latestBatchStudents.length > 20 && (
              <div className="text-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-12 h-14 border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-primary/10 text-base font-semibold"
                  onClick={() => setShowAllStudents(true)}
                >
                  <span>Load More Students (Next 20)</span>
                  <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </Button>
              </div>
            )}
          </div>
        </section>
      
        {/* Total Batches Summary - Ultra-Minimalist */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Minimal ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.01] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative">
            <Card className="border border-border/30 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700">
              <CardContent className="p-16 text-center">
                <div className="inline-flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-full px-6 py-3 mb-12">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary tracking-wide">Our Journey</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tight leading-[0.9]">
                  {BATCHES.length} Monthly{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    Batches
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                  From {BATCHES[BATCHES.length - 1].displayName} to {BATCHES[0].displayName}, we've nurtured 
                  over {stats.totalStudents} students across diverse specializations in WordPress, No-Code tools, and CMS platforms.
                </p>
                <Link to="/students">
                  <Button 
                    size="lg"
                    className="rounded-full px-12 h-16 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group"
                  >
                    Explore All Batches
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      
        {/* FAQ Snippet - Ultra-Minimalist */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.008]" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 25%, currentColor 25%, currentColor 50%, transparent 50%, transparent 75%, currentColor 75%)',
            backgroundSize: '30px 30px'
          }}></div>
          
          <div className="container mx-auto px-6 max-w-4xl relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground tracking-wide">FAQ</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Everything you need to know about our program and services
              </p>
            </div>
            
            <Accordion type="single" collapsible className="mb-20 space-y-6">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="border border-border/30 rounded-3xl px-8 md:px-10 bg-card/30 backdrop-blur-sm hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-8 md:py-10 [&[data-state=open]]:text-primary transition-colors duration-300">
                    <span className="text-lg md:text-xl font-bold pr-4 group-hover:text-primary transition-colors duration-300">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-8 md:pb-10 text-base md:text-lg leading-relaxed font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center">
              <Link to="/faq">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-12 h-14 border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-primary/10 text-base font-semibold"
                >
                  View All FAQs 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      
        {/* Testimonials - Ultra-Minimalist */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Minimal ambient gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] via-transparent to-accent/[0.01]"></div>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/[0.015] rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/[0.015] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground tracking-wide">Testimonials</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]">
                Success{" "}
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Stories
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Hear from students who transformed their careers with Skill Mount
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: "Skill Mount's WordPress training was exceptional. Mohammed Ajmal's teaching style made complex concepts easy to understand. Now I'm running my own web development agency!",
                  name: "Rahul Kumar",
                  role: "WordPress Developer & Agency Owner"
                },
                {
                  quote: "From zero coding knowledge to building professional e-commerce sites in just 6 weeks! The hands-on approach and project-based learning were game-changers for me.",
                  name: "Priya Sharma",
                  role: "WooCommerce Specialist @ Freelance"
                },
                {
                  quote: "The No-Code curriculum and personalized mentorship helped me land my dream job within 2 weeks of completing the course. Forever grateful to Skill Mount!",
                  name: "Arjun Patel",
                  role: "CMS Developer @ Digital Agency"
                }
              ].map((testimonial, index) => (
                <article
                  key={index}
                  className="animate-elegant-entrance"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <Card className="border border-border/30 rounded-3xl h-full hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 group hover:-translate-y-2 bg-card/30 backdrop-blur-sm">
                    <CardContent className="p-10 flex flex-col h-full">
                      <div className="mb-8 text-primary/15 group-hover:text-primary/25 transition-colors duration-500">
                        <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <blockquote className="text-muted-foreground mb-8 text-lg leading-relaxed flex-grow font-light">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-border/30 pt-8 mt-auto">
                        <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground mt-2 font-medium">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>
      
        {/* Materials Snippet - Ultra-Minimalist */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Minimal ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.015] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                <BookOpen className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground tracking-wide">Resources</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]">
                Learning{" "}
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Access our comprehensive library of curated learning materials
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
              {[
                { icon: BookOpen, title: "Video Tutorials", desc: "WordPress, Elementor, and No-Code platform tutorials", delay: 0 },
                { icon: Code2, title: "Theme & Plugin Files", desc: "Ready-to-use WordPress themes and essential plugins", delay: 100 },
                { icon: Award, title: "Resource Library", desc: "E-books, cheat sheets, and design assets", delay: 200 }
              ].map((item, index) => (
                <article
                  key={index}
                  className="animate-elegant-entrance"
                  style={{ 
                    animationDelay: `${item.delay}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <Card className="border border-border/30 rounded-3xl hover:border-primary/20 transition-all duration-700 h-full group hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 bg-card/30 backdrop-blur-sm">
                    <CardContent className="p-10 text-center">
                      <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary/8 to-primary/4 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/5">
                        <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.2} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/materials">
                <Button 
                  size="lg" 
                  className="rounded-full px-12 h-16 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 group"
                >
                  Browse All Materials 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      
        {/* CTA Section - Ultra-Minimalist High Impact */}
        <section className="py-48 md:py-56 bg-background relative overflow-hidden">
          {/* Ultra-subtle background pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(var(--primary) / 0.02) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Minimal ambient gradient orbs */}
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/[0.015] rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-6 text-center max-w-6xl relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/15 rounded-full px-6 py-3 mb-12">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">Get Started Today</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 text-foreground leading-[0.9] tracking-tight">
              Ready to transform your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  digital future?
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-primary/8 to-primary/5 -rotate-1 rounded blur-sm"></span>
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-24 max-w-4xl mx-auto leading-relaxed font-light">
              Join {stats.totalStudents} students who have launched successful careers in No-Code and CMS development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="rounded-full px-16 h-18 text-lg font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-500 group"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Contact Us
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-16 h-18 text-lg font-semibold border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 group shadow-sm hover:shadow-lg hover:shadow-primary/10"
                >
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Raise a Ticket
                </Button>
              </Link>
            </div>
            
            {/* Secondary CTA */}
            <div>
              <Link to="/students">
                <Button 
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-10 h-14 text-base hover:bg-primary/5 transition-all duration-300 group"
                >
                  Browse Student Portfolios
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
