import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    learn: [
      { name: "Home", href: "/" },
      { name: "Students", href: "/students" },
      { name: "Materials", href: "/materials" },
      { name: "FAQ", href: "/faq" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Admin Portal", href: "/admin" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/skillmount",
      icon: Linkedin,
      ariaLabel: "Follow us on LinkedIn",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/skillmount",
      icon: Twitter,
      ariaLabel: "Follow us on Twitter",
    },
    {
      name: "GitHub",
      href: "https://github.com/skillmount",
      icon: Github,
      ariaLabel: "Follow us on GitHub",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "moajmalnk@gmail.com",
      href: "mailto:moajmalnk@gmail.com",
      ariaLabel: "Email Skill Mount",
    },
    {
      icon: Phone,
      text: "+1 (234) 567-8900",
      href: "tel:+12345678900",
      ariaLabel: "Call Skill Mount",
    },
    {
      icon: MapPin,
      text: "123 Tech Street, Innovation Hub",
      href: "#",
      ariaLabel: "Visit our location",
    },
  ];

  return (
    <footer 
      className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 mt-20"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Schema.org Organization markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Skill Mount Academy",
            description: "Empowering students to build exceptional web development skills",
            url: "https://skillmount.com",
            logo: "https://skillmount.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-234-567-8900",
              contactType: "Customer Service",
              email: "moajmalnk@gmail.com",
            },
            sameAs: [
              "https://linkedin.com/company/skillmount",
              "https://twitter.com/skillmount",
              "https://github.com/skillmount",
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Brand Section - Card Style */}
          <div className="lg:col-span-4">
            <div className="group">
              <Link 
                to="/" 
                className="inline-block mb-6 transition-transform duration-300 hover:scale-105"
                aria-label="Skill Mount home"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Skill Mount
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                Empowering the next generation of developers through innovative learning, 
                collaborative projects, and real-world experience.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center gap-3 group/contact p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md"
                    aria-label={item.ariaLabel}
                  >
                    <div className="flex-shrink-0">
                      <item.icon className="w-4 h-4 text-gray-500 dark:text-gray-500 group-hover/contact:text-primary transition-colors" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/contact:text-gray-900 dark:group-hover/contact:text-gray-200 transition-colors">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Grid - Card Style */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {/* Learn Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Learn
                </h3>
                <ul className="space-y-3">
                  {navigation.learn.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="group/link inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group/link inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Company
                </h3>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group/link inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="group/link inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      >
                        <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get the latest updates on new courses and features.
                  </p>
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  aria-label="Subscribe to newsletter"
                >
                  <span className="text-sm font-medium">Subscribe</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>
                &copy; {currentYear}{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  Skill Mount Academy
                </span>
                . All rights reserved.
              </p>
              <p className="mt-1 text-xs">
                Crafted with passion for learning and innovation.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-md transition-all duration-300"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};

export default Footer;
