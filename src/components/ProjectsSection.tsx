
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
    title: "Pixel Streaming Cloud Infrastructure",
    description: "Led the development of cloud services for Unreal Engine's Pixel Streaming, enabling browser-based 3D experiences without downloads.",
    technologies: ["AWS", "Docker", "WebRTC", "Node.js", "Redis"],
    github: "https://github.com/EpicGames/PixelStreamingInfrastructure"
  },
  {
    title: "Humanitarian Data Collection System",
    description: "Built resilient data collection systems for humanitarian operations in conflict zones, supporting 3M+ beneficiaries.",
    technologies: ["React", "Node.js", "MongoDB", "Progressive Web Apps"],
    liveDemo: "https://datacollect.unfpa.org"
  },
  {
    title: "Real-time Monitoring Dashboard",
    description: "Created analytical dashboards to monitor humanitarian assistance for stakeholders across 15+ organizations.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL", "Socket.io"],
    github: "https://github.com/sanyamsmehta/monitoring-dashboard"
  },
  {
    title: "School ERP System",
    description: "Developed a comprehensive ERP system for schools that manages attendance, grades, and administrative tasks.",
    technologies: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    github: "https://github.com/sanyamsmehta/school-erp"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted">
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
