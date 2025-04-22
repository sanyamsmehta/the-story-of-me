
import { Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of your project. What technologies did you use? What problem did it solve? What was your role?",
    tags: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Project Two",
    description:
      "Another project description. Talk about the challenges you faced and how you overcame them.",
    tags: ["TypeScript", "Express", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Project Three",
    description:
      "More details about a significant project. What impact did it have? What did you learn?",
    tags: ["Python", "Django", "AWS"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Project Four",
    description:
      "Describe a project that showcases your unique skills or interests. What made this project special?",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center">
          A showcase of my recent work and personal projects
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
                {project.link && (
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-portfolio-purple hover:text-portfolio-darkPurple font-medium"
                  >
                    View Project →
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
