import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "krrishbalana@gmail.com",
      href: "mailto:krrishbalana@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91-8690909867",
      href: "tel:+918690909867",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Anupgarh, Rajasthan, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      href: "www.linkedin.com/in/krrishbalana",
      color: "hover:text-blue-400",
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      href: "https://github.com/Krrishbalana",
      color: "hover:text-gray-400",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "LeetCode",
      href: "https://leetcode.com/u/krishbalana/",
      color: "hover:text-orange-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Reach out directly using my
              contact details below or connect with me on social platforms.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to new opportunities, interesting projects,
                  and meaningful collaborations. Whether you have something in
                  mind or just want to say hello, let’s connect.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <Card
                    key={contact.title}
                    className="p-4 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300 group"
                  >
                    <a
                      href={contact.href}
                      className="flex items-center space-x-4"
                    >
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <div className="text-accent">{contact.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{contact.title}</h4>
                        <p className="text-muted-foreground group-hover:text-accent transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card border border-border rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Static CTA instead of form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card border-border shadow-card flex flex-col justify-center items-center text-center space-y-6 mt-[165px]">
                <h3 className="text-2xl font-bold">Let's Work Together</h3>
                <p className="text-muted-foreground max-w-md">
                  Prefer to reach out quickly? Click below to email me directly
                  or drop me a message on LinkedIn. I’ll respond as soon as
                  possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-primary hover:opacity-90 text-white border-0 py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300"
                  >
                    <a href="mailto:krrishbalana@gmail.com">Email Me</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-gradient-primary hover:opacity-90 text-white border-0 py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300 hover:text-white"
                  >
                    <a
                      href="www.linkedin.com/in/krrishbalana"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
