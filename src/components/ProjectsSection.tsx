
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Github } from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";

const GITHUB_USERNAME = "sanyamsmehta";

const fetchGithubProjects = async () => {
  // Only public, non-fork repos, sorted by updated
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
  const repos = await res.json();
  // Remove forks and sort pinned to the top if desired
  return repos.filter((repo: any) => !repo.fork);
};

const ProjectsSection = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["github-projects"],
    queryFn: fetchGithubProjects,
  });

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center">
          A collection of real work – see more on{" "}
          <a
            href="https://github.com/sanyamsmehta"
            className="text-portfolio-purple underline hover:text-portfolio-darkPurple"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <div className="mt-10">
          {isLoading ? (
            <div className="text-center py-20 text-xl text-gray-500">Loading projects...</div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">Failed to fetch projects from GitHub.</div>
          ) : projects?.length ? (
            <ProjectCarousel projects={projects.slice(0, 15)} />
          ) : (
            <div className="text-center py-20 text-gray-500">No projects found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

