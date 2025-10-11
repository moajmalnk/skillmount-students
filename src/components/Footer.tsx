const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Skill Mount</h3>
            <p className="text-sm opacity-90">
              Empowering students to build exceptional web development skills
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="/" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="/students" className="hover:opacity-100 transition-opacity">Students</a></li>
              <li><a href="/faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="/materials" className="hover:opacity-100 transition-opacity">Materials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: info@skillmount.com</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Address: 123 Tech Street</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-sm opacity-90">
              <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
              <a href="#" className="hover:opacity-100 transition-opacity">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>&copy; 2025 Skill Mount Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
