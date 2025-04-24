
import React from "react";
import { Sql, AdvancedExcel, Tableau, PowerBi, Aws, Azure, Snowflake, Etl, Jira, Confluence, Miro, Figma, GSuite, Canva, Notion, Lucidchart, Git, Postman, Slack, MsTeams, Zoom } from "lucide-react";

const productSkills = [
  "Product Strategy & Roadmapping",
  "Market & User Research (Qualitative + Quantitative)",
  "Competitive Analysis & SWOT",
  "MVP Definition & Scoping",
  "Feature Prioritization (RICE, MoSCoW, Kano)",
  "Agile, Scrum, SDLC",
  "Product Development Lifecycle (PDLC)",
  "Go-To-Market (GTM) Planning",
  "Current State & Gap Analysis",
  "Buy vs Build Evaluation",
  "KPIs, OKRs, and North Star Metrics",
  "A/B Testing & Experimentation",
  "User Feedback & Voice of Customer (VoC)",
  "PRD (Product Requirements Document) & Backlog Management",
  "Budgeting",
  "Stakeholder Management & Cross-Functional Collaboration"
];

const technologies = [
  { name: "SQL", icon: Sql },
  { name: "Advanced Excel", icon: AdvancedExcel },
  { name: "Tableau", icon: Tableau },
  { name: "Power BI", icon: PowerBi },
  { name: "AWS", icon: Aws },
  { name: "Azure", icon: Azure },
  { name: "Snowflake", icon: Snowflake },
  { name: "ETL", icon: Etl },
  { name: "Jira", icon: Jira },
  { name: "Confluence", icon: Confluence },
  { name: "Miro", icon: Miro },
  { name: "Figma", icon: Figma },
  { name: "G-Suite", icon: GSuite },
  { name: "Canva", icon: Canva },
  { name: "Notion", icon: Notion },
  { name: "Lucidchart", icon: Lucidchart },
  { name: "Git", icon: Git },
  { name: "Postman", icon: Postman },
  { name: "Slack", icon: Slack },
  { name: "MS Teams", icon: MsTeams },
  { name: "Zoom", icon: Zoom }
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
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Product Management</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-4 text-gray-800">Core Skills</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {productSkills.join(", ")}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4 text-gray-800">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech.icon && <tech.icon size={14} />}
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Software Engineering Column - Placeholder */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Software Engineering</h3>
              <p className="text-gray-500">Waiting for software engineering skills...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

