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

      // Only accept PDFs
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
        return;
      }

      setUploadedResumes(prev => [...prev, file]);

      toast({
        title: "Resume uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });

      // Reset input value for future uploads
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <section id="resume" className="section-padding bg-[#F6FAFC]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title text-center text-blue-900">Resume</h2>
        <p className="section-subtitle text-center text-gray-700 mb-10">
          View and download my resume,<br />or upload your own PDF version
        </p>
        
        {/* Upload area */}
        <div className="mt-6 mb-12 max-w-md mx-auto">
          <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center bg-white">
            <Upload className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload Resume</h3>
            <p className="text-blue-600/70 mb-4 text-sm">
              Drag and drop or click to upload your PDF resume
            </p>

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
              className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 cursor-pointer transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Choose File
            </label>
          </div>
          
          {/* Uploaded Files */}
          {uploadedResumes.length > 0 && (
            <div className="mt-6">
              <h4 className="text-md font-medium mb-3">Uploaded Resumes:</h4>
              <ul className="space-y-2">
                {uploadedResumes.map((file, index) => (
                  <li key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                    <div className="flex items-center">
                      <FileText className="text-blue-600 mr-2" size={20} />
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
          {resumes.map(resume => (
            <div key={resume.label} className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm flex flex-col items-center">
              <div className="w-[140px] h-[190px] overflow-hidden rounded-lg border-2 border-blue-50 bg-blue-50 flex items-center justify-center mb-3 shadow">
                <img
                  src={resume.image}
                  alt={resume.label}
                  className="object-cover object-top w-full h-full rounded-sm"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FileText size={24} className="text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900 text-center">
                  {resume.label}
                </h3>
              </div>
              <p className="text-gray-700 text-center mb-4 text-sm">{resume.description}</p>
              <a
                href={resume.image}
                download={resume.download}
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
