import React from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { BriefcaseIcon, CodeIcon, DatabaseIcon, StarIcon } from "lucide-react";

const productSkills = [
  "Product Strategy & Roadmapping",
  "Market & User Research (Qualitative + Quantitative)",
  "Current State & Gap Analysis",
  "Competitive Analysis & SWOT",
  "KPIs, OKRs, and North Star Metrics",
  "MVP Definition & Scoping",
  "PRD & Backlog Management",
  "Feature Prioritization",
  "Agile, Scrum, SDLC",
  "Product Development Lifecycle (PDLC)",
  "Buy vs Build Evaluation",
  "Product-Market-Fit Analysis",
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
  "MS Office",
  "Kaggle",
  "Hugging Face",
  "Prompt Engineering"
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
    <section id="skills" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and managerial capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Management Column */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-slate-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-100">
                <BriefcaseIcon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Product Management</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-slate-600" />
                  Core Skills
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                  {productSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 flex items-center gap-2">
                  <DatabaseIcon className="w-5 h-5 text-slate-600" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-white hover:bg-slate-50 text-gray-700 border-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Software Engineering Column */}
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-slate-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-100">
                <CodeIcon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Software Engineering</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-slate-600" />
                  Core Skills
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                  {softwareEngineeringSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 flex items-center gap-2">
                  <DatabaseIcon className="w-5 h-5 text-slate-600" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {softwareTechnologies.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-white hover:bg-slate-50 text-gray-700 border-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
