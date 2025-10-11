import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, ExternalLink, Star, Sparkles } from "lucide-react";
import { useState } from "react";

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
  const [imageError, setImageError] = useState(false);
  
  return (
    <article 
      className="group relative flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 portfolio-card"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Top Performer Badge */}
      {isTopPerformer && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm animate-badge-pulse">
          <Star className="w-3 h-3 fill-current" />
          <span>Top Performer</span>
        </div>
      )}
      
      {/* Portfolio Preview Section */}
      <Link 
        to={`/students/${id}`}
        className="relative block w-full aspect-[4/3] bg-gradient-to-br from-muted via-muted/80 to-muted/60 overflow-hidden group/preview"
      >
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500 z-10 flex items-end justify-center pb-6">
          <span className="text-white font-semibold text-sm flex items-center gap-2 transform translate-y-4 group-hover/preview:translate-y-0 transition-transform duration-500">
            View Portfolio
            <ExternalLink className="w-4 h-4" />
          </span>
        </div>
        
        {/* Preview Content */}
        {domain && !imageError ? (
          <div className="relative w-full h-full">
            <iframe
              src={domain}
              className="w-full h-full border-0 pointer-events-none scale-50 origin-top-left group-hover/preview:scale-[0.52] transition-transform duration-700"
              style={{ width: '200%', height: '200%' }}
              title={`${name}'s portfolio preview`}
              loading="lazy"
              onError={() => setImageError(true)}
            />
            {/* Subtle grid overlay for depth */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted via-muted/90 to-muted/80 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}></div>
            <div className="relative z-10 text-center">
              <Sparkles className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3 group-hover/preview:scale-110 transition-transform duration-500" />
              <p className="text-sm text-muted-foreground/60 font-medium">Portfolio Preview</p>
            </div>
          </div>
        )}
      </Link>
      
      {/* Content Section */}
      <CardContent className="flex flex-col flex-grow p-5">
        {/* Name & Batch */}
        <div className="mb-4">
          <Link to={`/students/${id}`} className="group/link">
            <h3 
              className="text-lg font-bold text-foreground mb-1 group-hover/link:text-primary transition-colors duration-300 line-clamp-1"
              itemProp="name"
            >
              {name}
            </h3>
          </Link>
          <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase" itemProp="alumniOf">
            {batch}
          </p>
        </div>
        
        {/* Skills Tags */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {skills.slice(0, 4).map((skill, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="text-[10px] px-2 py-0.5 rounded-md bg-muted/50 hover:bg-muted transition-colors duration-300 font-medium"
                itemProp="knowsAbout"
              >
                {skill}
              </Badge>
            ))}
            {skills.length > 4 && (
              <Badge 
                variant="secondary" 
                className="text-[10px] px-2 py-0.5 rounded-md bg-muted/50 font-medium"
              >
                +{skills.length - 4}
              </Badge>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {domain && (
            <Button 
              size="sm" 
              variant="outline" 
              asChild 
              className="h-8 text-xs rounded-lg border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/btn"
            >
              <a 
                href={domain} 
                target="_blank" 
                rel="noopener noreferrer"
                itemProp="url"
              >
                <ExternalLink className="w-3 h-3 mr-1.5 group-hover/btn:rotate-12 transition-transform duration-300" />
                Visit Site
              </a>
            </Button>
          )}
          {github && (
            <Button 
              size="sm" 
              variant="outline" 
              asChild 
              className="h-8 text-xs rounded-lg border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/btn"
            >
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                itemProp="sameAs"
              >
                <Github className="w-3 h-3 mr-1.5 group-hover/btn:scale-110 transition-transform duration-300" />
                GitHub
              </a>
            </Button>
          )}
        </div>
        
        {/* Contact Info - Minimalist */}
        {(email || phone) && (
          <div className="mt-4 pt-4 border-t border-border/40 space-y-2">
            {email && (
              <a 
                href={`mailto:${email}`} 
                className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 group/contact"
                itemProp="email"
              >
                <Mail className="w-3 h-3 mr-2 flex-shrink-0 group-hover/contact:scale-110 transition-transform duration-300" />
                <span className="truncate">{email}</span>
              </a>
            )}
            {phone && (
              <a 
                href={`tel:${phone}`} 
                className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 group/contact"
                itemProp="telephone"
              >
                <Phone className="w-3 h-3 mr-2 flex-shrink-0 group-hover/contact:scale-110 transition-transform duration-300" />
                <span>{phone}</span>
              </a>
            )}
          </div>
        )}
      </CardContent>
      
      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>
    </article>
  );
};

export default StudentCard;
