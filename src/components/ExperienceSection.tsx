
import React from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logoUrl?: string;
}

const experiences: Experience[] = [
  {
    title: "Technical Consultant",
    company: "United Nations – OCHA",
    location: "Geneva, Switzerland (Remote)",
    period: "September 2024 – Present",
    description: [
      "Led a team of 3 to POC a unified API gateway consolidating 12+ platforms, cutting integration complexity by 70%.",
      "Road-mapped a phased microservice and content repository transition, lowering maintenance overhead by 50%.",
      "Audited 50+ APIs to recommend schema standardization, enhancing interoperability, scalability, and reusability.",
      "Prototyped a working country-specific dashboard, improving stakeholder visibility into crisis aggregation by 80%.",
    ],
    logoUrl: "/lovable-uploads/cf002099-5686-423b-8f1a-5d8828e5e742.png",
  },
  {
    title: "Software Development Manager",
    company: "Epic Games",
    location: "Seattle, WA",
    period: "September 2024 – Present",
    description: [
      "Accelerated UEFN, Fortnite, and Unreal Engine usability scores by 40%, optimizing IA of over 50 interfaces.",
      "Translated requirements to a PRD scoping, prioritizing, and scheduling activities targeting a 40% NPS increase.",
      "Led team to solution content, taxonomy, and integration for 2.5 K+ articles to reduce navigation time by 30%.",
      "Segmented and interviewed 100+ users to re-engineer end-user workflow, boosting product-market fit.",
      "Developed a tool to automate article classification, decreasing tagging effort by 60%, rendering a 95% accuracy.",
      "A/B tested 14 displays to finalize a unified user interface for all 3 offerings, projecting a drop-off rate by 75%.",
    ],
    logoUrl: "/lovable-uploads/e70f4ea8-a42d-4fe9-bd27-d851d960b299.png",
  },
  {
    title: "IT Intern",
    company: "Black Box Ltd.",
    location: "Dallas, Texas",
    period: "June 2024 – September 2024",
    description: [
      "Owned concept-to-launch of a Compliance System Software to track legal, quality, and safety metrics of 4000+ hardware products, enabling entry into 30+ global markets and saving $250K annually.",
      "Refactored 4 modules to follow Clean Architecture, pacing data retrieval by 100% and user engagement by 30%.",
      "Automated document verification to reduce manual efforts by 90% and approval cycles from days to minutes.",
      "Created a centralized view to access 36 K+ documentation, tests, and reports, reducing lookup time by 45%.",
    ],
    logoUrl: "/lovable-uploads/c00ee5fe-70fc-4af8-9f87-73d639c2253e.png",
  },
  {
    title: "Senior Product Engineer",
    company: "Larsen and Toubro Infotech",
    location: "Mumbai, India",
    period: "June 2021 – July 2023",
    description: [
      "Spearheaded SDLCs for 5 features leading to a 14% increase in client base with a 100% on-time delivery rate.",
      "Conducted performance benchmarking tests saving environment procurement costs by 15% per deployment.",
      "Led 5 client releases in one month collaborating with cross-functional teams (QA, DevOps, Developers, and PMs).",
      "Enhanced security of 18 Microservices by over 20% by implementing the Kubernetes Pod Security Policies.",
      "Built ETL pipelines and workflows certifying Product Snowflake Compliant enabling 100K+ marketplace users.",
      "Upgraded Spark Engine to 3.x to allow optimized partitioning and AQE improving query performance by 40%.",
      "Received 2 Promotions, mentored 4 recruits, and delivered Knowledge Transfer sessions and 2 Product Demos.",
    ],
    logoUrl: "/lovable-uploads/f2a6f229-03f2-4133-aaa0-7084fe732f66.png",
  },
  {
    title: "Alumni Mentor",
    company: "University of Mumbai",
    location: "Mumbai, India",
    period: "June 2021 – Present",
    description: [
      "Developed a strategic road map collaborating with UoM Training and Placement cell, industry partners, and students to bridge gaps and increase placement statistics by 30% annually.",
      "Continue to mentor and train over 200 students annually through resume and profile reviews, mock technical and behavioural interviews, and conducting technical seminars and orientations.",
    ],
    logoUrl: "/lovable-uploads/2dabfeda-55db-4a08-91bc-0f6cba2b8d28.png",
  },
  {
    title: "UI/UX Intern",
    company: "AGC Networks",
    location: "Mumbai, India",
    period: "June 2019 – August 2019",
    description: [
      "Learned frontend development from the ground up, building projects with HTML, CSS, JavaScript, Angular, and Ionic, while also gaining exposure to Human-Centered Interface Design (HCID) concepts to better understand user needs and interface usability.",
      "Translated gathered requirements into wireframe prototypes, speeding feature understanding by over 50%.",
      "Developed responsive and reusable UI across cross-platform applications, facilitating over 30% code reuse.",
    ],
    logoUrl: "/lovable-uploads/38357757-47ab-4c2d-8c03-3b7d6f2e44d5.png",
  },
];

const Highlighter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    className="inline-block px-2 rounded-md"
    style={{
      background: "#FEF7CD",
      boxShadow: "0 1px 3px 0 #fffbe9",
      color: "#835600",
      fontWeight: 700,
    }}
  >
    {children}
  </span>
);

type ExperienceSectionCardProps = {
  exp: Experience;
};

const ExperienceSectionCard: React.FC<ExperienceSectionCardProps> = ({
  exp,
}) => {
  return (
    <div className="relative flex flex-col bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-6 h-full min-h-[220px] md:min-h-[230px]">

      {/* Date absolute top right */}
      <span className="absolute right-4 top-3 text-xs px-3 py-1 rounded bg-blue-100 text-blue-600 font-semibold whitespace-nowrap z-10">
        {exp.period}
      </span>

      {/* Top row: logo + company name + location + (designation below company) */}
      <div className="flex items-center gap-2 md:gap-3 mb-2 w-full relative z-20">
        {exp.logoUrl && (
          <img
            src={exp.logoUrl}
            alt={`${exp.company} Logo`}
            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded border border-gray-200 bg-white shadow min-w-[4rem] min-h-[4rem] max-w-[5rem] max-h-[5rem] mr-4" // Increased margin-right to 4 (mr-4)
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm md:text-base font-bold text-gray-900">{exp.company}</span>
          <span className="block md:inline text-xs text-gray-500">{exp.location}</span>
          {/* Designation, font reduced & color set to same as date */}
          <span className="block mt-1 text-[0.82rem] md:text-sm font-semibold" style={{ color: "#2563eb" }}>
            <Highlighter>{exp.title}</Highlighter>
          </span>
        </div>
      </div>

      {/* Bullets */}
      <ul className="list-disc ml-5 mt-1 space-y-1.5 text-gray-600 text-xs leading-normal z-10">
        {exp.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="section-padding bg-white border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">
          Work Experience
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200 hidden md:block" />
          <ul className="space-y-12 relative">
            {experiences.map((exp, idx) => (
              <li key={idx} className="group">
                <ExperienceSectionCard
                  exp={exp}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
