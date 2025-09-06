import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Code, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/krrish-balana/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Krrishbalana",
      label: "GitHub",
    },
    {
      icon: <Code className="h-5 w-5" />,
      href: "https://leetcode.com/u/krishbalana/",
      label: "LeetCode",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:krrishbalana@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const technologies = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "OpenAI API",
    "Bcrypt",
    "Postman",
    "Tailwind CSS",
    "Git/Github",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl font-bold text-gradient mb-4 cursor-pointer"
                onClick={scrollToTop}
              >
                Krish Balana
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Full Stack Web Developer passionate about creating innovative
                solutions and beautiful user experiences.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-background border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 link-underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Technologies */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Anupgarh, Rajasthan</p>
                <p>India</p>
                <a
                  href="mailto:krrishbalana@gmail.com"
                  className="hover:text-accent transition-colors duration-300 link-underline"
                >
                  krrishbalana@gmail.com
                </a>
                <a
                  href="tel:+918690909867"
                  className="hover:text-accent transition-colors duration-300 link-underline"
                >
                  <br />
                  +91-8690909867
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Krish Balana. Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
            <span>and lots of coffee ☕</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Built with React.js & Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
