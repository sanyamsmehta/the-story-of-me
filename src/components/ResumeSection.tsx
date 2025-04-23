
import React, { useState, useRef } from "react";
import { FileText, Upload } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

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
  const [uploadedResumes, setUploadedResumes] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      
      // Check if file is PDF
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
        return;
      }
      
      // Add file to state
      setUploadedResumes(prev => [...prev, file]);
      
      toast({
        title: "Resume uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <section id="resume" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center text-portfolio-dark">Resume</h2>
        <p className="section-subtitle text-center text-gray-600">
          View and download my resume or upload your own version
        </p>
        
        {/* Upload area */}
        <div className="mt-8 mb-12 max-w-lg mx-auto">
          <div className="border-2 border-dashed border-portfolio-purple/40 rounded-lg p-8 text-center bg-secondary/50">
            <Upload className="mx-auto h-12 w-12 text-portfolio-purple mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload Resume</h3>
            <p className="text-gray-500 mb-4 text-sm">Drag and drop or click to upload your PDF resume</p>
            
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileUpload}
              ref={fileInputRef}
              id="resume-upload"
            />
            
            <label
              htmlFor="resume-upload"
              className="px-5 py-2 bg-portfolio-purple text-white font-medium rounded-md hover:bg-portfolio-darkPurple transition-colors duration-200 inline-flex items-center cursor-pointer"
            >
              <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Choose File
            </label>
          </div>
          
          {/* Display uploaded files */}
          {uploadedResumes.length > 0 && (
            <div className="mt-6">
              <h4 className="text-md font-medium mb-3">Uploaded Resumes:</h4>
              <ul className="space-y-2">
                {uploadedResumes.map((file, index) => (
                  <li key={index} className="flex items-center justify-between p-3 bg-secondary rounded-md">
                    <div className="flex items-center">
                      <FileText className="text-portfolio-purple mr-2" size={20} />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
          {resumes.map(resume => (
            <div key={resume.label} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm card-hover flex flex-col items-center">
              <div className="w-[140px] h-[190px] overflow-hidden rounded-lg border-2 border-portfolio-light bg-gray-50 flex items-center justify-center mb-3 shadow">
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
