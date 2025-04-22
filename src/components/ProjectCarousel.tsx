
import React from "react";
import { Github } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Project {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  homepage?: string | null;
  owner?: { avatar_url: string };
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto relative">
      <CarouselContent className="py-2">
        {projects.map((project, i) => (
          <CarouselItem
            key={project.html_url}
            className="p-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="h-full bg-white border border-gray-100 rounded-xl shadow-md flex flex-col justify-between p-6 transition-transform hover:scale-105 duration-200">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Github className="text-portfolio-purple" size={22} />
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg text-portfolio-dark hover:text-portfolio-purple transition-colors"
                  >
                    {project.name}
                  </a>
                </div>
                <p className="text-gray-700 mb-3 min-h-[48px]">{project.description || "No description provided."}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.language && (
                  <span className="text-xs font-medium bg-portfolio-lightPurple text-portfolio-darkPurple px-2 py-1 rounded-full">
                    {project.language}
                  </span>
                )}
                {project.topics &&
                  project.topics.map(topic => (
                    <span key={topic} className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;

