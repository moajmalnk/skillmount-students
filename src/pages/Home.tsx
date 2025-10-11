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
import { Award, BookOpen, GraduationCap, TrendingUp, ArrowRight, Sparkles, Code2, Palette, Database, Target, Heart, Mail, MessageSquare } from "lucide-react";
import { BATCHES, formatBatchForDisplay } from "@/lib/batches";

// Memoized Category Card Component for better performance
const CategoryCard = memo(({ to, gradient, icon: Icon, title, count, delay }: any) => (
  <Link to={to} className="group block" style={{ animationDelay: `${delay}ms` }}>
    <Card className="overflow-hidden border border-border/40 hover:border-primary/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
      <div className={`aspect-[4/3] ${gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
            <Icon className="w-16 h-16 text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
          </div>
        </div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      <CardContent className="p-6 bg-card">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">{count}</p>
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - High-Impact & Fast */}
      <section className="relative bg-background py-16 md:py-32 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Gradient orbs for depth */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>


            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Minimalist badge */}
                <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">No-Code & CMS Mastery</span>
                </div>
                
                <div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-foreground tracking-tight">
                    Transform Your Future with{" "}
                    <a 
                      href="https://skillmount.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative inline-block cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                      <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                        Skill Mount
                      </span>
                      <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/10 -rotate-1 rounded"></span>
                    </a>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    Led by <a 
                      href="https://moajmalnk.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      Mohammed Ajmal NK
                    </a>
                  </p>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    Master WordPress, No-Code tools, and CMS platforms. Join a proven program creating job-ready professionals and inspiring success stories.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stats.totalStudents}</div>
                    <div className="text-sm text-muted-foreground">Students Taught</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stats.batchesCompleted}</div>
                    <div className="text-sm text-muted-foreground">Batches Completed</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stats.successRate}</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stats.placementSuccess}</div>
                    <div className="text-sm text-muted-foreground">Placement Success</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold hover:bg-accent/50 transition-all duration-300 group">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Raise a Ticket
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Tutor Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://moajmalnk.in/assets/img/hero/moajmalnk.webp" 
                    alt="Mohammed Ajmal NK - Skill Mount Tutor" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Floating credential badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border-2 border-border/40 rounded-2xl px-6 py-4 shadow-xl backdrop-blur-sm">
                  <a 
                    href="https://moajmalnk.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                  >
                    <Award className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">Mohammed Ajmal NK</div>
                      <div className="text-xs text-muted-foreground">Lead Instructor @ Skill Mount</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"></div>
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Target className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Vision &{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <Card className="border border-border/40 rounded-2xl hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  To create a generation of skilled professionals who contribute to job creation and economic growth. 
                  We envision a future where every student becomes not just employable, but an employer – driving innovation 
                  and opportunities in the digital economy.
                </p>
              </CardContent>
            </Card>
            
            {/* Mission Card */}
            <Card className="border border-border/40 rounded-2xl hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  To inspire through student success stories and provide world-class training in No-Code and CMS platforms. 
                  We are committed to delivering practical, industry-ready skills that transform beginners into confident 
                  professionals ready to make their mark.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Explore Top Categories - Enhanced Card-Focused Design */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/10 to-muted/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Student Categories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Browse by{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore student portfolios organized by specialization and skill set
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
      
      {/* Top Performers Showcase - NEW */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Subtle ambient gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full px-4 py-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Elite Showcase</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
                Top{" "}
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                  Performers
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Exceptional students who have demonstrated outstanding skills, creativity, and dedication to their craft
              </p>
            </div>
            <Link 
              to="/students?category=top-performers" 
              className="group flex items-center gap-2 text-base font-semibold text-foreground hover:text-amber-600 transition-all duration-300 px-6 py-3 rounded-full border border-border/40 hover:border-amber-500/50 hover:bg-amber-500/5 hover:shadow-lg hover:shadow-amber-500/10"
            >
              View All Top Performers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Portfolio Grid - 4 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
          
          {/* View More Hint */}
          <div className="text-center mt-16">
            <Link to="/students?category=top-performers">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 h-12 border-amber-500/30 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-amber-500/10"
              >
                <span>View All Top Performers</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest Batch Showcase - Batch 12 (October 2025) */}
      <section className="py-32 bg-gradient-to-b from-muted/30 via-muted/10 to-background relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/10 rounded-full px-4 py-1.5">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Batch 12 • October 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
                Latest{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Graduates
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Meet our newest batch of talented students ready to make their mark in the digital world
              </p>
            </div>
            <Link 
              to="/students" 
              className="hidden md:flex group items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-all duration-300 px-6 py-3 rounded-full border border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
            >
              View All Students
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Portfolio Grid - 4 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
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
                className="rounded-full px-10 h-12 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-primary/10"
                onClick={() => setShowAllStudents(true)}
              >
                <span>Load More Students (Next 20)</span>
                <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-y-[-2px] transition-transform duration-300" />
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Total Batches Summary */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border border-border/40 rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card to-primary/[0.02] shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Journey</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                {BATCHES.length} Monthly Batches
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                From {BATCHES[BATCHES.length - 1].displayName} to {BATCHES[0].displayName}, we've nurtured 
                over {stats.totalStudents} students across diverse specializations in WordPress, No-Code tools, and CMS platforms.
              </p>
              <Link to="/students">
                <Button 
                  size="lg"
                  className="rounded-full px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Explore All Batches
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* FAQ Snippet - Enhanced Elegant Design */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/10 to-muted/20 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our program and services
            </p>
          </div>
          
          <Accordion type="single" collapsible className="mb-16 space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border border-border/40 rounded-2xl px-6 md:px-8 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 md:py-7 [&[data-state=open]]:text-primary transition-colors duration-300">
                  <span className="text-base md:text-lg font-bold pr-4 group-hover:text-primary transition-colors duration-300">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 md:pb-7 text-sm md:text-base leading-relaxed">
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
                className="rounded-full px-10 h-12 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-lg hover:shadow-primary/10"
              >
                View All FAQs 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials - Refined Card Design */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Success{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from students who transformed their careers with Skill Mount
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                <Card className="border border-border/40 rounded-2xl h-full hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                      <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <blockquote className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-border/40 pt-6 mt-auto">
                      <div className="font-bold text-foreground text-base md:text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Materials Snippet - Enhanced Modern Design */}
      <section className="py-32 bg-gradient-to-b from-muted/20 via-muted/10 to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Resources</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Learning{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Access our comprehensive library of curated learning materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
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
                <Card className="border border-border/40 rounded-2xl hover:border-primary/40 transition-all duration-500 h-full group hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/5">
                      <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/materials">
              <Button 
                size="lg" 
                className="rounded-full px-10 h-14 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"
              >
                Browse All Materials 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section - High Impact Design */}
      <section className="py-40 md:py-48 bg-gradient-to-br from-background via-primary/[0.03] to-background relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(var(--primary) / 0.05) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        
        {/* Ambient gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 text-center max-w-5xl relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-5 py-2 mb-10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary">Get Started Today</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 text-foreground leading-[1.05] tracking-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Ready to transform your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary/70 bg-clip-text text-transparent animate-gradient">
                digital future?
              </span>
              <span className="absolute bottom-2 left-0 w-full h-5 bg-gradient-to-r from-primary/10 to-accent/10 -rotate-1 rounded blur-sm"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-20 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '200ms' }}>
            Join {stats.totalStudents} students who have launched successful careers in No-Code and CMS development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="rounded-full px-12 h-16 text-base md:text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-500 group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-12 h-16 text-base md:text-lg font-bold border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 group shadow-sm hover:shadow-lg hover:shadow-primary/10"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Raise a Ticket
              </Button>
            </Link>
          </div>
          
          {/* Secondary CTA */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link to="/students">
              <Button 
                variant="ghost"
                size="lg"
                className="rounded-full px-8 h-12 text-base hover:bg-primary/5 transition-all duration-300 group"
              >
                Browse Student Portfolios
                <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
