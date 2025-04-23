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
    title: "Chief Technical Advisor",
    company: "United Nations Population Fund",
    location: "New York, NY",
    period: "Oct 2018 - Dec 2019",
    description: [
      "Led the development of global protocols...",
      "Worked with governments and partners...",
      "Created internal APIs for interoperability...",
      "Advised senior management...",
    ],
  },
  {
    title: "Technical Lead",
    company: "United Nations Population Fund",
    location: "Amman, Jordan",
    period: "Feb 2017 - Oct 2018",
    description: [
      "Architected and implemented data systems for humanitarian operations in Syria and Yemen, supporting 3M+ beneficiaries",
      "Developed real-time monitoring solutions using Node.js and MongoDB that improved service delivery response times by 40%",
      "Created resilient data collection solutions for low-connectivity environments, enabling operations in remote areas",
      "Trained 30+ humanitarian workers on digital data collection methodologies",
    ],
  },
  {
    title: "Software Engineer",
    company: "United Nations Development Programme",
    location: "Amman, Jordan",
    period: "Jun 2015 - Jan 2017",
    description: [
      "Built and maintained full-stack applications for monitoring $500M+ in humanitarian assistance programs",
      "Implemented projects using Node.js, MongoDB, and React, focusing on offline-first capabilities",
      "Created ETL processes to integrate data from 10+ partner organizations' systems",
      "Deployed cloud infrastructure on AWS, focusing on security and cost optimization",
    ],
  },
];

type ExperienceSectionCardProps = {
  exp: Experience;
  isHighlight: boolean;
};

const HighlightedTitles = [
  "Technical Consultant",
  "Software Development Manager",
  "Senior Product Engineer",
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

const ExperienceSectionCard: React.FC<ExperienceSectionCardProps> = ({
  exp,
  isHighlight,
}) => {
  return (
    <div className="relative flex flex-col bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-6 h-full min-h-[220px] md:min-h-[230px]">

      {/* Date absolute top right */}
      <span className="absolute right-4 top-3 text-xs px-3 py-1 rounded bg-blue-100 text-blue-600 font-semibold whitespace-nowrap z-10">
        {exp.period}
      </span>

      {/* Top row: logo + company name + location + (highlighted title if needed) */}
      <div className="flex items-center gap-2 md:gap-3 mb-2 w-full relative z-20">
        {exp.logoUrl && (
          <img
            src={exp.logoUrl}
            alt={`${exp.company} Logo`}
            className="w-8 h-8 md:w-12 md:h-12 object-contain rounded border border-gray-200 bg-white shadow min-w-[2.5rem] min-h-[2.5rem] max-w-[3rem] max-h-[3rem]"
          />
        )}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-sm md:text-base font-bold text-gray-900">{exp.company}</span>
          <span className="block md:inline md:ml-2 text-xs text-gray-500">{exp.location}</span>
          {isHighlight && (
            <span className="block md:block mt-1 md:mt-0 md:ml-4">
              <Highlighter>{exp.title}</Highlighter>
            </span>
          )}
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
                  isHighlight={HighlightedTitles.includes(exp.title)}
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
