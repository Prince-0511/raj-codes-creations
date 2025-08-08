import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="content-width relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Name & Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Raj</span>{" "}
            <span className="text-text-primary">Srivastava</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-text-secondary mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Software Engineer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Motivated and detail-oriented Software Engineer with internship experience in developing 
            applications using Java, Spring Boot, and MySQL. Committed to writing clean, maintainable 
            code and contributing to impactful software projects.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-text-secondary">
              <Mail className="w-5 h-5 text-primary" />
              <span>srivastava.raj2504@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <Phone className="w-5 h-5 text-primary" />
              <span>7266846164</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Ghaziabad, India</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth px-8 py-4 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary p-4"
                asChild
              >
                <a href="https://linkedin.com/in/raj-srivastava-b51053207" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary p-4"
                asChild
              >
                <a href="https://github.com/rajsrivastava254" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary p-4"
                asChild
              >
                <a href="https://leetcode.com/thenameisraj/" target="_blank" rel="noopener noreferrer">
                  <Code className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;