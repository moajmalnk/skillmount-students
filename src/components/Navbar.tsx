import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const closeMobileMenu = () => setMobileMenuOpen(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - responsive sizing */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <img 
              src="https://moajmalnk.in/assets/img/logo/logo-lightaj.png" 
              alt="Mohammed Ajmal NK - Skill Mount" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
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
          
          {/* Desktop Admin Login */}
          <div className="hidden md:block">
            <Link to="/admin">
              <Button variant="outline" size="sm">Admin Login</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-border pt-4">
            <Link to="/" onClick={closeMobileMenu} className="block">
              <Button 
                variant={isActive("/") ? "secondary" : "ghost"} 
                className="w-full justify-start"
              >
                Home
              </Button>
            </Link>
            <Link to="/students" onClick={closeMobileMenu} className="block">
              <Button 
                variant={isActive("/students") ? "secondary" : "ghost"} 
                className="w-full justify-start"
              >
                Students
              </Button>
            </Link>
            <Link to="/faq" onClick={closeMobileMenu} className="block">
              <Button 
                variant={isActive("/faq") ? "secondary" : "ghost"} 
                className="w-full justify-start"
              >
                FAQ
              </Button>
            </Link>
            <Link to="/materials" onClick={closeMobileMenu} className="block">
              <Button 
                variant={isActive("/materials") ? "secondary" : "ghost"} 
                className="w-full justify-start"
              >
                Materials
              </Button>
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className="block">
              <Button 
                variant={isActive("/contact") ? "secondary" : "ghost"} 
                className="w-full justify-start"
              >
                Contact
              </Button>
            </Link>
            <Link to="/admin" onClick={closeMobileMenu} className="block pt-2">
              <Button variant="outline" className="w-full">
                Admin Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
