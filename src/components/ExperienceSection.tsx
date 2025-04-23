
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
    title: "Senior Product Engineer",
    company: "Larsen and Toubro Infotech",
    location: "Mumbai, India",
    period: "June 2021 – July 2023",
    description: [
      "(Java, Spring Boot, REST API, Docker, Kubernetes, DBT, Snowflake, Spark, Slate, JMeter, JUnit, Grafana, ETL, NoSQL)",
      "Spearheaded SDLCs for 5 features leading to a 14% increase in client base with a 100% on-time delivery rate.",
      "Conducted performance benchmarking tests saving environment procurement costs by 15% per deployment.",
      "Led 5 client releases in one month collaborating with cross-functional teams (QA, DevOps, Developers, and PMs).",
      "Enhanced security of 18 Microservices by over 20% by implementing the Kubernetes Pod Security Policies.",
      "Built ETL pipelines and workflows certifying Product Snowflake Compliant enabling 100K+ marketplace users.",
      "Upgraded Spark Engine to 3.x to allow optimized partitioning and AQE improving query performance by 40%.",
      "Received 2 Promotions, mentored 4 recruits, and delivered Knowledge Transfer sessions and 2 Product Demos.",
    ],
    logoUrl: "/lovable-uploads/182f291f-631e-4a8a-a223-9b7a4e53a084.png",
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

const highlightedLayout = (exp: Experience, extraClass?: string) => (
  <div className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 ${extraClass ?? ""}`}>
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-bold text-gray-900">{exp.company}</span>
        <span className="text-xs text-gray-500">{exp.location}</span>
        <div
          className="mt-1 text-base font-extrabold text-black bg-yellow-100 px-2 py-1 rounded inline-block w-fit"
          style={{ letterSpacing: ".02em" }}
        >
          {exp.title}
        </div>
        <ul className="list-disc ml-5 mt-2 space-y-1.5 text-gray-600 text-xs leading-normal">
          {exp.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex flex-col items-end min-w-[9rem] md:min-w-[9rem]">
      <span className="text-xs bg-blue-100 text-blue-600 rounded px-3 py-1 font-semibold whitespace-nowrap mb-2 self-end">
        {exp.period}
      </span>
      {!!exp.logoUrl && (
        <div className="flex justify-end w-full">
          <img
            src={exp.logoUrl}
            alt={`${exp.company} Logo`}
            className="w-32 h-20 md:w-40 md:h-24 object-contain rounded-[0.7rem] border border-gray-200 shadow bg-white mt-2"
            style={{
              background: "#fff",
              minWidth: "7rem",
              minHeight: "4rem",
              maxWidth: "11rem",
              maxHeight: "5.2rem"
            }}
          />
        </div>
      )}
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="section-padding bg-white border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">
          Work Experience
        </h2>
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200 hidden md:block" />
          <ul className="space-y-12 relative">
            {experiences.map((exp, idx) => (
              <li key={idx} className="md:flex md:items-start group">
                <div className="flex flex-col items-center mr-8 md:mr-0 md:w-12">
                  <div className="hidden md:block w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white mb-2 z-10" />
                  <span className="hidden md:block w-px bg-gray-200 flex-1" />
                </div>
                <div className="flex-1 bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-6 transition group-hover:shadow-lg">
                  {idx <= 2
                    ? highlightedLayout(exp)
                    : (
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900">{exp.company}</span>
                            <span className="text-xs text-gray-500">{exp.location}</span>
                            <div className="mt-1 text-xs font-bold text-black">{exp.title}</div>
                            <ul className="list-disc ml-5 mt-2 space-y-1.5 text-gray-600 text-xs leading-normal">
                              {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs bg-blue-100 text-blue-600 rounded px-3 py-1 font-semibold whitespace-nowrap mb-2 self-end">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
