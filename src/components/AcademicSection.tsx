
import React from "react";

const educations = [
  {
    degree: "Master of Science in Information Management",
    university: "University of Washington, Seattle",
    logo: "/lovable-uploads/7398147a-1758-4d9a-87f7-bc11d011b63e.png", // UW logo
    period: "I study Master's in Information Management at the University of Washington from September 2023 to Present",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "University of Mumbai",
    logo: "/lovable-uploads/7e855a4c-df09-44c0-8e3c-9f34caeef668.png",
    period: "August 2018 – May 2021",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "American University of Sharjah",
    logo: "/lovable-uploads/519eccf9-6060-4d25-990e-9edbc620d088.png",
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
            <img
              src={edu.logo}
              alt={`${edu.university} logo`}
              className="h-16 w-16 object-contain rounded bg-white/10 border border-white/10 p-2"
            />
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
