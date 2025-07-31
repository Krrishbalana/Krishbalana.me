import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "AI Resume Analyzer",
      description: "Tracks DSA topics, project progress, flashcards, and GitHub-like calendar for coding practice.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js, React Router, zustand"],
      features: ["Upload resume as PDF", "Gets AI-powered feedback on resume tailored to job title & description", "Smart ATS score and improvement tips", "Modern responsive UI"],
      demoLink: "https://ai-resume-analyzer-snowy.vercel.app/auth?next=/",
      githubLink: "https://github.com/Krrishbalana/AI-Resume-Analyzer",
      category: "Productivity"
    },
    {
      title: "DSA Visualizer",
      description: "Interactive simulation of algorithms (sorting, searching, trees, pathfinding) with speed controls and animations.",
      technologies: ["React.js", "JavaScript", "CSS3", "D3.js"],
      features: ["Algorithm Visualization", "Speed Controls", "Interactive UI", "Multiple Algorithms"],
      demoLink: "#",
      githubLink: "https://github.com/Krrishbalana/DSA-Visualizer",
      category: "Educational"
    },
    {
      title: "AI Career Path Generator",
      description: "MERN-based personalized learning planner with OpenAI API integration and authentication.",
      technologies: ["MERN Stack", "OpenAI API", "JWT", "Tailwind CSS"],
      features: ["AI Integration", "User Authentication", "Personalized Plans", "Progress Tracking"],
      demoLink: "#",
      githubLink: "#",
      category: "AI/ML"
    }
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
    <section id="projects" className="section-padding">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and passion projects that demonstrate my skills in full-stack development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:border-accent/50">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <a target='blank' href={project.githubLink}>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        </a>
                        <a target='blank' href={project.demoLink}>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        </a>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-accent transition-colors"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:border-accent transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* More Projects Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-card px-8 py-4 text-lg group"
            >
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;