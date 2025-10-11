import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">SM</span>
            </div>
            <span className="text-xl font-bold text-foreground">Skill Mount</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive("/") ? "secondary" : "ghost"}>Home</Button>
            </Link>
            <Link to="/students">
              <Button variant={isActive("/students") ? "secondary" : "ghost"}>Students</Button>
            </Link>
            <Link to="/faq">
              <Button variant={isActive("/faq") ? "secondary" : "ghost"}>FAQ</Button>
            </Link>
            <Link to="/materials">
              <Button variant={isActive("/materials") ? "secondary" : "ghost"}>Materials</Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "secondary" : "ghost"}>Contact</Button>
            </Link>
          </div>
          
          <Link to="/admin">
            <Button variant="outline" size="sm">Admin Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
