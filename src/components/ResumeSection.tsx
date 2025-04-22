
import { FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">My Resume</h2>
        <p className="section-subtitle text-center">
          Download my resume for more detailed information about my experience and skills
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
          {/* PM Resume Card */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm card-hover">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-portfolio-lightPurple flex items-center justify-center text-portfolio-purple">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold text-portfolio-dark mb-2 text-center">
              Product Manager Resume
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Focused on my product management experience, strategic thinking, and business acumen
            </p>
            <div className="text-center">
              <a
                href="#"
                className="px-6 py-3 bg-portfolio-purple text-white font-medium rounded-md hover:bg-portfolio-darkPurple transition-colors duration-300 inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download PM Resume
              </a>
            </div>
          </div>

          {/* SDE Resume Card */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm card-hover">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-portfolio-lightPurple flex items-center justify-center text-portfolio-purple">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold text-portfolio-dark mb-2 text-center">
              Software Developer Resume
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Highlighting my technical skills, software development experience, and engineering projects
            </p>
            <div className="text-center">
              <a
                href="#"
                className="px-6 py-3 bg-portfolio-purple text-white font-medium rounded-md hover:bg-portfolio-darkPurple transition-colors duration-300 inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download SDE Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
