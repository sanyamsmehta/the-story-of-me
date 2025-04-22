
import { Folder, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "api-gateway",
    description:
      "A unified API Gateway for United Nations OCHA platforms. Standardized APIs, improved maintainability, and code reusability.",
    tags: ["Node.js", "API", "Microservices", "Express", "PostgreSQL"],
    link: "https://github.com/sanyamsmehta/api-gateway",
    imageUrl: "https://raw.githubusercontent.com/sanyamsmehta/api-gateway/main/docs/ocha-api.png",
  },
  {
    title: "lookoud-ai",
    description:
      "An assistive platform that increases web content accessibility. Placed 1st at DubHacks, 2nd at EduHacks.",
    tags: ["React", "Flask", "Web Speech API", "Accessibility", "Hackathon"],
    link: "https://github.com/sanyamsmehta/lookoud-ai",
    imageUrl: "https://raw.githubusercontent.com/sanyamsmehta/lookoud-ai/main/demo.png",
  },
  {
    title: "starbucks-product-strategy",
    description:
      "A product strategy project for Starbucks, devised a Northstar metric tracking company expansion and efficiency.",
    tags: ["Strategy", "Product Management", "Data Analysis"],
    link: "https://github.com/sanyamsmehta/starbucks-product-strategy",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Placeholder
  },
  {
    title: "the-grow-card",
    description:
      "Smartsheet Product Competition: Designed a solution for young adults’ debt. Detailed metrics and MVP.",
    tags: ["Product", "FinTech", "Hackathon"],
    link: "https://github.com/sanyamsmehta/the-grow-card",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // Placeholder
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center">
          A showcase of my actual work—see more on{" "}
          <a href="https://github.com/sanyamsmehta" className="text-portfolio-purple underline hover:text-portfolio-darkPurple" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm card-hover"
            >
              <div
                className="h-48 bg-gray-200 relative"
                style={{
                  backgroundImage: project.imageUrl ? `url(${project.imageUrl})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!project.imageUrl && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Folder size={48} />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-portfolio-lightPurple text-portfolio-darkPurple px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-portfolio-purple hover:text-portfolio-darkPurple font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1" size={18} /> View on GitHub
                    </a>
                  ) : null}
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
