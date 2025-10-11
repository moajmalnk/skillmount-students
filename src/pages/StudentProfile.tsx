import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Github, ExternalLink, Award } from "lucide-react";

const StudentProfile = () => {
  const { id } = useParams();
  
  // Mock data - replace with API call
  const student = {
    id: Number(id),
    name: "Alex Johnson",
    batch: "Batch 12 - 2024",
    bio: "Passionate full-stack developer with a keen interest in building scalable web applications. Experienced in React, Node.js, and cloud technologies. Love solving complex problems and creating user-friendly interfaces.",
    domain: "https://example.com",
    github: "https://github.com/alexj",
    email: "alex@example.com",
    phone: "+1234567890",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
    isTopPerformer: true,
    achievements: [
      "Best Project Award - Batch 12",
      "Placed at Google with $95,000 package",
      "Contributed to 5+ open source projects"
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://example.com/project1"
      },
      {
        name: "Social Media Dashboard",
        description: "Analytics dashboard for social media management",
        tech: ["React", "TypeScript", "Chart.js"],
        link: "https://example.com/project2"
      },
      {
        name: "Task Management App",
        description: "Real-time collaborative task tracking application",
        tech: ["React", "Firebase", "Tailwind CSS"],
        link: "https://example.com/project3"
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
