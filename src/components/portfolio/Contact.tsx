import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srivastava.raj2504@gmail.com",
      href: "mailto:srivastava.raj2504@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7266846164",
      href: "tel:+917266846164",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, India",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/raj-srivastava-b51053207",
      description: "Connect professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rajsrivastava254",
      description: "View my code"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/thenameisraj/",
      description: "See my solutions"
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="content-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 animate-fade-in-up">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's connect and discuss opportunities to work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={contact.label} className="p-4 bg-card-elevated border-border/50 hover-lift">
                      <a 
                        href={contact.href}
                        className="flex items-center gap-4 text-decoration-none"
                      >
                        <div className={`
                          p-3 rounded-lg
                          ${contact.color === 'primary' ? 'bg-primary/20 text-primary' : ''}
                          ${contact.color === 'secondary' ? 'bg-secondary/20 text-secondary' : ''}
                          ${contact.color === 'accent' ? 'bg-accent/20 text-accent' : ''}
                        `}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-text-primary font-medium">{contact.label}</p>
                          <p className="text-text-secondary text-sm">{contact.value}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Connect Online</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Card key={social.label} className="p-4 bg-card-elevated border-border/50 hover-lift">
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-decoration-none"
                      >
                        <div className="p-3 rounded-lg bg-primary/20 text-primary">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-text-primary font-medium">{social.label}</p>
                          <p className="text-text-secondary text-sm">{social.description}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <Card className="p-8 bg-gradient-surface border-border/50 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-4">Ready to Collaborate?</h3>
                <p className="text-text-secondary leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to contribute to meaningful software development initiatives.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth w-full"
                  asChild
                >
                  <a href="mailto:srivastava.raj2504@gmail.com">
                    <Send className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>

                <div className="text-center">
                  <p className="text-text-muted text-sm">
                    Or reach out through any of the platforms above
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-border/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">2+</p>
                    <p className="text-text-muted text-sm">Years Learning</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">5+</p>
                    <p className="text-text-muted text-sm">Technologies</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">2</p>
                    <p className="text-text-muted text-sm">Projects</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;