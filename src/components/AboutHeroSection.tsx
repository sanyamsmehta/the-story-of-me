
import React from "react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const profilePhoto = "/lovable-uploads/c3aee9cb-ac30-4fbb-b34c-58690975633a.png";
const linkedIn = "https://www.linkedin.com/in/sanyammehta/";
const github = "https://github.com/sanyamsmehta";
const mail = "mailto:sanyam.mehta93@gmail.com";
const phoneNumber = "#contact"; // Scrolls to contact section

const AboutHeroSection = () => (
  <section
    id="about"
    className="section-padding bg-[#101010] flex items-center justify-center min-h-[600px] border-b border-muted"
  >
    <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row gap-14 items-center animate-fade-in">
      {/* Left: Photo, Name, Tag, Socials */}
      <div className="flex flex-col items-center w-full md:w-2/5">
        {/* Profile Picture */}
        <div className="rounded-full overflow-hidden border-4 border-white/10 shadow-lg mb-5 mt-5 w-56 h-56 bg-muted flex items-center justify-center mx-auto">
          <img
            src={profilePhoto}
            alt="Sanyam Mehta"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Name and Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 text-center">Sanyam Mehta</h1>
        <div className="text-md md:text-lg text-gray-400 mb-5 text-center">
          Product Management <span className="mx-1 text-gray-500">|</span> Software Engineering
        </div>
        {/* Social Icons & Phone */}
        <div className="flex gap-4 mb-2">
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className="bg-[#0077b5]/10 p-1.5 rounded-full shadow-md border-2 border-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition flex items-center justify-center">
              <Linkedin size={22} color="#0077b5" className="group-hover:text-white" />
            </div>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className="bg-[#161b22]/10 p-1.5 rounded-full shadow-md border-2 border-[#161b22] group-hover:bg-[#161b22] group-hover:text-white transition flex items-center justify-center">
              <Github size={22} color="#181717" className="group-hover:text-white" />
            </div>
          </a>
          <a
            href={mail}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className="bg-gray-400/10 p-1.5 rounded-full shadow-md border-2 border-gray-400 group-hover:bg-black group-hover:text-white transition flex items-center justify-center">
              <Mail size={22} color="#202124" className="group-hover:text-white" />
            </div>
          </a>
          {/* Phone icon, scrolls to contact section */}
          <a
            href={phoneNumber}
            aria-label="Phone"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className="bg-[#0FA0CE]/10 p-1.5 rounded-full shadow-md border-2 border-[#0FA0CE] group-hover:bg-[#0FA0CE] group-hover:text-white transition flex items-center justify-center">
              <Phone size={22} color="#0FA0CE" className="group-hover:text-white" />
            </div>
          </a>
        </div>
      </div>

      {/* Right: About Text */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-2">
        <div className="text-[#ececec] text-[1.05rem] font-bold mb-4 font-sans">About Me</div>
        <div
          className="text-[0.88rem] md:text-[0.965rem] leading-[1.75] text-[#d8dee9] font-[400]"
          style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}
        >
          Technically grounded Product Manager and Software Engineer with a focus on building user-first, scalable solutions. With experience at organizations like Epic Games and the United Nations, I've led end-to-end product development — from defining roadmaps and running market research to solutioning backend architectures, APIs, databases, and deploying and scaling infrastructure. My background in engineering enables me to work seamlessly with developers, while my product mindset ensures we're always solving the right problems. Pursue a Master's in Information Management at the University of Washington, I bring clarity, curiosity, and execution to every stage of the product lifecycle.
        </div>
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
