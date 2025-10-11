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
import tutorImage from "@/assets/tutor-hero.jpg";
import { Award, BookOpen, GraduationCap, TrendingUp } from "lucide-react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build Your Future in <span className="text-accent">Web Development</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Join Skill Mount Academy and transform your career with industry-leading training, 
                real-world projects, and guaranteed placement support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/students">
                  <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    View Student Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src={tutorImage} 
                alt="Expert Web Development Tutor" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{stats.totalStudents}+</div>
                <div className="text-sm opacity-90">Students Trained</div>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{stats.placements}+</div>
                <div className="text-sm opacity-90">Successful Placements</div>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{stats.successRate}</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                <div className="text-3xl font-bold">{stats.avgSalary}</div>
                <div className="text-sm opacity-90">Average Package</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Top Performers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Top Performers</h2>
            <p className="text-xl text-muted-foreground">
              Meet our exceptional students who have excelled in their journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPerformers.map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Vision & Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Skill Mount Academy, we envision a future where every aspiring developer has access 
              to world-class education and opportunities. Our mission is to bridge the gap between 
              academic learning and industry requirements.
            </p>
            <p className="text-lg text-muted-foreground">
              We don't just teach code – we build careers. Through intensive training, real-world 
              projects, and dedicated mentorship, we transform beginners into industry-ready professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Latest Batch Showcase */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest Batch - 2024</h2>
            <p className="text-xl text-muted-foreground">
              Explore projects from our most recent graduates
            </p>
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
                onClick={() => setShowAllStudents(true)}
              >
                More Students
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Total Batches Summary */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">12 Batches Completed</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Over 1,200 success stories across multiple cohorts
            </p>
            <Link to="/students">
              <Button size="lg" variant="default">
                View All Students
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Snippet */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>
            
            <Accordion type="single" collapsible className="mb-8">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center">
              <Link to="/faq">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Students Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "Skill Mount transformed my career. The hands-on approach and industry 
                  connections made all the difference."
                </p>
                <div className="font-semibold">- Alex Johnson</div>
                <div className="text-sm text-muted-foreground">Software Engineer @ Google</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "Best decision I ever made. The mentorship and real-world projects 
                  prepared me perfectly for the industry."
                </p>
                <div className="font-semibold">- Sarah Williams</div>
                <div className="text-sm text-muted-foreground">Full Stack Developer @ Amazon</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "The curriculum is top-notch and the placement support was exceptional. 
                  Got placed within 2 weeks of graduation!"
                </p>
                <div className="font-semibold">- Michael Chen</div>
                <div className="text-sm text-muted-foreground">React Developer @ Microsoft</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Materials Snippet */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Learning Materials</h2>
            <p className="text-xl text-muted-foreground">
              Access our comprehensive resource library
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📹</div>
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground">Step-by-step video guides</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-semibold mb-2">PDF Resources</h3>
                <p className="text-muted-foreground">Downloadable study materials</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2">Code Snippets</h3>
                <p className="text-muted-foreground">Ready-to-use code examples</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/materials">
              <Button size="lg">Browse All Materials</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful students and transform your career today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-primary text-primary-foreground">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Raise a Ticket
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
