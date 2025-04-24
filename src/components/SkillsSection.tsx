
import React from "react";
import {
  ChartBar,
  ChartPie,
  FileText,
  Briefcase,
  Search,
  Users,
  GitBranch,
  Database,
  Table,
  Cloud,
  FileCode,
  Figma,
  Slack,
  Link,
  Calendar,
} from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

const productSkills: Skill[] = [
  { name: "Product Strategy & Roadmapping", icon: <Briefcase size={20} /> },
  { name: "Market & User Research (Qualitative + Quantitative)", icon: <Search size={20} /> },
  { name: "Competitive Analysis & SWOT", icon: <Search size={20} /> },
  { name: "MVP Definition & Scoping", icon: <Briefcase size={20} /> },
  { name: "Feature Prioritization (RICE, MoSCoW, Kano)", icon: <Briefcase size={20} /> },
  { name: "Agile, Scrum, SDLC", icon: <GitBranch size={20} /> },
  { name: "Product Development Lifecycle (PDLC)", icon: <GitBranch size={20} /> },
  { name: "Go-To-Market (GTM) Planning", icon: <Briefcase size={20} /> },
  { name: "Current State & Gap Analysis", icon: <ChartBar size={20} /> },
  { name: "Buy vs Build Evaluation", icon: <Link size={20} /> },
  { name: "KPIs, OKRs, and North Star Metrics", icon: <ChartBar size={20} /> },
  { name: "A/B Testing & Experimentation", icon: <ChartPie size={20} /> },
  { name: "User Feedback & Voice of Customer (VoC)", icon: <Users size={20} /> },
  { name: "PRD & Backlog Management", icon: <FileText size={20} /> },
  { name: "Budgeting", icon: <Calendar size={20} /> },
  { name: "Stakeholder Management & Cross-Functional Collaboration", icon: <Users size={20} /> },
];

const productTools: Skill[] = [
  { name: "SQL", icon: <Database size={20} /> },
  { name: "Advanced Excel", icon: <Table size={20} /> },
  { name: "Tableau", icon: <Table size={20} /> },
  { name: "Power BI", icon: <Table size={20} /> },
  { name: "AWS", icon: <Cloud size={20} /> },
  { name: "Azure", icon: <Cloud size={20} /> },
  { name: "Snowflake", icon: <Cloud size={20} /> },
  { name: "Jira", icon: <FileCode size={20} /> },
  { name: "Confluence", icon: <FileCode size={20} /> },
  { name: "Figma", icon: <Figma size={20} /> },
  { name: "Slack/Teams/Zoom", icon: <Slack size={20} /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Management Column */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Product Management</h3>
              <div className="space-y-4">
                <h4 className="text-lg font-medium mb-4">Core Skills</h4>
                <div className="grid gap-3">
                  {productSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-lg font-medium mt-8 mb-4">Tools & Technologies</h4>
                <div className="grid gap-3">
                  {productTools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      {tool.icon}
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Software Engineering Column - Placeholder */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Software Engineering</h3>
              <p className="text-muted-foreground">Waiting for software engineering skills...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
