
import React from "react";

interface Education {
  school: string;
  location: string;
  period: string;
  degree: string;
  major?: string;
  minor?: string;
  specializations?: string[];
  concentration?: string;
  logoUrl?: string;
}

const educations: Education[] = [
  {
    school: "Bombay Scottish School",
    location: "Mumbai, India",
    period: "2004 - 2016",
    degree: "",
    concentration: "Science",
    logoUrl: "/lovable-uploads/76ef3769-536c-4027-92ab-5fe630269d8a.png",
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
  {
    school: "University of Mumbai",
    location: "Mumbai, India",
    period: "2018 - 2021",
    degree: "BE",
    major: "Computer Engineering",
    logoUrl: "/lovable-uploads/918a4727-75cd-456c-89c1-fa3a3128d75c.png",
  },
  {
    school: "University of Washington",
    location: "Seattle, USA",
    period: "2023 - 2025",
    degree: "MS",
    major: "Information Management",
    specializations: ["Product Management", "Business Intelligence", "Data Science"],
    logoUrl: "/lovable-uploads/ed879a88-4264-4c79-9009-11714dcb20a4.png",
  }
];

const TimelineNode: React.FC<{ education: Education }> = ({ education }) => (
  <div className="flex flex-col items-center relative">
    <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-500 p-1 flex items-center justify-center z-10 overflow-hidden">
      {education.logoUrl && (
        <img
          src={education.logoUrl}
          alt={`${education.school} logo`}
          className="w-8 h-8 object-contain rounded-full transition-transform duration-300 hover:scale-125"
        />
      )}
    </div>
    
    <div className="mt-2 bg-white rounded-lg shadow-lg p-2 w-44 text-center min-h-[120px] flex flex-col">
      <h3 className="text-[10px] font-bold text-gray-900 truncate">{education.school}</h3>
      <div className="flex-grow">
        {education.degree && (
          <p className="text-[10px] text-blue-600 font-semibold mb-1">
            {education.degree} {education.major}
            {education.minor && <span className="block text-[8px] text-blue-500">Minor: {education.minor}</span>}
            {education.specializations && (
              <span className="block text-[8px] text-blue-500">
                Specializations: {education.specializations.join(", ")}
              </span>
            )}
          </p>
        )}
        {education.concentration && (
          <p className="text-[10px] text-blue-600 font-semibold mb-1">
            Concentration: {education.concentration}
          </p>
        )}
      </div>
      <div className="border-t border-gray-100 pt-1 mt-1">
        <p className="text-[9px] text-gray-500">{education.location}</p>
        <p className="text-[9px] font-medium text-gray-700">{education.period}</p>
      </div>
    </div>
  </div>
);

const AcademicSection = () => (
  <section id="academic" className="section-padding bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Academic Journey</h2>
      
      <div className="relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-blue-500" />
        
        <div className="flex justify-between gap-2 relative">
          {educations.map((education, idx) => (
            <TimelineNode key={idx} education={education} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AcademicSection;
