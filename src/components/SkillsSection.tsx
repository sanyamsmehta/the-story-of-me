import React from "react";
import { Badge } from "./ui/badge";

const productSkills = [
  "Product Strategy & Roadmapping",
  "Market & User Research (Qualitative + Quantitative)",
  "Current State & Gap Analysis",
  "Competitive Analysis & SWOT",
  "MVP Definition & Scoping",
  "Feature Prioritization",
  "Agile, Scrum, SDLC",
  "Product Development Lifecycle (PDLC)",
  "Buy vs Build Evaluation",
  "KPIs, OKRs, and North Star Metrics",
  "A/B Testing & Experimentation",
  "PRD & Backlog Management",
  "Budgeting",
  "Go-To-Market (GTM) Planning",
  "Stakeholder Management"
];

const technologies = [
  "Advanced Excel",
  "SQL",
  "Python",
  "R",
  "ETL",
  "Snowflake",
  "Azure",
  "AWS",
  "GCP",
  "DBT",
  "Spark",
  "Tableau",
  "PowerBI",
  "Jira",
  "Confluence",
  "Miro",
  "Figma",
  "G-Suite",
  "Canva",
  "Git",
  "A/B Testing",
  "Postman",
  "JMeter",
  "Google Analytics",
  "MS Office"
];

const softwareEngineeringSkills = [
  "Object Oriented Programming",
  "Data Structures and Algorithms",
  "System Design and Architecture",
  "REST API Design & Integration",
  "Microservices",
  "SDLC",
  "Unit Testing",
  "Automation Testing",
  "Code Review and Version Control",
  "Debugging",
  "Optimization",
  "DevOps",
  "Deployment",
  "Scaling",
  "Vulnerability Fixes"
];

const softwareTechnologies = [
  "Java",
  "Python",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "R",
  "MATLAB",
  "HTML",
  "CSS",
  "SQL",
  "PL/SQL",
  "T-SQL",
  "Spring Boot",
  "REST",
  ".NET",
  "Flask",
  "Figma",
  "React",
  "ETL",
  "DBT",
  "JUnit",
  "Selenium",
  "SDLC",
  "Scrum",
  "Agile",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Snowflake",
  "AWS",
  "Azure",
  "Tableau",
  "PowerBI",
  "Git",
  "Excel",
  "Jira",
  "Docker",
  "Kubernetes",
  "Postman",
  "JMeter",
  "CI/CD",
  "Jenkins",
  "GitLab"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Management Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Product Management</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-4 text-gray-800 text-center">Core Skills</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {productSkills.map((skill, index) => (
                      <li key={index} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4 text-gray-800 text-center">Technologies</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Software Engineering Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Software Engineering</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-4 text-gray-800 text-center">Core Skills</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {softwareEngineeringSkills.map((skill, index) => (
                      <li key={index} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4 text-gray-800 text-center">Technologies</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {softwareTechnologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
