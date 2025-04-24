import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "no-stress.ai",
    description: "Delay is the new Downtime. NoStress is an AI tool that automates performance testing. Users simply provide a repository URL and a curated test-case. The tool extracts APIs, develops user-simulations and implements the test cases. Testers can also communicate with the tool real time and dynamically modify test cases and gain performance insights. Post execution, the tool renders a HTML report displaying API and Microservice Performance based on several metrics.",
    technologies: ["Java", "React", "Machine Learning", "Grafana", "JMeter", "Microservices", "Spring Boot", "Prometheus"],
    github: "https://github.com/sanyamsmehta/nostress.ai"
  },
  {
    title: "look-loud.ai",
    description: "LookLoud.ai is voice-activated assistance technology, powered by GPT-4 Vision, and designed to make e-commerce accessible to everyone. Users can navigate, select, and buy products using simple voice commands.",
    technologies: ["HTML", "CSS", "JS", "Chrome Extension APIs", "Web Speech API", "REST APIs", "Heroku", "Flask", "ImgBB", "Postman"],
    github: "https://github.com/sanyamsmehta/lookloud.ai"
  },
  {
    title: "sayitright-textnorm-ml",
    description: "sayitright-textnorm-ml is a machine learning-powered text normalization engine designed to transform raw written expressions into fluent, human-readable spoken forms. Built for downstream applications in Text-to-Speech (TTS), Automatic Speech Recognition (ASR), and other NLP tasks, LangMorph tackles the complexities of converting tokens like 12:47 to \"twelve forty-seven\" or $3.16 to \"three dollars, sixteen cents\" with high accuracy and linguistic finesse.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter", "FastText", "T5 Transformer", "CRF", "AdaBoost", "kNN", "NLP", "Machine Learning"],
    github: "https://github.com/sanyamsmehta/sayitright-textnorm-ml"
  },
  {
    title: "Path to Market",
    description: "Strategic toolkit for startups to validate market opportunities and develop go-to-market strategies.",
    technologies: ["React", "Node.js", "MongoDB", "Analytics"],
    github: "https://github.com/sanyamsmehta/path-to-market-startup"
  },
  {
    title: "HeadsUp",
    description: "Real-time collaboration and project management tool for distributed teams.",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/sanyamsmehta/headsup"
  },
  {
    title: "Infrastructure as Product",
    description: "Framework for treating infrastructure development with product management principles.",
    technologies: ["Terraform", "AWS", "Docker", "Kubernetes"],
    github: "https://github.com/sanyamsmehta/infrastructure-as-product"
  },
  {
    title: "Plagiar-Eyes",
    description: "AI-powered plagiarism detection system for academic institutions.",
    technologies: ["Python", "NLP", "Machine Learning", "FastAPI"],
    github: "https://github.com/sanyamsmehta/plagiar-eyes"
  },
  {
    title: "RX Flow",
    description: "Streamlined prescription management system for healthcare providers.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    github: "https://github.com/sanyamsmehta/rx-flow"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover border border-border relative"
            >
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 flex items-center gap-1 text-foreground hover:text-gray-600 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-xs">Code</span>
                </a>
              )}
              {project.image && (
                <div className="h-48 bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-muted text-foreground text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-gray-600 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
