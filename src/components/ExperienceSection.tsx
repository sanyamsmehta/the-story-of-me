
import React from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Product Manager",
    company: "Epic Games",
    location: "Seattle, WA",
    period: "Dec 2019 - Jul 2023",
    description: [
      "Led the development of cloud services for Unreal Engine's Pixel Streaming, enabling diverse use cases from automotive design to architectural visualization",
      "Grew Pixel Streaming adoption by 150% through UX improvements, documentation, and targeted feature development",
      "Successfully pitched streaming SDK to leadership, securing resources for development from a 5M revenue opportunity",
      "Managed a team of 5 engineers, led sprint planning, and collaborated with UX designers to create intuitive interfaces"
    ]
  },
  {
    title: "Chief Technical Advisor (Information Management)",
    company: "United Nations Population Fund",
    location: "New York, NY",
    period: "Oct 2018 - Dec 2019",
    description: [
      "Led the development of global protocols for data collection in humanitarian emergencies across 155 countries",
      "Worked with governments and technology partners to implement data-driven solutions for humanitarian response",
      "Created internal APIs that enabled interoperability between various UN systems, improving field coordination",
      "Advised senior management on technology strategies for the organization's $1B portfolio"
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
    <section id="experience" className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">Work Experience</h2>
        <p className="section-subtitle text-center">
          My professional journey spanning product management and software engineering
        </p>

        <div className="mt-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="bg-card p-6 rounded-lg shadow-sm mb-6 ml-4 card-hover">
                <div className="flex justify-between items-start mb-4 flex-col md:flex-row gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 text-lg">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
