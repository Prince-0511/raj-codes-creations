import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Application",
      description: "Built a secure and scalable e-commerce backend system with comprehensive product catalog management and optimized database communication.",
      duration: "Feb 2025 – Mar 2025",
      technologies: ["Java", "Spring Boot", "Spring MVC", "H2", "Maven"],
      features: [
        "Secure and scalable backend architecture",
        "Product catalog APIs with CRUD functionality",
        "Advanced error handling and validation",
        "Spring Data JPA for optimized database operations"
      ],
      type: "Backend System"
    },
    {
      title: "SecurePass",
      description: "Engineered a Java-based password generator optimizing for strong and random passwords with customizable length and complexity settings.",
      duration: "Jul 2023 – Aug 2023",
      technologies: ["Java Programming"],
      features: [
        "Customizable password length and complexity",
        "Includes uppercase, lowercase, numerals, and special symbols",
        "Strong randomization algorithms",
        "User-friendly configuration options"
      ],
      type: "Security Tool"
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="content-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 animate-fade-in-up">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Showcasing practical applications of software engineering principles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-8 bg-card-elevated border-border/50 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                    <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-text-muted mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.duration}</span>
                </div>
                
                <p className="text-text-secondary leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;