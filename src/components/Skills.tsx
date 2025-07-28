import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch,
  Zap,
  Palette,
  Brain
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      color: "electric-blue"
    },
    
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["C++", "JavaScript", "TypeScript", "SQL"],
      color: "electric-blue-light"
    },
    {
      title: "Tools & Technologies",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite"],
      color: "electric-blue"
    },
    {
      title: "Problem Solving",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Data Structures", "Algorithms", "System Design", "DSA (C++)", "LeetCode"],
      color: "electric-blue-dark"
    },
    {
      title: "Design & UX",
      icon: <Palette className="h-6 w-6" />,
      skills: ["UI/UX Design", "Figma", "Responsive Design", "Animation using Framer Motion", "Prototyping"],
      color: "electric-blue-light"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-card/30">
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
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise in software development.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:border-accent/50">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-accent/10 rounded-lg mr-4 group-hover:bg-accent/20 transition-colors">
                      <div className="text-accent">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={skillVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="w-full justify-start px-3 py-2 text-sm hover:bg-accent/10 transition-colors cursor-default"
                        >
                          <Zap className="h-3 w-3 mr-2 text-accent" />
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* LeetCode Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-card to-card/50 border-border shadow-elevated">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Problem Solving Stats</h3>
                <p className="text-muted-foreground">My journey in competitive programming and algorithmic thinking</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "LeetCode Problems", value: "250+", color: "text-green-400" },
                  { label: "Contest Rating", value: "1500+", color: "text-blue-400" },
                  { label: "Lines of Code Written", value: "1000+", color: "text-purple-400" },
                  { label: "Projects Completed", value: "10+", color: "text-orange-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;