
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
    title: "Nostress.ai",
    description: "A ground-up startup that automates performance testing through AI. Users can generate tests by simply providing a repo URL and test prompt, with results visualized in HTML reports. The platform enables real-time collaboration between testers, providing insights on performance, bottlenecks, and allows dynamic test modifications during execution.",
    technologies: ["Java", "React", "Machine Learning", "Grafana", "JMeter", "Microservices", "Spring Boot", "Prometheus"],
    github: "https://github.com/sanyamsmehta/nostress.ai"
  },
  {
    title: "LookLoud.ai",
    description: "AI-driven fashion recommendation system that helps users discover and style outfits based on their preferences.",
    technologies: ["TensorFlow", "Computer Vision", "React", "AWS"],
    github: "https://github.com/sanyamsmehta/lookloud.ai"
  },
  {
    title: "SayItRight Text Normalization",
    description: "Machine learning model for text normalization to improve speech synthesis quality and natural language processing.",
    technologies: ["Python", "NLP", "Machine Learning", "TensorFlow"],
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
    <section id="projects" className="section-padding light-section">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center">
          Highlights from my professional and personal projects
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover border border-border"
            >
              {project.image && (
                <div className="h-48 bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-gray-600 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
