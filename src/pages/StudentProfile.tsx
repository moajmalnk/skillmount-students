import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Github, ExternalLink, Award, Sparkles, Star, Calendar, MapPin, Globe, Code2, Palette, Database, TrendingUp, Clock, Users, Heart, Target, ArrowRight } from "lucide-react";
import { formatBatchForDisplay } from "@/lib/batches";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation";
import { FollowingPointer } from "@/components/ui/following-pointer";

const StudentProfile = () => {
  const { id } = useParams();
  
  // Mock data - replace with API call
  const batchId = "0925"; // September 2025 - latest batch
  const student = {
    id: Number(id),
    name: "Alex Johnson",
    batchId: batchId,
    batch: formatBatchForDisplay(batchId),
    bio: "Passionate WordPress developer with expertise in building custom themes and e-commerce solutions. Experienced in Elementor, WooCommerce, and website optimization. Love creating accessible and user-friendly websites.",
    domain: "https://moajmalnk.in",
    github: "https://github.com/alexj",
    email: "alex@example.com",
    phone: "+1234567890",
    skills: ["WordPress", "Elementor", "WooCommerce", "Security & Backup", "E-commerce", "Accessibility"],
    isTopPerformer: true,
    location: "Kerala, India",
    joinDate: "September 2025",
    experience: "2+ Years",
    achievements: [
      "Best Project Award - Batch 14",
      "Placed at Google with $95,000 package",
      "Contributed to 5+ open source projects"
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Custom WooCommerce solution with advanced payment integration and modern UI design",
        tech: ["WordPress", "WooCommerce", "Elementor", "SEO Optimization"],
        link: "https://moajmalnk.in/project1",
        image: "/tutor-hero.jpg",
        featured: true
      },
      {
        name: "Business Website",
        description: "Professional business website with custom theme design and performance optimization",
        tech: ["WordPress", "Custom Theme Design", "Gutenberg"],
        link: "https://moajmalnk.in/project2",
        image: "/tutor-hero.jpg",
        featured: false
      },
      {
        name: "Portfolio Website",
        description: "Fast and accessible portfolio website with advanced optimization and modern animations",
        tech: ["WordPress", "Speed Optimization", "Accessibility"],
        link: "https://moajmalnk.in/project3",
        image: "/tutor-hero.jpg",
        featured: false
      }
    ]
  };

  // SEO Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": student.name,
    "description": student.bio,
    "url": student.domain,
    "jobTitle": "WordPress Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "SkillMount"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SkillMount Training Institute"
    }
  };

  return (
    <FollowingPointer>
      {/* SEO Meta Tags */}
      <SEO
        title={`${student.name} - Student Portfolio | SkillMount`}
        description={student.bio}
        keywords={`${student.name}, WordPress developer, SkillMount student, ${student.skills.join(', ')}, portfolio`}
        url={`https://students.moajmalnk.in/student/${student.id}`}
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
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/70"></div>
          
          {/* Ultra-subtle professional texture */}
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Back Navigation */}
          <ContainerScrollAnimation direction="up" speed="fast">
            <div className="pt-8 sm:pt-12 mb-8 sm:mb-12">
              <Link 
                to="/students" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm sm:text-base font-medium">Back to Students</span>
        </Link>
            </div>
          </ContainerScrollAnimation>

          {/* Hero Profile Section */}
          <ContainerScrollAnimation direction="up" speed="slow">
            <section className="mb-16 sm:mb-20">
              <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden bg-card/40 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700">
                <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                  <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
                    {/* Left Column - Profile Info */}
                    <div className="space-y-6 sm:space-y-8">
                      {/* Status Badge */}
                      <div className="flex items-center gap-2.5 bg-primary/[0.05] border border-primary/10 rounded-full px-4 py-2 w-fit">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-primary tracking-wide">Active Student</span>
              </div>
              
                      {/* Name and Title */}
                      <div className="space-y-4">
                        <TextGenerateEffect 
                          words={student.name} 
                          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[0.9]"
                          duration={2}
                        />
                        <div className="space-y-2">
                          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">{student.batch}</p>
                    {student.isTopPerformer && (
                            <Badge className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 px-4 py-2">
                              <Award className="w-4 h-4 mr-2" />
                        Top Performer
                      </Badge>
                    )}
                  </div>
                </div>
                
                      {/* Bio */}
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        {student.bio}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-t border-border/20">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-primary">{student.experience}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground font-medium">Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-primary">{student.projects.length}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground font-medium">Projects</div>
                        </div>
                        <div className="text-center col-span-2 sm:col-span-1">
                          <div className="text-2xl sm:text-3xl font-bold text-primary">{student.skills.length}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground font-medium">Skills</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        {student.domain && (
                          <Button size="sm" className="rounded-full px-6 h-10 bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl">
                            <Globe className="w-4 h-4 mr-2" />
                            Portfolio
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        )}
                        {student.github && (
                          <Button size="sm" variant="outline" className="rounded-full px-6 h-10 border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 group">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className="relative">
                      <ProfessionalBackground
                        src="https://moajmalnk.in/assets/img/hero/moajmalnk.webp"
                        alt={`${student.name} - Professional Portrait`}
                        className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl shadow-2xl bg-gradient-to-br from-card to-card/50"
                        overlay={true}
                        parallax={false}
                        responsive={true}
                      >
                        {/* Floating Contact Card */}
                        <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-white/30 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-2xl hover:shadow-3xl transition-all duration-500">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>
                            <div className="text-left">
                              <div className="text-xs sm:text-sm font-bold text-gray-800">{student.name}</div>
                              <div className="text-xs text-gray-600">Contact Available</div>
                            </div>
                          </div>
                        </div>
                      </ProfessionalBackground>
                    </div>
                  </div>
                </div>
              </WobbleCard>
            </section>
          </ContainerScrollAnimation>

          {/* Skills Section */}
          <ContainerScrollAnimation direction="up" speed="normal">
            <section className="mb-16 sm:mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-6">
                  <Code2 className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground tracking-wide">Technical Skills</span>
                </div>
                <TextGenerateEffect 
                  words="Skills & Expertise" 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight leading-[0.95]"
                  duration={1.5}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {student.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="animate-elegant-entrance"
                    style={{ 
                      animationDelay: `${idx * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <WobbleCard className="border border-border/30 rounded-2xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 bg-card/30 backdrop-blur-sm p-4 text-center group hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="w-8 h-8 mx-auto bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {skill.includes('WordPress') && <Code2 className="w-4 h-4 text-primary" />}
                        {skill.includes('Elementor') && <Palette className="w-4 h-4 text-primary" />}
                        {skill.includes('WooCommerce') && <Database className="w-4 h-4 text-primary" />}
                        {skill.includes('SEO') && <TrendingUp className="w-4 h-4 text-primary" />}
                        {skill.includes('E-commerce') && <Globe className="w-4 h-4 text-primary" />}
                        {skill.includes('Accessibility') && <Heart className="w-4 h-4 text-primary" />}
                        {skill.includes('Security') && <Target className="w-4 h-4 text-primary" />}
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill}
                      </p>
                    </div>
                    </WobbleCard>
                  </div>
                ))}
              </div>
            </section>
          </ContainerScrollAnimation>

          {/* Achievements Section */}
          {student.achievements.length > 0 && (
            <ContainerScrollAnimation direction="up" speed="slow">
              <section className="mb-16 sm:mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500/8 to-orange-500/8 border border-amber-500/15 rounded-full px-5 py-2 mb-6">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span className="text-xs font-medium text-amber-600 tracking-wide">Achievements</span>
                  </div>
                  <TextGenerateEffect 
                    words="Recognition & Awards" 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight leading-[0.95]"
                    duration={1.5}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {student.achievements.map((achievement, idx) => (
                    <div 
                      key={idx}
                      className="animate-elegant-entrance"
                      style={{ 
                        animationDelay: `${idx * 150}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WobbleCard className="border border-border/30 rounded-3xl hover:border-amber-500/20 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-700 bg-card/30 backdrop-blur-sm p-6 sm:p-8 group hover:-translate-y-2">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500/8 to-amber-500/4 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                          <Award className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                            {achievement}
                          </p>
                        </div>
                      </div>
                      </WobbleCard>
                    </div>
                  ))}
                </div>
              </section>
            </ContainerScrollAnimation>
          )}

          {/* Projects Section */}
          <ContainerScrollAnimation direction="up" speed="normal">
            <section className="mb-16 sm:mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2.5 bg-primary/[0.03] border border-primary/10 rounded-full px-5 py-2 mb-6">
                  <Palette className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-foreground tracking-wide">Portfolio</span>
                </div>
                <TextGenerateEffect 
                  words="Featured Projects" 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight leading-[0.95]"
                  duration={1.5}
                />
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                  Showcasing exceptional work and innovative solutions
                </p>
              </div>

              <div className="space-y-8">
                {student.projects.map((project, idx) => (
                  <div 
                    key={idx}
                    className="animate-elegant-entrance"
                    style={{ 
                      animationDelay: `${idx * 200}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 bg-card/30 backdrop-blur-sm group hover:-translate-y-2">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Image */}
                      <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px]">
                        <ProfessionalBackground
                          src={project.image}
                          alt={`${project.name} - Project Screenshot`}
                          className="w-full h-full"
                          overlay={true}
                          parallax={false}
                          responsive={true}
                        />
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-primary/90 to-primary/70 text-white px-3 py-1">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                </div>
                
                      {/* Project Content */}
                      <div className="p-6 sm:p-8 md:p-10">
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                {project.name}
                              </h3>
                              {project.link && (
                                <Button size="sm" variant="ghost" className="rounded-full p-2 hover:bg-primary/10 hover:text-primary transition-all duration-300" asChild>
                                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                            </div>
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                              {project.description}
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIdx) => (
                                <Badge 
                                  key={techIdx} 
                                  variant="outline" 
                                  className="text-xs px-3 py-1 border-border/30 hover:border-primary/30 hover:text-primary transition-colors duration-300"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            {project.link && (
                              <Button 
                                size="sm" 
                                className="rounded-full px-6 h-10 bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl"
                                asChild
                              >
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  View Project
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  )}
                          </div>
                        </div>
                      </div>
                    </div>
                    </WobbleCard>
                  </div>
                ))}
              </div>
            </section>
          </ContainerScrollAnimation>

          {/* Contact Section */}
          <ContainerScrollAnimation direction="up" speed="slow">
            <section className="mb-16 sm:mb-20">
              <WobbleCard className="border border-border/30 rounded-3xl overflow-hidden bg-card/40 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700">
                <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 bg-primary/8 border border-primary/15 rounded-full px-4 py-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary tracking-wide">Get In Touch</span>
                    </div>
                    
                    <div className="space-y-4">
                      <TextGenerateEffect 
                        words="Let's Work Together" 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[0.95]"
                        duration={1.5}
                      />
                      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                        Ready to collaborate on your next project? Let's discuss how we can bring your vision to life.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                  {student.email && (
                        <Button size="sm" variant="outline" className="rounded-full px-6 h-10 border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 group" asChild>
                      <a href={`mailto:${student.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  )}
                  {student.phone && (
                        <Button size="sm" variant="outline" className="rounded-full px-6 h-10 border-border/40 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 group" asChild>
                      <a href={`tel:${student.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </a>
                    </Button>
                  )}
                      {student.domain && (
                        <Button size="sm" className="rounded-full px-6 h-10 bg-primary hover:bg-primary/90 transition-all duration-300 group shadow-lg hover:shadow-xl" asChild>
                          <a href={student.domain} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            Portfolio
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    )}
                  </div>
                  </div>
          </div>
              </WobbleCard>
            </section>
          </ContainerScrollAnimation>
        </div>
      </div>
    </FollowingPointer>
  );
};

export default StudentProfile;
