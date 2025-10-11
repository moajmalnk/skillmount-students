import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Github, ExternalLink, Award } from "lucide-react";
import { formatBatchForDisplay } from "@/lib/batches";

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
    achievements: [
      "Best Project Award - Batch 14",
      "Placed at Google with $95,000 package",
      "Contributed to 5+ open source projects"
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Custom WooCommerce solution with advanced payment integration",
        tech: ["WordPress", "WooCommerce", "Elementor", "SEO Optimization"],
        link: "https://moajmalnk.in/project1"
      },
      {
        name: "Business Website",
        description: "Professional business website with custom theme design",
        tech: ["WordPress", "Custom Theme Design", "Gutenberg"],
        link: "https://moajmalnk.in/project2"
      },
      {
        name: "Portfolio Website",
        description: "Fast and accessible portfolio website with advanced optimization",
        tech: ["WordPress", "Speed Optimization", "Accessibility"],
        link: "https://moajmalnk.in/project3"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/students" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Students
        </Link>
        
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-32 h-32 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold flex-shrink-0">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">{student.name}</h1>
                    <p className="text-lg text-muted-foreground mb-2">{student.batch}</p>
                    {student.isTopPerformer && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Award className="w-3 h-3 mr-1" />
                        Top Performer
                      </Badge>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{student.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {student.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {student.domain && (
                    <Button size="sm" asChild>
                      <a href={student.domain} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Portfolio
                      </a>
                    </Button>
                  )}
                  {student.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={student.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {student.email && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={`mailto:${student.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  )}
                  {student.phone && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={`tel:${student.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Achievements */}
        {student.achievements.length > 0 && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Achievements</h2>
              <ul className="space-y-2">
                {student.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start">
                    <Award className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
        
        {/* Projects */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Projects</h2>
          <div className="space-y-4">
            {student.projects.map((project, idx) => (
              <Card key={idx} className="hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                    {project.link && (
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
