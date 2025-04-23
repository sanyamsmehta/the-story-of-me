
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

// Change the photo to your real path if you upload yours
const profilePhoto =
  "/public/lovable-uploads/7398147a-1758-4d9a-87f7-bc11d011b63e.png";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-[#DAEEFB] pt-24 pb-6">
      <div className="w-full max-w-xl mx-auto px-6 py-10 text-center bg-white/95 rounded-2xl shadow-lg border border-blue-50">
        {/* View CV button */}
        <div className="flex justify-center mb-4">
          <a
            href="#resume"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow-sm hover:bg-blue-700 transition-colors duration-200 text-base"
          >
            View CV
          </a>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center mb-8">
          <img
            src={profilePhoto}
            alt="Sanyam Mehta"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-sm"
            style={{ background: "#e3eefc" }}
          />
        </div>

        {/* Name and Roles */}
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-blue-900">
          Hi, I'm{" "}
          <span className="text-blue-600">Sanyam Mehta</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-7">
          Product Management&nbsp;|&nbsp;Software Engineering
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-0">
          <a
            href="https://www.linkedin.com/in/sanyammehta/"
            className="text-blue-700 hover:text-blue-900 transition-colors"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/sanyammehta"
            className="text-blue-700 hover:text-blue-900 transition-colors"
            aria-label="GitHub"
            target="_blank" rel="noopener noreferrer"
          >
            <Github size={32} />
          </a>
          <a
            href="mailto:sanyam.mehta93@gmail.com"
            className="text-blue-700 hover:text-blue-900 transition-colors"
            aria-label="Email"
            target="_blank" rel="noopener noreferrer"
          >
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
