
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const profilePhoto =
  "/public/lovable-uploads/7398147a-1758-4d9a-87f7-bc11d011b63e.png";

const HeroSection = () => {
  return (
    <section className="min-h-[100vh] flex flex-col items-center justify-center bg-background pt-20 pb-6">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img
            src={profilePhoto}
            alt="Sanyam Mehta"
            className="w-36 h-36 rounded-full object-cover border-2 border-border shadow-sm"
            style={{ background: "#eee" }}
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Sanyam Mehta</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Product Manager & Software Engineer
        </p>
        
        <div className="flex justify-center gap-8 mb-10">
          <a
            href="https://www.linkedin.com/in/sanyammehta/"
            className="hover:opacity-70 transition-colors"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/sanyammehta"
            className="hover:opacity-70 transition-colors"
            aria-label="GitHub"
            target="_blank" rel="noopener noreferrer"
          >
            <Github size={32} />
          </a>
          <a
            href="mailto:sanyam.mehta93@gmail.com"
            className="hover:opacity-70 transition-colors"
            aria-label="Email"
            target="_blank" rel="noopener noreferrer"
          >
            <Mail size={32} />
          </a>
        </div>
        
        <div className="animate-bounce mt-16">
          <a href="#about" aria-label="Scroll down">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
