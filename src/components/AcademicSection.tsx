
import React from "react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

const educations: Education[] = [
  {
    degree: "Master of Science in Information Management",
    institution: "University of Washington - Seattle, WA",
    period: "Sep 2023 - Present",
    description: [
      "Relevant Coursework: Software Product Management, Data Science, Information Visualization",
      "Teaching Assistant for Information Architecture at the Information School",
      "GPA: 3.7/4.0"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indraprastha University - Delhi, India",
    period: "Aug 2011 - May 2015",
    description: [
      "Relevant Coursework: Database Management Systems, Data Structures, Operating Systems, Computer Networks",
      "Final Year Project: Developed a web-based ERP system for schools",
      "GPA: 3.8/4.0"
    ]
  }
];

const AcademicSection = () => {
  return (
    <section id="academic" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title text-center">Academic Experience</h2>
        <p className="section-subtitle text-center">
          My educational background and academic achievements
        </p>

        <div className="mt-12 max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="bg-card p-6 rounded-lg shadow-sm mb-6 ml-4 card-hover">
                <div className="flex justify-between items-start mb-4 flex-col sm:flex-row gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 bg-muted px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {edu.description.map((item, i) => (
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

export default AcademicSection;
