
import React from "react";

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
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800">Core Skills</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {productSkills.join(", ")}
                </p>
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
