import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation";
import { FollowingPointer } from "@/components/ui/following-pointer";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import SEO from "@/components/SEO";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertTriangle, 
  Sparkles, 
  ExternalLink,
  RefreshCw,
  Compass
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    setIsVisible(true);
  }, [location.pathname]);

  // Popular pages for navigation
  const popularPages = [
    { name: "Home", path: "/", icon: Home },
    { name: "Students", path: "/students", icon: Search },
    { name: "Materials", path: "/materials", icon: Compass },
    { name: "Contact", path: "/contact", icon: ExternalLink }
  ];

  // SEO structured data for 404 page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - SkillMount Students",
    "description": "The requested page could not be found. Navigate back to explore our student portfolios and resources.",
    "url": "https://students.moajmalnk.in/404",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "SkillMount",
      "url": "https://moajmalnk.in"
    }
  };

  return (
    <FollowingPointer>
      {/* SEO Meta Tags */}
      <SEO
        title="Page Not Found - SkillMount Students"
        description="The requested page could not be found. Navigate back to explore our student portfolios and WordPress training resources."
        keywords="404, page not found, SkillMount, student portfolios, WordPress training"
        url="https://students.moajmalnk.in/404"
        image="https://moajmalnk.in/assets/img/logo/logo-lightaj.png"
        author="Mohammed Ajmal NK"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background relative">
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
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60"></div>
          
          {/* Ultra-subtle professional texture */}
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <ContainerScrollAnimation direction="up" speed="slow">
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center min-h-screen py-12 sm:py-16 md:py-20">
                
                {/* Left Column - 404 Content */}
                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                  {/* Error Badge */}
                  <div className="flex items-center justify-center gap-2.5 bg-red-500/[0.03] border border-red-500/10 rounded-full px-5 py-2 w-fit mx-auto sm:mx-0">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Page Not Found</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <TextGenerateEffect 
                        words="404 Error" 
                        className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-foreground tracking-tight"
                        duration={1.5}
                      />
                      <div className="text-center sm:text-left">
                        <TextGenerateEffect 
                          words="Page Not Found" 
                          className="text-2xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
                          duration={2}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl">
                        The page you're looking for seems to have wandered off into the digital void.
                      </p>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Don't worry! Let's get you back on track to explore amazing student portfolios and resources.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                    <Link to="/">
                      <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl">
                        <Home className="w-5 h-5 mr-2" />
                        Return Home
                        <ArrowLeft className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                    
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => window.history.back()}
                      className="rounded-full px-8 h-14 text-base font-semibold border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 group"
                    >
                      <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                      Go Back
                    </Button>
                  </div>

                  {/* Popular Pages Navigation */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 w-fit">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-foreground tracking-wide">Popular Pages</span>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {popularPages.map((page, index) => (
                        <Link 
                          key={page.name}
                          to={page.path}
                          className="group animate-elegant-entrance"
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: 'both'
                          }}
                        >
                          <WobbleCard className="border border-border/30 rounded-2xl hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 bg-card/30 backdrop-blur-sm group-hover:-translate-y-1">
                            <div className="p-4 text-center">
                              <page.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                {page.name}
                              </span>
                            </div>
                          </WobbleCard>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Professional Visual */}
                <div className="relative">
                  <ProfessionalBackground
                    src="https://moajmalnk.in/assets/img/hero/moajmalnk.webp"
                    alt="Mohammed Ajmal NK - Professional WordPress & No-Code Training Expert"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl shadow-2xl bg-gradient-to-br from-card to-card/50"
                    overlay={true}
                    parallax={false}
                    responsive={true}
                  >
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                      <div className="text-center w-full max-w-sm md:max-w-md mx-auto">
                        {/* Help Card */}
                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/40 hover:shadow-3xl transition-all duration-500">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                            <Search className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Need Help?</h3>
                          <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                            Can't find what you're looking for? Let's help you navigate to the right place.
                          </p>
                          <Link to="/contact">
                            <Button size="sm" className="w-full rounded-full px-6 h-10 text-sm font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                              Get Help
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ProfessionalBackground>
                  
                  {/* Floating Help Card */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-white/30 rounded-xl px-6 py-4 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                    <a 
                      href="https://moajmalnk.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <AlertTriangle className="w-6 h-6 text-primary" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg">
                          <div className="w-full h-full bg-orange-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="text-left min-w-0 flex-1">
                        <div className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">Report Issue</div>
                        <div className="text-xs text-gray-600">Let us know about broken links</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerScrollAnimation>

        {/* Additional Help Section */}
        <ContainerScrollAnimation direction="up" speed="normal">
          <section className="pt-16 pb-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-8">
                  <Compass className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground tracking-wide">Quick Navigation</span>
                </div>
                <TextGenerateEffect 
                  words="Find What You Need" 
                  className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-[0.95]"
                  duration={1.5}
                />
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                  Explore our comprehensive resources and student portfolios
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <WobbleCard className="border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 bg-card/30 backdrop-blur-sm overflow-hidden">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/8 to-primary/4 rounded-2xl flex items-center justify-center">
                          <Search className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Student Portfolios</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg font-light">
                        Browse through our extensive collection of student portfolios showcasing WordPress and No-Code expertise.
                      </p>
                      <Link to="/students">
                        <Button variant="outline" className="rounded-full px-6 h-11 border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group">
                          <span>Explore Portfolios</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </WobbleCard>
                
                <WobbleCard className="border border-border/30 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 bg-card/30 backdrop-blur-sm overflow-hidden">
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/8 to-primary/4 rounded-2xl flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">Learning Resources</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg font-light">
                        Access our comprehensive library of tutorials, themes, and learning materials for WordPress development.
                      </p>
                      <Link to="/materials">
                        <Button variant="outline" className="rounded-full px-6 h-11 border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group">
                          <span>Browse Materials</span>
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </WobbleCard>
              </div>
            </div>
          </section>
        </ContainerScrollAnimation>
      </div>
    </FollowingPointer>
  );
};

export default NotFound;
