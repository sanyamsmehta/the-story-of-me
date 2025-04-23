import React from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  // Use placeholder content for now; user will provide details
  {
    title: "Product Manager",
    company: "Epic Games",
    location: "Seattle, WA",
    period: "Dec 2019 - Jul 2023",
    description: [
      "Led the development of cloud services...",
      "Grew Pixel Streaming adoption by 150%...",
      "Successfully pitched streaming SDK...",
      "Managed a team of 5 engineers..."
    ]
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
      "Advised senior management..."
    ]
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
      "Trained 30+ humanitarian workers on digital data collection methodologies"
    ]
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
      "Deployed cloud infrastructure on AWS, focusing on security and cost optimization"
    ]
  }
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
                <div className="flex-1 bg-white border border-gray-100 shadow-md rounded-2xl p-6 md:p-8 transition group-hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="text-gray-600 text-base md:text-lg font-medium">
                        {exp.company}
                        {exp.location && <span className="text-gray-400 font-normal ml-2">· {exp.location}</span>}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm bg-blue-100 text-blue-600 rounded px-3 py-1 font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700 text-base leading-relaxed">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
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
