import { motion } from "framer-motion";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial opacity-20 animate-float" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-lg text-muted-foreground">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-gradient">Krish</span>
          <br />
          <span className="text-foreground">Balana</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Full Stack Web Developer & Computer Science Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting modern web experiences with React,Tailwind CSS and
          cutting-edge technologies. Passionate about clean code, user
          experience, and solving complex problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a target="blank" href="https://github.com/Krrishbalana">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white border-0 px-8 py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>

          <a
            target="blank"
            href="https://drive.google.com/file/d/1kctXEUox5qOk8ujwSQQQmms8f3fKQONV/view?usp=drive_link"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:text-white hover:bg-blue-500 px-8 py-6 text-lg transition-all duration-300"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-2xl mx-auto"
        >
          {[
            { number: "250+", label: "LeetCode Problems" },
            { number: "10+", label: "Projects Built" },
            { number: "5+", label: "Certifications" },
            { number: "1000+", label: "Lines of Code Written" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
