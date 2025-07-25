import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-lg font-display font-bold gradient-text mb-1">
              Sriya Gajawada
            </div>
            <p className="text-sm text-muted-foreground">
              Software Engineer passionate about AI and innovation
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/sriya-gajawada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sriyagajawada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;