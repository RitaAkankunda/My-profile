
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "GitHub Portfolio",
      description: "Explore my collection of projects and contributions on GitHub, showcasing my journey in software development.",
      tech: ["JavaScript", "Python", "React", "Git"],
      link: "https://github.com/RitaAkankunda"
    },
    {
      title: "Web Development Projects",
      description: "Various web applications built with modern technologies, focusing on user experience and functionality.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://github.com/RitaAkankunda"
    },
    {
      title: "Programming Challenges",
      description: "Solutions to algorithmic problems and coding challenges, demonstrating problem-solving skills.",
      tech: ["Python", "Algorithms", "Data Structures"],
      link: "https://github.com/RitaAkankunda"
    }
  ];

  const skills = [
    { name: "JavaScript", icon: Code, level: 85 },
    { name: "Python", icon: Code, level: 80 },
    { name: "React", icon: Globe, level: 75 },
    { name: "HTML/CSS", icon: Globe, level: 90 },
    { name: "Git", icon: Database, level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 p-1 shadow-lg shadow-pink-500/25">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">RA</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Rita Akankunda
            </h1>
            <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-pink-300 via-cyan-300 to-purple-300 bg-clip-text mb-8">
              Computer Science Student & Aspiring Developer
            </p>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and innovation, I'm on a journey to master the art of software development. 
            Currently expanding my skills in web development, algorithms, and modern programming languages.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-pink-600 via-blue-600 to-cyan-600 hover:from-pink-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-3 shadow-lg shadow-pink-500/25">
              <a href="https://github.com/RitaAkankunda" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="border-pink-400 text-pink-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white px-8 py-3 hover:border-transparent shadow-lg shadow-pink-500/10">
              <a href="https://www.linkedin.com/in/rita-akankunda-733563350" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-slate-800/50 backdrop-blur-sm border-t border-pink-500/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a dedicated Computer Science student with a passion for creating innovative solutions 
                through code. My journey in technology began with curiosity and has evolved into a deep 
                commitment to learning and building meaningful projects.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I enjoy tackling complex problems, learning new technologies, and collaborating with 
                others to bring ideas to life. My goal is to contribute to the tech industry while 
                continuously growing as a developer.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-800/20 via-blue-800/30 to-teal-800/30 p-6 rounded-lg border border-pink-500/20 shadow-lg shadow-pink-500/5">
                <h3 className="text-xl font-semibold text-pink-300 mb-2">Education</h3>
                <p className="text-gray-300">Computer Science Student</p>
                <p className="text-gray-400 text-sm">Focused on software development and algorithms</p>
              </div>
              <div className="bg-gradient-to-r from-purple-800/20 via-teal-800/30 to-emerald-800/30 p-6 rounded-lg border border-purple-500/20 shadow-lg shadow-purple-500/5">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Interests</h3>
                <p className="text-gray-300">Web Development, Problem Solving, Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 border-pink-500/30 hover:from-slate-700/80 hover:to-pink-900/40 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <skill.icon className="h-8 w-8 text-pink-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-1000 shadow-sm shadow-pink-500/50"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{skill.level}% proficiency</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-slate-800/50 backdrop-blur-sm border-t border-pink-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/80 to-teal-900/40 border-pink-500/20 hover:from-slate-700/80 hover:to-pink-900/40 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/5">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 text-pink-300 rounded-full text-sm border border-pink-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full border-pink-400 text-pink-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-lg shadow-pink-500/10">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always interested in connecting with fellow developers, students, and tech enthusiasts.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 via-blue-600 to-cyan-600 hover:from-pink-700 hover:via-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-pink-500/25">
              <a href="https://github.com/RitaAkankunda" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-pink-400 text-pink-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-lg shadow-pink-500/10">
              <a href="https://www.linkedin.com/in/rita-akankunda-733563350" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent shadow-lg shadow-purple-500/10">
              <a href="mailto:rita.akankunda@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-900 text-center border-t border-pink-500/20">
        <p className="text-gray-400">
          © 2024 Rita Akankunda. Built with passion and modern web technologies.
        </p>
      </footer>
    </div>
  );
};

export default Index;
