import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Award } from 'lucide-react';
import { link } from 'fs';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Accenture Nordics – Forage Internship",
      company: "Accenture",
      location: "Remote",
      period: "May 2025",
      type: "Virtual Internship",
      description: "Software engineering simulation focused on architecture, security, testing, and user experience optimization.",
      achievements: [
        "Completed full software development lifecycle simulation",
        "Implemented security best practices in web applications",
        "Performed comprehensive testing and debugging",
        "Optimized user experience through data-driven design"
      ],
      technologies: ["Software Architecture", "Security", "Testing", "UX Design"],
      status: "upcoming"
    },
    {
      title: "Web Development Summer Training",
      company: "Chandigarh University",
      location: "Mohali, Punjab",
      period: "Aug 2024",
      type: "Training Program",
      description: "Intensive summer training program focused on modern web development technologies and best practices.",
      achievements: [
        "Built responsive web applications using HTML, CSS, JavaScript",
        "Learned PHP for server-side development",
        "Implemented database integration with MySQL",
        "Followed industry best practices and coding standards"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      status: "completed"
    }
  ];

  const certifications = [
    { name: "MERN Full Stack", provider: "30DaysCoding", year: "2024", link: "https://drive.google.com/file/d/1aULOJlO4n2CauW3SCaby-cOH6Nda0LfQ/view?usp=sharing" },
    { name: "Python Crash Course", provider: "Google Coursera", year: "2024", link: "https://drive.google.com/file/d/15KiSHzmeBourBVPZjLBBvBOc9f9YMSph/view?usp=sharing" },
    { name: "SQL", provider: "Coursera", year: "2024", link: "https://drive.google.com/file/d/1tsdyXiGDsPVfCXr15wuRcGbgZAp4gIYc/view?usp=sharing" },
    { name: "H2O with Python", provider: "H2O.ai", year: "2024", link: "https://drive.google.com/file/d/1Yc6InAFO_pO_Pt_lIno-EVp01T_Y2MjY/view?usp=sharing" },
    { name: "Accenture Software Engineering Virtual Experience", provider: "Forage", year: "2024", link: "https://drive.google.com/file/d/1WmHNKT9zjtcJtML6noSi-nHwtlUs3qGh/view?usp=sharing" }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
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
              Experience & <span className="text-gradient">Growth</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey, internships, and continuous learning through various programs and certifications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8">
                Professional Experience
              </motion.h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-32 bg-border" />
                    )}
                    
                    <Card className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300 relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg" />
                      
                      <div className="ml-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <Building className="h-4 w-4 mr-2" />
                              <span className="mr-4">{exp.company}</span>
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <div className="flex flex-col sm:items-end">
                            <Badge 
                              variant={exp.status === 'upcoming' ? 'default' : 'secondary'}
                              className="mb-2"
                            >
                              <a href="https://drive.google.com/file/d/1WmHNKT9zjtcJtML6noSi-nHwtlUs3qGh/view?usp=sharing" target='block'>{exp.type}</a>
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.period}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h5 className="text-sm font-medium mb-2">Key Achievements</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-1">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8">
                Certifications
              </motion.h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Card className="p-4 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <Award className="h-4 w-4 text-accent mr-2" />
                            <h4 className="font-medium text-sm group-hover:text-accent transition-colors">
                              <a href={cert.link} target='block'>{cert.name}</a>
                            </h4>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">
                            {cert.provider}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {cert.year}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Stats */}
              <motion.div variants={itemVariants} className="mt-8">
                <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">250+</div>
                    <div className="text-sm text-muted-foreground mb-4">LeetCode Problems Solved</div>
                    <Badge variant="outline" className="border-accent text-accent">
                      Top Problem Solver
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;