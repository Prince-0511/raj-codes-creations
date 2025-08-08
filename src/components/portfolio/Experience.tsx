import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Software Intern",
    company: "Devstringx Technology",
    location: "Noida, India",
    duration: "Oct 2024 – Jul 2025",
    responsibilities: [
      "Assisted in testing web and mobile applications across multiple platforms",
      "Developed and executed test cases for functional and regression testing",
      "Automated test scripts using Selenium and Appium for web and mobile apps"
    ]
  };

  return (
    <section className="section-padding bg-background">
      <div className="content-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 animate-fade-in-up">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building expertise through hands-on software development and testing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-surface border-border/50 hover-lift animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Company Info */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-text-primary">{experience.company}</h3>
                </div>
                
                <div className="space-y-3">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm px-3 py-1">
                    {experience.title}
                  </Badge>
                  
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-text-secondary">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Responsibilities */}
              <div className="lg:w-2/3">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-text-secondary animate-fade-in-left"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;