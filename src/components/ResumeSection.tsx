
import React from "react";
import { FileText } from "lucide-react";

const resumes = [
  {
    label: "Product Manager Resume",
    image: "/public/lovable-uploads/7398147a-1758-4d9a-87f7-bc11d011b63e.png",
    download: "SanyamMehta_PM_Resume.png",
    description: "Focused on my product management experience, strategic thinking, and business acumen.",
  },
  {
    label: "Software Developer Resume",
    image: "/public/lovable-uploads/7e855a4c-df09-44c0-8e3c-9f34caeef668.png",
    download: "SanyamMehta_SDE_Resume.png",
    description: "Highlighting my technical skills, software development experience, and engineering projects.",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">Resume</h2>
        <p className="section-subtitle text-center">
          Visual preview and downloads of my Product Manager and Software Developer resumes
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
          {resumes.map(resume => (
            <div key={resume.label} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm card-hover flex flex-col items-center">
              <div className="w-[140px] h-[190px] overflow-hidden rounded-lg border-2 border-portfolio-lightPurple bg-gray-50 flex items-center justify-center mb-3 shadow">
                <img
                  src={resume.image}
                  alt={resume.label}
                  className="object-cover object-top w-full h-full rounded-sm"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FileText size={24} className="text-portfolio-purple" />
                <h3 className="text-xl font-bold text-portfolio-dark text-center">
                  {resume.label}
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-4 text-sm">{resume.description}</p>
              <a
                href={resume.image}
                download={resume.download}
                className="px-5 py-2 bg-portfolio-purple text-white font-medium rounded-md hover:bg-portfolio-darkPurple transition-colors duration-200 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

