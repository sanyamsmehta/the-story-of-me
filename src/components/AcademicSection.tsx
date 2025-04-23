import React from "react";

interface Education {
  school: string;
  location: string;
  period: string;
  degree: string;
  major?: string;
  minor?: string;
  logoUrl?: string;
}

const educations: Education[] = [
  {
    school: "Bombay Scottish School",
    location: "Mumbai, India",
    period: "2004 - 2016",
    degree: "",
    logoUrl: "/lovable-uploads/76ef3769-536c-4027-92ab-5fe630269d8a.png",
  },
  {
    school: "University of Mumbai",
    location: "Mumbai, India",
    period: "2018 - 2021",
    degree: "B.E.",
    major: "Computer Engineering",
    logoUrl: "/lovable-uploads/918a4727-75cd-456c-89c1-fa3a3128d75c.png",
  },
  {
    school: "American University of Sharjah",
    location: "Sharjah, UAE",
    period: "2016 - 2018",
    degree: "B.Tech",
    major: "Computer Engineering",
    minor: "Applied and Computational Math",
    logoUrl: "/lovable-uploads/0205e76a-e7a6-49e5-9b89-54ef27d134c9.png",
  },
];

const TimelineNode: React.FC<{ education: Education }> = ({ education }) => (
  <div className="flex flex-col items-center relative">
    <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-500 p-1 flex items-center justify-center z-10">
      {education.logoUrl && (
        <img
          src={education.logoUrl}
          alt={`${education.school} logo`}
          className="w-16 h-16 object-contain rounded-full"
        />
      )}
    </div>
    
    <div className="mt-3 bg-white rounded-lg shadow-lg p-3 w-64">
      <h3 className="text-xs font-bold text-gray-900 truncate">{education.school}</h3>
      {education.degree && (
        <p className="text-xs text-blue-600 font-semibold">
          {education.degree} - {education.major}
          {education.minor && <span className="block text-[11px] text-blue-500">Minor: {education.minor}</span>}
        </p>
      )}
      <p className="text-[11px] text-gray-500">{education.location}</p>
      <p className="text-[11px] font-medium text-gray-700">{education.period}</p>
    </div>
  </div>
);

const AcademicSection = () => (
  <section id="academic" className="section-padding bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Academic Journey</h2>
      
      <div className="relative">
        <div className="absolute top-12 left-0 right-0 h-1 bg-blue-500" />
        
        <div className="flex justify-start gap-24 relative">
          {educations.map((education, idx) => (
            <TimelineNode key={idx} education={education} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AcademicSection;
