import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, BookOpen, Sparkles, MessageSquare, Mail, ArrowRight, HelpCircle, Filter, Star, Clock, Users, Award } from "lucide-react";
import { loadFAQs, initializeFAQs, faqCategories, FAQ } from "@/lib/faq-data";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation";
import { FollowingPointer } from "@/components/ui/following-pointer";
import SEO from "@/components/SEO";
import ProfessionalBackground from "@/components/ProfessionalBackground";

// Memoized Category Badge Component
const CategoryBadge = memo(({ category, count, isActive, onClick, delay }: any) => (
  <div 
    className={`inline-block cursor-pointer animate-elegant-entrance`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    onClick={onClick}
  >
    <WobbleCard className={`overflow-hidden border rounded-2xl transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-card/30 backdrop-blur-sm ${
      isActive 
        ? 'border-primary/30 bg-primary/5 shadow-lg shadow-primary/10' 
        : 'border-border/30 hover:border-primary/20 hover:shadow-primary/5'
    }`}>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isActive ? 'bg-primary/20' : 'bg-muted/50 group-hover:bg-primary/10'
          }`}>
            <HelpCircle className={`w-4 h-4 transition-colors duration-300 ${
              isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
            }`} strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`text-sm sm:text-base font-semibold transition-colors duration-300 truncate ${
              isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'
            }`}>
              {category}
            </h3>
            <p className="text-xs text-muted-foreground">{count} questions</p>
          </div>
        </div>
      </div>
    </WobbleCard>
  </div>
));

CategoryBadge.displayName = "CategoryBadge";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    initializeFAQs();
    setFaqs(loadFAQs());
    setIsVisible(true);
  }, []);

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  // Filter FAQs based on search and category
  const filteredFaqs = Object.entries(groupedFaqs)
    .map(([category, questions]) => ({
      category,
      questions: questions.filter(
        faq =>
          (selectedCategory === "all" || category === selectedCategory) &&
          (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter(category => category.questions.length > 0);

  const totalFAQs = faqs.length;
  
  // Category statistics
  const categoryStats = Object.entries(groupedFaqs).map(([category, questions]) => ({
    category,
    count: questions.length
  }));
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '')
      }
    }))
  };

  return (
    <FollowingPointer>
      {/* Advanced SEO Meta Tags */}
      <SEO
        title="FAQ - WordPress & No-Code Development Questions | SkillMount"
        description="Find answers to common questions about WordPress, Elementor, Divi, WooCommerce, and No-Code development. Expert guidance for beginners and professionals."
        keywords="WordPress FAQ, Elementor questions, Divi help, WooCommerce setup, No-Code development, CMS training, web development help, SkillMount support"
        url="https://moajmalnk.in/faq"
        image="https://moajmalnk.in/assets/img/logo/logo-lightaj.png"
        author="Mohammed Ajmal NK"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section - Enhanced with Professional Background */}
        <section className="min-h-screen bg-background relative overflow-hidden">
          {/* Professional Background Layers */}
          <div className="absolute inset-0">
            {/* Primary Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.02]"
              style={{
                backgroundImage: 'url("/tutor-hero.jpg")',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
              }}
            ></div>
            
            {/* Professional Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60"></div>
            
            {/* Ultra-subtle professional texture */}
            <div className="absolute inset-0 opacity-[0.01]" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh]">
                {/* Left Column - Enhanced Content */}
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                  {/* Professional Badge */}
                  <div className="mt-10 flex items-center justify-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 w-fit mx-auto sm:mx-0">
                    <HelpCircle className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Expert Support</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <TextGenerateEffect 
                        words="Frequently Asked Questions" 
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground tracking-tight max-w-4xl"
                        duration={2}
                      />
                      <div className="text-center">
                        <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold">
                          Expert Answers & Support
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                        Find comprehensive answers to common questions about WordPress, No-Code platforms, and CMS development.
                      </p>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        From beginners to professionals - get expert guidance on your development journey.
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-2 gap-8 py-8 border-t border-border/20">
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">{totalFAQs}</div>
                      <div className="text-sm text-muted-foreground font-medium">Questions Answered</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">{categoryStats.length}</div>
                      <div className="text-sm text-muted-foreground font-medium">Expert Categories</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground font-medium">Support Access</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">Expert</div>
                      <div className="text-sm text-muted-foreground font-medium">Guidance</div>
                    </div>
                  </div>
                  
                  {/* Enhanced Search */}
                  <div className="relative max-w-md mx-auto sm:mx-0">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
                      placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 rounded-full border-border/40 bg-card/50 backdrop-blur-sm focus:border-primary/50 transition-all duration-300"
            />
          </div>
        </div>

                {/* Right Column - Professional Background with FAQ Stats */}
                <div className="relative">
                  <ProfessionalBackground
                    src="https://moajmalnk.in/assets/img/hero/moajmalnk.webp"
                    alt="Mohammed Ajmal NK - WordPress & No-Code Expert"
                    className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-2xl shadow-2xl bg-gradient-to-br from-card to-card/50"
                    overlay={true}
                    parallax={false}
                    responsive={true}
                  >
                    {/* Professional Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                      <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                        {/* Professional Status Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 shadow-xl border border-white/30">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide">Live Support</span>
                        </div>
                        
                        {/* Professional CTA Card */}
                        <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">Need More Help?</h3>
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">Get personalized support from our experts</p>
                          <Link to="/contact">
                            <Button size="sm" className="w-full sm:w-auto rounded-full px-6 sm:px-8 h-9 sm:h-10 md:h-11 text-xs sm:text-sm md:text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                              Contact Support
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ProfessionalBackground>
                  
                  {/* Professional Floating Stats Card */}
                  <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Professional Avatar */}
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                        {/* Online Status Indicator */}
                        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white shadow-lg">
                          <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <div className="text-xs sm:text-sm md:text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 truncate">Expert Support</div>
                        <div className="text-xs sm:text-sm text-gray-600 truncate">1000+ Students Helped</div>
                        <div className="text-xs sm:text-sm text-green-600 font-medium">● Always Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Category Navigation - Enhanced with Scroll Animation */}
        <ContainerScrollAnimation direction="up" speed="normal">
          <section className="pt-4 sm:pt-16 bg-background relative overflow-hidden">
            {/* Minimal ambient lighting */}
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6 max-w-7xl relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                  <Filter className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground tracking-wide">Browse Categories</span>
                </div>
                <TextGenerateEffect 
                  words="Expert Categories" 
                  className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                  duration={1.5}
                />
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                  Explore questions organized by expertise areas and skill levels
                </p>
              </div>
            
              {/* Enhanced Category Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
                <CategoryBadge
                  category="All Questions"
                  count={totalFAQs}
                  isActive={selectedCategory === "all"}
                  onClick={() => setSelectedCategory("all")}
                  delay={0}
                />
                {categoryStats.slice(0, 7).map((stat, index) => (
                  <CategoryBadge
                    key={stat.category}
                    category={stat.category}
                    count={stat.count}
                    isActive={selectedCategory === stat.category}
                    onClick={() => setSelectedCategory(stat.category)}
                    delay={(index + 1) * 100}
                  />
                ))}
              </div>
            </div>
          </section>
        </ContainerScrollAnimation>

        {/* FAQ Content - Enhanced with Scroll Animation */}
        <ContainerScrollAnimation direction="up" speed="slow">
          <section className="pt-4 sm:pt-16 bg-background relative overflow-hidden">
            {/* Minimal ambient gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6 max-w-6xl relative">

              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/8 to-primary/5 border border-primary/15 rounded-full px-5 py-2 mb-8">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-primary tracking-wide">{selectedCategory === "all" ? "All Categories" : selectedCategory}</span>
                </div>
                <TextGenerateEffect 
                  words={selectedCategory === "all" ? "All Questions" : selectedCategory} 
                  className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight leading-[0.95]"
                  duration={1.5}
                />
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                  {filteredFaqs.length > 0 
                    ? `Found ${filteredFaqs.reduce((total, cat) => total + cat.questions.length, 0)} questions in ${filteredFaqs.length} ${filteredFaqs.length === 1 ? 'category' : 'categories'}`
                    : 'No questions found matching your search'
                  }
                </p>
              </div>
            {filteredFaqs.length > 0 ? (
                <div className="space-y-12">
                {filteredFaqs.map((category, categoryIdx) => (
                    <div 
                      key={categoryIdx} 
                      className="animate-elegant-entrance"
                      style={{ 
                        animationDelay: `${categoryIdx * 150}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-1">
                        <div className="p-8 md:p-10">
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary/8 to-primary/4 rounded-2xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-primary" strokeWidth={1.2} />
                              </div>
                              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {category.category}
                      </h2>
                            </div>
                            <Badge variant="outline" className="text-sm font-medium border-primary/20 text-primary bg-primary/5">
                        {category.questions.length} {category.questions.length === 1 ? 'Question' : 'Questions'}
                      </Badge>
                    </div>

                          <Accordion type="single" collapsible className="space-y-4">
                            {category.questions.map((faq, faqIdx) => (
                        <AccordionItem
                          key={faq.id}
                          value={faq.id}
                                className="border border-border/30 rounded-2xl px-6 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
                        >
                                <AccordionTrigger className="text-left hover:no-underline py-6 [&[data-state=open]]:text-primary transition-colors duration-300">
                                  <span className="font-semibold pr-4 text-lg leading-relaxed">{faq.question}</span>
                          </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                            <div
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    className="prose prose-base max-w-none dark:prose-invert prose-headings:text-foreground prose-strong:text-foreground prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-muted"
                            />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                        </div>
                      </WobbleCard>
                  </div>
                ))}
              </div>
            ) : (
                <div 
                  className="animate-elegant-entrance"
                  style={{ animationDelay: '200ms', animationFillMode: 'both' }}
                >
                  <WobbleCard className="text-center py-16 border border-border/30 rounded-3xl bg-card/30 backdrop-blur-sm">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl flex items-center justify-center">
                      <Search className="w-10 h-10 text-muted-foreground opacity-50" strokeWidth={1.2} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      No Questions Found
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto leading-relaxed">
                      We couldn't find any questions matching your search criteria. Try adjusting your search terms or browse all categories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        variant="outline" 
                        onClick={() => setSearchQuery("")}
                        className="rounded-full px-6 h-10 border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        Clear Search
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedCategory("all")}
                        className="rounded-full px-6 h-10 border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        View All Questions
                      </Button>
                    </div>
                  </WobbleCard>
                </div>
              )}
            </div>
          </section>
        </ContainerScrollAnimation>

        {/* Enhanced CTA Section - Enhanced with Scroll Animation */}
        <ContainerScrollAnimation direction="up" speed="slow">
          <section className="pt-4 sm:pt-16 bg-background relative overflow-hidden">
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
                <span className="text-sm font-medium text-primary tracking-wide">Need More Help?</span>
              </div>
              
              <TextGenerateEffect 
                words="Still have questions?" 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 text-foreground leading-[0.9] tracking-tight"
                duration={2}
              />
            
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                Can't find what you're looking for? Our expert team is here to help you succeed!
              </p>
            
              <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-16">
                <Link to="/contact">
                  <Button size="sm" className="rounded-full px-4 sm:px-10 h-10 sm:h-14 text-xs sm:text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Contact Support</span>
                    <span className="sm:hidden">Contact</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="sm" variant="outline" className="rounded-full px-4 sm:px-10 h-10 sm:h-14 text-xs sm:text-base font-semibold border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 group">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:text-primary" />
                    <span className="hidden sm:inline">Live Chat</span>
                    <span className="sm:hidden">Chat</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:scale-110 group-hover:text-primary transition-transform duration-300" />
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
                    Browse Student Success Stories
                    <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
        </div>
          </section>
        </ContainerScrollAnimation>
      </div>
    </FollowingPointer>
  );
};

export default FAQPage;
