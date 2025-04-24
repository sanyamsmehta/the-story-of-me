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
    title: "path-to-market",
    description: "Based on startup attributes like:\n\nStage (Idea, MVP, Revenue, etc.)\n- Funding level\n- Team size\n- Sector (Tech, Healthcare, etc.)\nThe model predicts which digital strategy (e.g., SEO, Paid Ads, Influencer Marketing) works best for that startup.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook", "Decision Trees"],
    github: "https://github.com/sanyamsmehta/path-to-market-startup"
  },
  {
    title: "heads-up",
    description: "Heads up is an IoT project that prevents drowsy drivers from running into accidents. It conducts real-time facial recognition to compute if the driver is about to fall asleep and on given conditions, triggers an immediate phone call on the users cell phone, and SOS texts driver's emergency contacts. It offers OS independence and Device Independence and renders over 96% accuracy.",
    technologies: ["Python", "OpenCV", "Cmake", "Dlib", "NumPy", "SciPy", "Twilio"],
    github: "https://github.com/sanyamsmehta/heads-up"
  },
  {
    title: "infra-as-a-product",
    description: "This project demonstrates a fully automated infrastructure setup on AWS using Pulumi (Python runtime). The goal was to create a scalable, production-grade deployment pipeline that provisions all necessary cloud resources dynamically—ideal for spinning up ephemeral environments, internal dev tooling, or lightweight production workloads.",
    technologies: ["Python", "Pulumi", "AWS ECS", "Fargate", "JSON", "IAM", "VPC"],
    github: "https://github.com/sanyamsmehta/infra-as-a-product"
  },
  {
    title: "plagiar-eyes",
    description: "This project was designed to detect cross-document plagiarism during the COVID pandemic to help my college monitor online assignment submissions. The application parses every single text document present within a particular folder and highlights any plagiarized material within each document. It also renders statistics like the percentage of plagiarism detected and which documents contain similar plagiarized material.",
    technologies: ["Python", "NLP", "nltk", "tkinter", "docx"],
    github: "https://github.com/sanyamsmehta/plagiar-eyes"
  },
  {
    title: "rx-flow",
    description: "This Pharmaceutical Desktop Application was built during the pandemic to help small stores simplify managing customer bases, billing, and inventory tracking.",
    technologies: ["Java8", "netbeans", "RestAPIs", "SpringBoot", "MySQL", "Junit", "AngularJS"],
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
