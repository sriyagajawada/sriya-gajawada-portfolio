import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ava Desktop Assistant",
      description: "Built a voice & text-controlled AI assistant that performs tasks like launching apps, sending messages, reading weather/news, and detecting objects in real-time.",
      technologies: ["Python", "Kivy", "AI", "Voice Recognition"],
      category: "AI & Machine Learning"
    },
    {
      title: "Speech Emotion Recognition",
      description: "Developed a system to classify emotions from speech using audio feature extraction and neural networks.",
      technologies: ["Python", "TensorFlow", "Librosa", "Machine Learning"],
      category: "AI & Machine Learning"
    },
    {
      title: "Hospital Management Website",
      description: "Designed a comprehensive system to manage patient registration, appointments, and staff with secure database integration.",
      technologies: ["HTML", "CSS", "PHP", "XAMPP", "MySQL"],
      category: "Web Development"
    },
    {
      title: "Automated Attendance System",
      description: "Real-time face recognition system to auto-track attendance, reducing manual intervention and improving accuracy.",
      technologies: ["Python", "OpenCV", "Face Recognition", "Computer Vision"],
      category: "Computer Vision"
    },
    {
      title: "Object Detection System",
      description: "Created an accurate object detection application enhancing surveillance capabilities using YOLOv5.",
      technologies: ["Python", "YOLOv5", "OpenCV", "Computer Vision"],
      category: "Computer Vision"
    },
    {
      title: "Spotify Clone with Chat",
      description: "Developed a Spotify-like music application with real-time chat features and streaming functionality.",
      technologies: ["MongoDB", "Node.js", "React", "JavaScript", "Socket.io"],
      category: "Full Stack"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI & Machine Learning":
        return "bg-primary/20 text-primary border-primary/30";
      case "Web Development":
        return "bg-accent/20 text-accent border-accent/30";
      case "Computer Vision":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Full Stack":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my portfolio of innovative projects spanning AI, web development, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card hover:bg-white/5 transition-all duration-300 hover:scale-105 group fade-in border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-display font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-background/50 border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;