
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Product",
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "User Research",
      "Wireframing",
      "Agile/Scrum",
      "A/B Testing",
      "Product Analytics",
      "Market Analysis",
      "Stakeholder Management",
      "Cross-functional Collaboration"
    ]
  },
  {
    name: "Technical",
    skills: [
      "JavaScript/TypeScript",
      "Python",
      "Node.js",
      "React",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "RESTful APIs",
      "GraphQL",
      "CI/CD Pipelines",
      "System Architecture"
    ]
  },
  {
    name: "Data",
    skills: [
      "Data Analysis",
      "SQL",
      "Tableau",
      "Power BI",
      "Data Visualization",
      "ETL Processes",
      "Data Modeling",
      "Statistical Analysis",
      "Jupyter Notebooks",
      "Pandas"
    ]
  },
  {
    name: "Languages",
    skills: [
      "English (Fluent)",
      "Hindi (Native)",
      "Arabic (Basic)"
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title text-center">Skills</h2>
        <p className="section-subtitle text-center">
          My expertise across product management, engineering, and data analysis
        </p>

        <div className="mt-12">
          <Tabs defaultValue="Product" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="bg-card p-8 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 border border-border rounded-md">
                        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.3117C10.7244 8.55136 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
