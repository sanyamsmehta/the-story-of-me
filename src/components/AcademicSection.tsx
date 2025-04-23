
import React from "react";

interface Education {
  school: string;
  location: string;
  period: string;
  degree: string;
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
];

const TimelineNode: React.FC<{ education: Education }> = ({ education }) => (
  <div className="flex flex-col items-center relative">
    {/* Logo Circle */}
    <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-500 p-2 flex items-center justify-center z-10">
      {education.logoUrl && (
        <img
          src={education.logoUrl}
          alt={`${education.school} logo`}
          className="w-full h-full object-contain"
        />
      )}
    </div>
    
    {/* Content Box */}
    <div className="mt-4 bg-white rounded-lg shadow-lg p-4 w-64">
      <h3 className="font-bold text-lg text-gray-900">{education.school}</h3>
      <p className="text-blue-600 font-semibold">{education.degree}</p>
      <p className="text-sm text-gray-500">{education.location}</p>
      <p className="text-sm font-medium text-gray-700 mt-1">{education.period}</p>
    </div>
  </div>
);

const AcademicSection = () => (
  <section id="academic" className="section-padding bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Academic Journey</h2>
      
      {/* Timeline Container */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-blue-500" />
        
        {/* Timeline Nodes */}
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
