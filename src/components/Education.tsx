import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech – Information Technology",
      institution: "Bhojreddy Engineering College for Women",
      duration: "2022 – 2026",
      grade: "CGPA: 8.7",
      status: "In Progress"
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      duration: "2020 – 2022",
      grade: "Percentage: 98%",
      status: "Completed"
    },
    {
      degree: "Class X – SSC",
      institution: "Slate The School",
      duration: "2020",
      grade: "GPA: 10",
      status: "Completed"
    }
  ];

  const achievements = [
    {
      title: "Runner-up – Project Expo",
      organization: "Vel Tech University",
      year: "2025",
      icon: Award
    },
    {
      title: "Grade 'O' (Outstanding) – 85% in NCET",
      organization: "MyAnatomy",
      year: "2024",
      icon: Award
    },
    {
      title: "Runner-up – Throwball Tournament",
      organization: "Silver Jubilee Sports Fest",
      year: "2022",
      icon: Award
    }
  ];

  const participation = [
    "Smart India Hackathon (SIH) – Indian Diaspora Project",
    "AI Dashboards using Power BI – Skill Nation",
    "IBM + CSRBOX Micro-Internship – Data Science & AI"
  ];

  const certifications = [
    "Data Science using Python – Brainovision",
    "Machine Learning – Simplilearn",
    "AI Internship – IBM SkillsBuild & CSRBOX",
    "Prompt Engineering for Generative AI – LinkedIn Learning",
    "UI/UX Beginner Course – Great Learning"
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8 fade-in">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass-card hover:bg-white/5 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-display">{edu.degree}</CardTitle>
                      <Badge variant={edu.status === 'In Progress' ? 'default' : 'secondary'}>
                        {edu.status}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{edu.duration}</span>
                      <span className="font-semibold text-accent">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8 fade-in">
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-card hover:bg-white/5 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="glass-card p-2 mt-1">
                        <achievement.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm">{achievement.organization}</p>
                        <Badge variant="outline" className="mt-2">
                          {achievement.year}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Participation & Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="fade-in">
            <h3 className="text-2xl font-display font-semibold mb-6">Participation</h3>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {participation.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in">
            <h3 className="text-2xl font-display font-semibold mb-6">Certifications</h3>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;