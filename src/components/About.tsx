import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <section id="about" className="section-padding bg-card/30">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a strong foundation in computer science and a love for creating innovative web solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Card */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-glow">
                    <img className='rounded-full' src="https://avatars.githubusercontent.com/u/168128787?v=4" alt="" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Krish Balana</h3>
                  <p className="text-lg text-muted-foreground mb-4">Full Stack Web Developer</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">C++</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-5 w-5 mr-3 text-accent" />
                    <span>krrishbalana@gmail.com</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="h-5 w-5 mr-3 text-accent" />
                    <span>+91-8690909867</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-3 text-accent" />
                    <span>Anupgarh, Rajasthan, India</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <Card className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium">B.E. in Computer Science</h5>
                        <p className="text-muted-foreground">Chandigarh University</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>2021 - 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Bio */}
              <Card className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">About Me</h4>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Full Stack Web Developer and Computer Science Engineering student 
                    with a strong foundation in modern web technologies and problem-solving.
                  </p>
                  <p>
                    My journey in programming started with C++ and has evolved to include full-stack 
                    development with React.js, Node.js, and MongoDB. I love creating interactive 
                    applications that solve real-world problems.
                  </p>
                  <p>
                    When I'm not coding, you'll find me solving algorithmic challenges on LeetCode, 
                    exploring new technologies, or working on personal projects that push the 
                    boundaries of what's possible on the web.
                  </p>
                </div>
              </Card>

              {/* Current Focus */}
              <Card className="p-6 bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Data Structures & Algorithms</span>
                    <Badge variant="outline">250+ Problems</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Full Stack Development</span>
                    <Badge variant="outline">MERN Stack</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">System Design</span>
                    <Badge variant="outline">Learning</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;