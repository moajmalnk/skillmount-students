import { useState } from "react";
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
import { Award, BookOpen, GraduationCap, TrendingUp, ArrowRight } from "lucide-react";

const Home = () => {
  const [showAllStudents, setShowAllStudents] = useState(false);
  
  // Mock data - replace with API calls
  const stats = {
    totalStudents: 1200,
    placements: 850,
    successRate: "95%",
    avgSalary: "$75,000"
  };
  
  const topPerformers = [
    {
      id: 1,
      name: "Alex Johnson",
      batch: "Batch 12 - 2024",
      domain: "https://example.com",
      github: "https://github.com/alexj",
      email: "alex@example.com",
      phone: "+1234567890",
      skills: ["React", "Node.js", "TypeScript"],
      isTopPerformer: true
    },
    {
      id: 2,
      name: "Sarah Williams",
      batch: "Batch 12 - 2024",
      domain: "https://example.com",
      github: "https://github.com/sarahw",
      email: "sarah@example.com",
      skills: ["Vue.js", "Python", "PostgreSQL"],
      isTopPerformer: true
    },
    {
      id: 3,
      name: "Michael Chen",
      batch: "Batch 11 - 2024",
      domain: "https://example.com",
      email: "michael@example.com",
      skills: ["Angular", "Java", "MongoDB"],
      isTopPerformer: true
    },
    {
      id: 4,
      name: "Emma Davis",
      batch: "Batch 12 - 2024",
      domain: "https://example.com",
      github: "https://github.com/emmad",
      skills: ["React", "GraphQL", "AWS"],
      isTopPerformer: true
    }
  ];
  
  const latestBatchStudents = [
    {
      id: 5,
      name: "John Doe",
      batch: "Batch 12 - 2024",
      domain: "https://example.com",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 6,
      name: "Jane Smith",
      batch: "Batch 12 - 2024",
      skills: ["React", "Tailwind"]
    },
    // Add more students...
  ];
  
  const faqs = [
    {
      question: "What is the duration of the course?",
      answer: "Our comprehensive web development bootcamp runs for 6 months, including hands-on projects and placement preparation."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes! We have a dedicated placement cell with a 95% placement success rate. We work with 200+ partner companies."
    },
    {
      question: "What are the prerequisites?",
      answer: "Basic computer knowledge and passion for coding. We start from fundamentals and build up to advanced topics."
    },
    {
      question: "Is the course online or offline?",
      answer: "We offer both online and hybrid modes to suit different learning preferences and schedules."
    },
    {
      question: "What is the class size?",
      answer: "We maintain small batch sizes of 20-25 students to ensure personalized attention and mentorship."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-background py-16 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-foreground">
              Join amazing developers community shaping{" "}
              <span className="relative">
                <span className="relative z-10">top digital</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -rotate-1"></span>
              </span>{" "}
              talent.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Trusted by students from:
            </p>
            
            {/* Company Logos Placeholder */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-60">
              <div className="text-2xl font-bold">Google</div>
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">Amazon</div>
              <div className="text-2xl font-bold">Meta</div>
              <div className="text-2xl font-bold">Netflix</div>
            </div>
            
            <div className="inline-flex items-center gap-4 bg-muted/50 rounded-full px-6 py-4 mb-8">
              <p className="text-foreground font-medium">
                Showcase your portfolio to global audience.
              </p>
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Submit Portfolio
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats - Minimalist */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stats.totalStudents}+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stats.placements}+</div>
              <div className="text-sm text-muted-foreground">Placements</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stats.successRate}</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">12</div>
              <div className="text-sm text-muted-foreground">Batches</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explore Top Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Explore Top Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/students?category=top-performers" className="group">
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-yellow-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/60 rounded-3xl backdrop-blur-sm"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    Top Performers
                  </h3>
                  <p className="text-sm text-muted-foreground">8+ Students</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/students?category=full-stack" className="group">
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full space-y-2">
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    Full Stack Developers
                  </h3>
                  <p className="text-sm text-muted-foreground">200+ Students</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/students?category=frontend" className="group">
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-24 h-24 bg-white/60 rounded-full backdrop-blur-sm"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    Frontend Specialists
                  </h3>
                  <p className="text-sm text-muted-foreground">150+ Students</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/students?category=creative" className="group">
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/60 rounded-2xl backdrop-blur-sm transform rotate-12"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    Creative Developers
                  </h3>
                  <p className="text-sm text-muted-foreground">100+ Students</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Top Performers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Top Performers</h2>
            <Link to="/students" className="text-primary hover:underline flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPerformers.map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section - Minimalist */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              We don't just teach code – we build careers
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Through intensive training, real-world projects, and dedicated mentorship, 
              we transform beginners into industry-ready professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Latest Batch Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Latest Batch - 2024</h2>
              <p className="text-lg text-muted-foreground">
                Explore projects from our most recent graduates
              </p>
            </div>
            <Link to="/students" className="hidden md:flex text-primary hover:underline items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {latestBatchStudents.slice(0, showAllStudents ? undefined : 8).map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
          
          {!showAllStudents && latestBatchStudents.length > 8 && (
            <div className="text-center">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full"
                onClick={() => setShowAllStudents(true)}
              >
                Load More Students
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* FAQ Snippet */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="mb-8 space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center">
            <Link to="/faq">
              <Button variant="outline" className="rounded-full" size="lg">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "Skill Mount transformed my career. The hands-on approach and industry 
                  connections made all the difference."
                </p>
                <div className="font-bold text-foreground">Alex Johnson</div>
                <div className="text-sm text-muted-foreground mt-1">Software Engineer @ Google</div>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "Best decision I ever made. The mentorship and real-world projects 
                  prepared me perfectly for the industry."
                </p>
                <div className="font-bold text-foreground">Sarah Williams</div>
                <div className="text-sm text-muted-foreground mt-1">Full Stack Developer @ Amazon</div>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  "The curriculum is top-notch and the placement support was exceptional. 
                  Got placed within 2 weeks of graduation!"
                </p>
                <div className="font-bold text-foreground">Michael Chen</div>
                <div className="text-sm text-muted-foreground mt-1">React Developer @ Microsoft</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Materials Snippet */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learning Materials
            </h2>
            <p className="text-lg text-muted-foreground">
              Access our comprehensive resource library
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Video Tutorials</h3>
                <p className="text-muted-foreground">Step-by-step video guides</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">PDF Resources</h3>
                <p className="text-muted-foreground">Downloadable study materials</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Code Snippets</h3>
                <p className="text-muted-foreground">Ready-to-use code examples</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/materials">
              <Button size="lg" className="rounded-full">Browse All Materials</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join hundreds of successful students and transform your career today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8">
                Submit Your Portfolio
              </Button>
            </Link>
            <Link to="/students">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Browse Students
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
