
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

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
  <div className="relative group">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-black p-1 shadow-xl transform group-hover:scale-110 transition-all duration-300">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          {education.logoUrl ? (
            <img
              src={education.logoUrl}
              alt={`${education.school} logo`}
              className="w-12 h-12 object-contain transform transition-transform duration-300 hover:scale-110"
            />
          ) : (
            <GraduationCap className="w-8 h-8 text-slate-500" />
          )}
        </div>
      </div>
      
      <Card className="mt-4 w-64 transform group-hover:-translate-y-1 transition-all duration-300 hover:shadow-xl bg-white/95 backdrop-blur-sm border-slate-200">
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{education.school}</h3>
          <p className="text-sm text-gray-600 mb-2">{education.location}</p>
          <p className="text-xs font-medium text-slate-600 mb-2">{education.period}</p>
          
          {education.degree && (
            <div className="space-y-2">
              <Badge variant="secondary" className="mr-1 bg-slate-100 text-slate-700 hover:bg-slate-200">
                {education.degree} {education.major}
              </Badge>
              
              {education.minor && (
                <div className="text-xs text-gray-600">
                  Minor: {education.minor}
                </div>
              )}
              
              {education.specializations && (
                <div className="text-xs text-gray-600">
                  Specializations: {education.specializations.join(", ")}
                </div>
              )}
              
              {education.concentration && (
                <div className="text-xs text-gray-600">
                  Concentration: {education.concentration}
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  </div>
);

const AcademicSection = () => (
  <section id="academic" className="section-padding bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
        Academic Journey
      </h2>
      
      <div className="relative">
        <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 to-slate-400 transform -translate-y-1/2" />
        
        <div className="flex justify-between gap-4 relative">
          {educations.map((education, idx) => (
            <TimelineNode key={idx} education={education} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AcademicSection;
