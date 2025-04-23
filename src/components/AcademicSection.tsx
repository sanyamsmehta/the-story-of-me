
import React from "react";

const educations = [
  {
    degree: "Master of Science in Information Management",
    university: "University of Washington, Seattle",
    logo: "/lovable-uploads/36d20501-5346-4ee4-baa8-980fcfeda272.png", // UW logo
    period: "I study Master's in Information Management at the University of Washington from September 2023 to Present",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "University of Mumbai",
    logo: "/lovable-uploads/13713359-f3a2-4b04-934f-5358e45a7acc.png", // Mumbai University logo
    period: "August 2018 – May 2021",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "American University of Sharjah",
    logo: "/lovable-uploads/60c1a7eb-c31a-4dfb-99eb-44ea201be4ed.png", // AUS logo
    period: "August 2016 – July 2018",
  },
];

const AcademicSection = () => (
  <section id="academic" className="section-padding bg-[#181818] border-b border-muted">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">Academic Experience</h2>
      <div className="flex flex-col gap-8">
        {educations.map((edu, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 rounded-xl bg-[#1f1f1f] glass-morphism shadow-md">
            <div className="h-16 w-16 flex items-center justify-center bg-white rounded p-1">
              <img
                src={edu.logo}
                alt={`${edu.university} logo`}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-xl font-semibold text-white mb-1">{edu.degree}</div>
              <div className="text-lg text-gray-300 font-medium">{edu.university}</div>
              <div className="text-sm text-gray-400">{edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AcademicSection;
