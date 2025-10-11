import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";

interface StudentCardProps {
  id: number;
  name: string;
  batch: string;
  domain?: string;
  github?: string;
  email?: string;
  phone?: string;
  skills?: string[];
  isTopPerformer?: boolean;
}

const StudentCard = ({ 
  id, 
  name, 
  batch, 
  domain, 
  github, 
  email, 
  phone, 
  skills = [],
  isTopPerformer = false 
}: StudentCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <CardContent className="p-0">
        {isTopPerformer && (
          <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
            Top Performer
          </Badge>
        )}
        
        <div className="relative w-full h-48 bg-muted overflow-hidden rounded-t-lg">
          {domain ? (
            <iframe
              src={domain}
              className="w-full h-full border-0 pointer-events-none scale-50 origin-top-left"
              style={{ width: '200%', height: '200%' }}
              title={`${name}'s project`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No preview available
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{batch}</p>
          
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {domain && (
              <Button size="sm" variant="outline" asChild className="text-xs">
                <a href={domain} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Project
                </a>
              </Button>
            )}
            {github && (
              <Button size="sm" variant="outline" asChild className="text-xs">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 mr-1" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
          
          <div className="mt-4 space-y-2">
            {email && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Mail className="w-3 h-3 mr-2" />
                <a href={`mailto:${email}`} className="hover:text-foreground transition-colors">
                  {email}
                </a>
              </div>
            )}
            {phone && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Phone className="w-3 h-3 mr-2" />
                <a href={`tel:${phone}`} className="hover:text-foreground transition-colors">
                  {phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={`/students/${id}`} className="w-full">
          <Button variant="secondary" className="w-full">View Full Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
