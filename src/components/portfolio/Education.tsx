import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech",
      field: "Computer Science and Engineering",
      institution: "ABES Institute of Technology",
      location: "Ghaziabad, India",
      duration: "Nov 2020 – Jun 2024",
      grade: "CGPA: 7.57",
      type: "Bachelor's Degree"
    },
    {
      degree: "12th (CBSE)",
      field: "Science",
      institution: "Sun International Sr. Sec. School",
      location: "Sultanpur, India",
      duration: "Apr 2019 – Apr 2020",
      grade: "82.2%",
      type: "Higher Secondary"
    }
  ];

  const courses = [
    {
      title: "Java with DSA",
      provider: "PWSkills",
      description: "Focused on data structures, problem-solving, and algorithm implementation",
      type: "Technical Course"
    },
    {
      title: "Developing Soft Skills and Personality",
      provider: "NPTEL",
      description: "Professional development and communication skills enhancement",
      type: "Soft Skills"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="content-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 animate-fade-in-up">
            Education & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <GraduationCap className="w-7 h-7 text-primary" />
            Formal Education
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="p-6 bg-gradient-surface border-border/50 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-2">{edu.degree}</h4>
                    <p className="text-text-secondary font-medium">{edu.field}</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                    {edu.type}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{edu.institution}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-text-secondary">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">{edu.grade}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses & Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Award className="w-7 h-7 text-secondary" />
            Courses & Certifications
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={course.title}
                className="p-6 bg-card-elevated border-border/50 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-2">{course.title}</h4>
                    <p className="text-primary font-medium">{course.provider}</p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${course.type === 'Technical Course' ? 'border-primary/30 text-primary' : 'border-accent/30 text-accent'}
                    `}
                  >
                    {course.type}
                  </Badge>
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed">{course.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;