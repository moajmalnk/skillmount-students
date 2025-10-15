import { useState, memo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import StudentCard from "@/components/StudentCard";
import SEO from "@/components/SEO";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation";
import { FollowingPointer } from "@/components/ui/following-pointer";
import { Search, Filter, X, Sparkles, Users, Award, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";
import { BATCHES, formatBatchForDisplay, getBatchesSortedLatestFirst } from "@/lib/batches";

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState<string>("all");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Mock data - replace with API calls
  const batches = getBatchesSortedLatestFirst();
  const allSkills = ["WordPress", "Elementor", "WooCommerce", "SEO Optimization", "Custom Theme Design", "Gutenberg", "Security & Backup", "Speed Optimization", "E-commerce", "Accessibility"];
  
  // Stats data
  const stats = {
    totalStudents: "1200+",
    batchesCompleted: `${BATCHES.length}+`,
    successRate: "95%",
    placementSuccess: "Proven"
  };
  
  const students = Array.from({ length: 50 }, (_, i) => {
    const batchId = batches[i % batches.length].id;
    return {
      id: i + 1,
      name: `Student ${i + 1}`,
      batchId: batchId,
      batch: formatBatchForDisplay(batchId),
      domain: i % 3 === 0 ? "https://moajmalnk.in" : undefined,
      github: i % 2 === 0 ? "https://github.com/student" : undefined,
      email: `student${i + 1}@example.com`,
      phone: i % 4 === 0 ? "+1234567890" : undefined,
      skills: allSkills.slice(0, Math.floor(Math.random() * 4) + 2),
      isTopPerformer: i < 8
    };
  });
  
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };
  
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBatch("all");
    setSelectedSkills([]);
  };
  
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch = selectedBatch === "all" || student.batchId === selectedBatch;
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.some(skill => student.skills.includes(skill));
    
    return matchesSearch && matchesBatch && matchesSkills;
  });

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SkillMount Student Directory",
    "description": "Browse portfolios of 1200+ students trained in WordPress and No-Code platforms",
    "url": "https://students.moajmalnk.in/students",
    "numberOfItems": filteredStudents.length,
    "itemListElement": filteredStudents.slice(0, 10).map((student, index) => ({
      "@type": "Person",
      "position": index + 1,
      "name": student.name,
      "description": `Student specializing in ${student.skills.join(", ")}`,
      "url": student.domain || student.github
    }))
  };

  return (
    <FollowingPointer>
      {/* Advanced SEO Meta Tags */}
      <SEO
        title="Student Directory - Browse 1200+ WordPress & No-Code Portfolios"
        description="Explore portfolios of talented students trained in WordPress, Elementor, WooCommerce, and No-Code platforms. Filter by batch, skills, and expertise areas."
        keywords="student portfolios, WordPress developers, No-Code experts, student showcase, SkillMount graduates, web development portfolios, CMS specialists"
        url="https://students.moajmalnk.in/students"
        image="https://moajmalnk.in/assets/img/logo/logo-lightaj.png"
        author="Mohammed Ajmal NK"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section - Enhanced Design */}
        <section className="py-10 md:py-12 bg-background relative">
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
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Badge */}
                  <div className="mt-4 md:mt-6 flex items-center justify-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 w-fit mx-auto sm:mx-0">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground tracking-wide">Student Directory</span>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <TextGenerateEffect 
                        words="Student Directory" 
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground tracking-tight max-w-4xl"
                        duration={2}
                      />
                      <div className="text-center">
                        <a 
                          href="https://moajmalnk.in" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="relative inline-block cursor-pointer hover:scale-105 transition-transform duration-500"
                        >
                          <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold">
                            Explore Portfolios
                          </span>
                          <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/8 -rotate-1 rounded"></span>
                        </a>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                        Browse <span className="font-semibold text-foreground">1200+</span> talented students across <span className="font-semibold text-foreground">{BATCHES.length} batches</span>
                      </p>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Discover exceptional portfolios from students trained in WordPress, No-Code platforms, and CMS development by Mohammed Ajmal NK.
                      </p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 py-6 border-t border-border/20">
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-bold text-primary">{stats.totalStudents}</div>
                      <div className="text-sm text-muted-foreground font-medium">Total Students</div>
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
                      <div className="text-4xl md:text-5xl font-bold text-primary">{filteredStudents.length}</div>
                      <div className="text-sm text-muted-foreground font-medium">Filtered Results</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual Element */}
                <div className="relative">
                  <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-8">
                          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center shadow-lg shadow-primary/10">
                            <Users className="w-16 h-16 text-primary" strokeWidth={1.2} />
                          </div>
                          <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-foreground">Filter & Explore</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                              Use our advanced filters to find students by batch, skills, and expertise areas
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </WobbleCard>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters Section - Enhanced with Scroll Animation */}
        <ContainerScrollAnimation direction="up" speed="normal" distance={28}>
          <section className="pt-0 sm:pt-2 bg-background relative overflow-hidden">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.008]" style={{
              backgroundImage: 'linear-gradient(45deg, transparent 25%, currentColor 25%, currentColor 50%, transparent 50%, transparent 75%, currentColor 75%)',
              backgroundSize: '30px 30px'
            }}></div>
            
            <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-6">
                  <Filter className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground tracking-wide">Advanced Filters</span>
                </div>
                <TextGenerateEffect 
                  words="Filter & Discover" 
                  className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight leading-[0.95]"
                  duration={1.5}
                />
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                  Find the perfect match using our advanced filtering system
          </p>
        </div>
        
              <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 mb-4">
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-12 gap-6 mb-6">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 rounded-xl border-border/30 focus:border-primary/50 bg-background/50 backdrop-blur-sm"
              />
            </div>
            
            <div className="md:col-span-3">
              <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                        <SelectTrigger className="rounded-xl border-border/30 focus:border-primary/50 bg-background/50 backdrop-blur-sm">
                  <SelectValue placeholder="Select Batch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Batches</SelectItem>
                  {batches.map((batch) => (
                    <SelectItem key={batch.id} value={batch.id}>
                      {formatBatchForDisplay(batch.id)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
                    <div className="md:col-span-4 flex items-center justify-end gap-3">
                      <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-medium">
                {filteredStudents.length} of {students.length} students
              </span>
                      </div>
              {(searchQuery || selectedBatch !== "all" || selectedSkills.length > 0) && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearFilters}
                          className="text-xs rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
          
          {/* Skills Filter */}
                  <div className="border-t border-border/20 pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Filter by Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
              {allSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                          className="cursor-pointer transition-all hover:scale-105 rounded-full px-4 py-2 text-sm font-medium border-border/30 hover:border-primary/50 hover:bg-primary/5"
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                  {selectedSkills.includes(skill) && (
                            <X className="w-3 h-3 ml-2" />
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </div>
              </WobbleCard>
            </div>
          </section>
        </ContainerScrollAnimation>
        
        {/* Student Grid Section - Enhanced with Scroll Animation */}
        <ContainerScrollAnimation direction="up" speed="slow" distance={28}>
          <section className="pt-0 sm:pt-2 bg-background relative overflow-hidden">
            {/* Minimal ambient gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-6 max-w-7xl relative">
              {/* Section Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-6">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground tracking-wide">Student Showcase</span>
                </div>
                <TextGenerateEffect 
                  words="Student Portfolios" 
                  className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight leading-[0.95]"
                  duration={1.5}
                />
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                  {filteredStudents.length > 0 
                    ? `Discover ${filteredStudents.length} talented students and their exceptional work`
                    : "No students match your current filters"
                  }
                </p>
        </div>
        
        {/* Student Grid */}
        {filteredStudents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8">
                  {filteredStudents.map((student, index) => (
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
        ) : (
                <div className="text-center py-24">
                  <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-muted/20 to-muted/10 rounded-3xl flex items-center justify-center">
                    <Search className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">No students found</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                    Try adjusting your filters to discover more talented students
                  </p>
                  <Button 
                    onClick={clearFilters} 
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 h-12 border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear All Filters
            </Button>
          </div>
        )}
              
              {/* Footer CTA */}
              {filteredStudents.length > 0 && (
                <div className="text-center pt-8 border-t border-border/20">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/8 to-accent/8 border border-primary/15 rounded-full px-6 py-3 mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary tracking-wide">Ready to Connect?</span>
                  </div>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed font-light">
                    Found a student whose work inspires you? Reach out and start a conversation.
                  </p>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <a 
                      href="https://moajmalnk.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button 
                        size="lg"
                        className="rounded-full px-8 h-14 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 group"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Visit SkillMount
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
        </ContainerScrollAnimation>
      </div>
    </FollowingPointer>
  );
};

export default Students;
