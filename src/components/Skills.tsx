import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Python", "Java", "HTML", "CSS", "SQL"],
      color: "primary"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["VS Code", "PyCharm", "MongoDB", "MySQL", "Tableau", "XAMPP"],
      color: "accent"
    },
    {
      title: "Specialized Areas",
      icon: Brain,
      skills: ["Machine Learning", "Power BI", "Computer Vision", "AI Development"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          icon: "text-primary bg-primary/20",
          badge: "bg-primary/20 text-primary border-primary/30"
        };
      case "accent":
        return {
          icon: "text-accent bg-accent/20",
          badge: "bg-accent/20 text-accent border-accent/30"
        };
      case "orange":
        return {
          icon: "text-orange-400 bg-orange-500/20",
          badge: "bg-orange-500/20 text-orange-400 border-orange-500/30"
        };
      default:
        return {
          icon: "text-muted-foreground bg-muted/20",
          badge: "bg-muted/20 text-muted-foreground border-muted/30"
        };
    }
  };

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building innovative software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <Card 
                key={index} 
                className="glass-card hover:bg-white/5 transition-all duration-300 hover:scale-105 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${colors.icon} flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-display font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className={`${colors.badge} hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16 fade-in">
          <h3 className="text-2xl font-display font-semibold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "Python", level: 90 },
              { skill: "Machine Learning", level: 85 },
              { skill: "Web Development", level: 80 },
              { skill: "Computer Vision", level: 85 },
              { skill: "Database Management", level: 75 },
              { skill: "AI Development", level: 80 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;