import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "SQL"],
      icon: "💻",
      color: "primary"
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "Spring MVC", "Hibernate"],
      icon: "🚀",
      color: "secondary"
    },
    {
      title: "Tools & Tech",
      skills: ["Eclipse", "MySQL", "Postman", "Git"],
      icon: "🛠️",
      color: "accent"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration"],
      icon: "🤝",
      color: "primary"
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="content-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 animate-fade-in-up">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit for building robust software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card-elevated border-border/50 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`
                      px-3 py-1 text-sm font-medium transition-smooth
                      ${category.color === 'primary' ? 'bg-primary/20 text-primary hover:bg-primary/30' : ''}
                      ${category.color === 'secondary' ? 'bg-secondary/20 text-secondary hover:bg-secondary/30' : ''}
                      ${category.color === 'accent' ? 'bg-accent/20 text-accent hover:bg-accent/30' : ''}
                    `}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;