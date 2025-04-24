import React, { useState } from "react";
import { Github, ExternalLink, Award } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Project {
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
  deck?: string;
  image?: string;
  awards?: string;
}

const projects: Project[] = [
  {
    title: "no-stress.ai",
    description: "Delay is the new Downtime. NoStress is an AI tool that automates performance testing. Users simply provide a repository URL and a curated test-case. The tool extracts APIs, develops user-simulations and implements the test cases. Testers can also communicate with the tool real time and dynamically modify test cases and gain performance insights. Post execution, the tool renders a HTML report displaying API and Microservice Performance based on several metrics.",
    technologies: ["Java", "React", "Machine Learning", "Grafana", "JMeter", "Microservices", "Spring Boot", "Prometheus"],
    github: "https://github.com/sanyamsmehta/nostress.ai",
    deck: "https://docs.google.com/presentation/d/1_8rik_me0PfqLQHCg06xfT_Z7bmIZAhDn4p7McBuxrk/edit#slide=id.g31af66f6314_0_360"
  },
  {
    title: "look-loud.ai",
    description: "LookLoud.ai is voice-activated assistance technology, powered by GPT-4 Vision, and designed to make e-commerce accessible to everyone. Users can navigate, select, and buy products using simple voice commands.",
    technologies: ["HTML", "CSS", "JS", "Chrome Extension APIs", "Web Speech API", "REST APIs", "Heroku", "Flask", "ImgBB", "Postman"],
    github: "https://github.com/sanyamsmehta/lookloud.ai",
    awards: "🏆 1st Place DubHacks, 2nd Place EduHacks"
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
  },
  {
    title: "The Grow Card",
    description: "Solutioned a credit card for young adults ($62.5B SOM) addressing Credit Debt faced by 1.6M+ Americans yearly. Derived MVP features, wireframes, monetization, GTM strategies targeting onboarding 20K active users in a year.",
    deck: "https://drive.google.com/file/d/1SGihjJFtgDeYURBDvC5tUdxcjVXALF_A/view",
    awards: "🏆 3rd Place - Smartsheet Product Competition"
  },
  {
    title: "Workday Transformation Strategy",
    description: "Detailed a current state analysis to strategize 3 OKRs, prioritize 40+ features enabling a $430M 3-year roadmap. Studied company financials over the decade to derive nearly accurate cost estimates and phased budget ask.",
    deck: "https://drive.google.com/drive/folders/1b_cGIuqWa2hRNHWvlufxRz4fNLiCm71J"
  },
  {
    title: "Starbucks Product Strategy",
    description: "Evaluated SWOT, KPIs, and competitors to devise a Northstar metric tracking company expansion and efficiency. Scoped a future state targeting features that translated to $75M savings on operations and 55K+ store footprints.",
    deck: "https://drive.google.com/file/d/1rrw7GAWGDqoW-A61KBF74_4ZhNwNhe48/view"
  },
  {
    title: "Host-IQ",
    description: "Host-IQ is an AI-powered analytics platform designed for Airbnb hosts to transform raw guest feedback and property data into actionable insights. By automating sentiment analysis, trend detection, and personalized recommendations, it addresses key host pain points—ranging from service inconsistency to reliance on costly third-party tools. The tool leverages Agile methodologies and NLP-driven intelligence to optimize guest satisfaction, reduce complaints by 20%, and boost bookings by 10%. With a projected annual value impact exceeding $2M in savings and revenue lift, Host-IQ positions Airbnb to lead in data-driven hospitality innovation.",
    deck: "https://docs.google.com/presentation/d/1XEpscyg0FRLPu-BkxSqvb3wcKv0PLWUZ/edit?usp=sharing&ouid=112722355947732076323&rtpof=true&sd=true"
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    switch (filter) {
      case "product":
        return project.deck !== undefined;
      case "software":
        return project.github !== undefined;
      default:
        return true;
    }
  });

  return (
    <section id="projects" className="section-padding bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">Projects</h2>
        
        <div className="flex justify-center mb-8">
          <ToggleGroup type="single" value={filter} onValueChange={(value) => setFilter(value || "all")}>
            <ToggleGroupItem value="all" variant="outline">
              All Projects
            </ToggleGroupItem>
            <ToggleGroupItem value="product" variant="outline">
              Product Projects
            </ToggleGroupItem>
            <ToggleGroupItem value="software" variant="outline">
              Software Projects
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover border border-border relative"
            >
              <div className="flex justify-end gap-2 absolute top-2 right-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground hover:text-gray-600 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-xs">Code</span>
                  </a>
                )}
                {project.deck && (
                  <a 
                    href={project.deck} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-xs">Deck</span>
                  </a>
                )}
              </div>
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
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                  {project.awards && (
                    <span className="ml-2 text-sm font-normal text-amber-600">{project.awards}</span>
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-muted text-foreground text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
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
