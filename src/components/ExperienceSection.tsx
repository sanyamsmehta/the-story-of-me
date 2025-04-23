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
    logoUrl: "/lovable-uploads/f181dc71-04bb-4465-aded-fcabedd9f15b.png",
  },
  {
    title: "Product Manager",
    company: "Epic Games",
    location: "Seattle, WA",
    period: "Dec 2019 - Jul 2023",
    description: [
      "Led the development of cloud services...",
      "Grew Pixel Streaming adoption by 150%...",
      "Successfully pitched streaming SDK...",
      "Managed a team of 5 engineers...",
    ],
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

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="section-padding bg-white border-b border-gray-200"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200 hidden md:block" />
          <ul className="space-y-12 relative">
            {experiences.map((exp, idx) => (
              <li key={idx} className="md:flex md:items-center group">
                {/* Timeline dot */}
                <div className="flex flex-col items-center mr-8 md:mr-0 md:w-12">
                  <div className="hidden md:block w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white mb-2 z-10" />
                  <span className="hidden md:block w-px bg-gray-200 flex-1" />
                </div>
                {/* Experience Card */}
                <div className="flex-1 bg-white border border-gray-100 shadow-md rounded-2xl p-4 md:p-6 transition group-hover:shadow-lg flex flex-col md:flex-row md:items-stretch md:justify-between gap-4">
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Top Row: Company/Location left, Date right */}
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="text-sm md:text-base font-bold text-gray-900 block">{exp.company}</span>
                        <span className="text-xs md:text-sm text-gray-500 block">{exp.location}</span>
                        <div className="mt-2 text-xs md:text-sm font-medium text-blue-900/80">{exp.title}</div>
                      </div>
                      <span className="text-xs md:text-sm bg-blue-100 text-blue-600 rounded px-3 py-1 font-semibold ml-4 whitespace-nowrap mt-1 self-start min-w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-600 text-xs md:text-sm leading-normal">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Show company logo only for first experience */}
                  {idx === 0 && exp.logoUrl && (
                    <div className="flex items-center justify-center md:items-start md:justify-end flex-shrink-0 pl-2 md:pl-6">
                      <img
                        src={exp.logoUrl}
                        alt="United Nations Logo"
                        className="w-32 h-32 object-contain rounded-[0.7rem] border border-gray-200 shadow-md bg-white"
                        style={{ minWidth: 100, minHeight: 100, background: "#fff" }}
                      />
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
