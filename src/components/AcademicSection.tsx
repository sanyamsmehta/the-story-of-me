
import React from "react";

const educations = [
  {
    degree: "Master of Science in Information Management",
    university: "University of Washington, Seattle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Washington_Huskies_logo.svg", // Official UW logo
    period: "Sep 2023 – Present",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "University of Mumbai",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/MumbaiUniversity.svg/1200px-MumbaiUniversity.svg.png",
    period: "Aug 2018 – May 2021",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "American University of Sharjah",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/American_University_of_Sharjah_Logo.svg",
    period: "Aug 2016 – Jul 2018",
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
