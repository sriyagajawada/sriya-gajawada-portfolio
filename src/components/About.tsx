const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="glass-card p-8 sm:p-12 fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold mb-4">
                Passionate Software Engineer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a motivated software engineer with a deep passion for artificial intelligence, 
                web development, and real-time systems. My journey in technology has been driven 
                by curiosity and the desire to create meaningful solutions that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a proven track record in developing AI assistants, emotion recognition models, 
                full-stack applications, and automation tools, I bring both technical expertise 
                and creative problem-solving to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I actively participate in hackathons, innovation challenges, and internships, 
                constantly learning and growing in the ever-evolving field of technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center hover:bg-white/5 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="glass-card p-6 text-center hover:bg-white/5 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">8.7</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="glass-card p-6 text-center hover:bg-white/5 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="glass-card p-6 text-center hover:bg-white/5 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;