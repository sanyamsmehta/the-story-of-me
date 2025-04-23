
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const profilePhoto = "/lovable-uploads/c3aee9cb-ac30-4fbb-b34c-58690975633a.png";
const linkedIn = "https://www.linkedin.com/in/sanyammehta/";
const github = "https://github.com/sanyammehta";
const mail = "mailto:sanyam.mehta93@gmail.com";

const AboutHeroSection = () => (
  <section id="about" className="section-padding bg-[#101010] flex items-center justify-center min-h-[600px] border-b border-muted">
    <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row gap-12 items-center animate-fade-in">
      {/* Left: About Text */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-2">
        <div className="text-[#ececec] text-2xl font-semibold mb-6">About Me</div>
        <div className="text-lg text-gray-200 leading-relaxed text-balance">
          Technically grounded Product Manager and Software Engineer with a focus on building user-first, scalable solutions. With experience at organizations like Epic Games and the United Nations, I've led end-to-end product development — from defining roadmaps and running user research to architecting backend systems and optimizing interfaces. My background in engineering enables me to work seamlessly with developers, while my product mindset ensures we're always solving the right problems. Currently pursuing a Master's in Information Management at the University of Washington, I bring clarity, curiosity, and execution to every stage of the product lifecycle.
        </div>
      </div>

      {/* Right: Photo, Name, Tag, Socials */}
      <div className="flex flex-col items-center md:items-start w-full md:w-2/5">
        {/* Profile Picture */}
        <div className="rounded-full overflow-hidden border-4 border-white/10 shadow-lg mb-6 w-48 h-48 bg-muted">
          <img
            src={profilePhoto}
            alt="Sanyam Mehta"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-1">Sanyam Mehta</h1>
        <div className="text-lg md:text-xl text-gray-400 mb-6">Product Management <span className="mx-1 text-gray-500">|</span> Software Engineer</div>
        {/* Social Icons with subtle creative touch */}
        <div className="flex gap-7 mb-2">
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="group hover:scale-110 transition-all duration-200 relative">
            <div className="bg-white p-2.5 rounded-full shadow-md border-2 border-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition">
              <Linkedin size={27} color="#0077b5" className="group-hover:text-white" />
            </div>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="group hover:scale-110 transition-all duration-200 relative">
            <div className="bg-white p-2.5 rounded-full shadow-md border-2 border-[#161b22] group-hover:bg-[#161b22] group-hover:text-white transition">
              <Github size={27} color="#181717" className="group-hover:text-white" />
            </div>
          </a>
          <a href={mail} target="_blank" rel="noopener noreferrer" aria-label="Email"
            className="group hover:scale-110 transition-all duration-200 relative">
            <div className="bg-white p-2.5 rounded-full shadow-md border-2 border-gray-400 group-hover:bg-black group-hover:text-white transition">
              <Mail size={27} color="#202124" className="group-hover:text-white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
