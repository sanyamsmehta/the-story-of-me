
import React from "react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const profilePhoto = "/lovable-uploads/c3aee9cb-ac30-4fbb-b34c-58690975633a.png";
const linkedIn = "https://www.linkedin.com/in/sanyammehta/";
const github = "https://github.com/sanyamsmehta";
const mail = "mailto:sanyam.mehta93@gmail.com";
const phoneNumber = "#contact";

const iconSize = Math.round(26 * 0.77); // ~20px for 77% of 26
const iconContainer =
  "bg-[#191919] p-2 rounded-full shadow-md border-2 border-[#404040] hover:bg-[#282828] transition flex items-center justify-center";

const AboutHeroSection = () => (
  <div
    id="about"
    className="section-padding bg-[#101010] flex items-center justify-center min-h-[75vh] border-b border-muted"
  >
    <div className="max-w-6xl w-full mx-auto px-6 flex flex-col md:flex-row gap-14 items-center animate-fade-in">
      <div className="flex flex-col items-center w-full md:w-2/5">
        <div className="rounded-full overflow-hidden border-4 border-white/10 shadow-lg mb-5 mt-5 w-[23rem] h-[23rem] bg-muted flex items-center justify-center mx-auto">
          <img
            src={profilePhoto}
            alt="Sanyam Mehta"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1 text-center">Sanyam Mehta</h1>
        <div className="text-md md:text-lg text-gray-400 mb-5 text-center">
          Product Management <span className="mx-1 text-gray-500">|</span> Software Engineering
        </div>
        <div className="flex gap-4 mb-2">
          <a
            href={phoneNumber}
            aria-label="Phone"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className={iconContainer}>
              <Phone size={iconSize} color="#fff" />
            </div>
          </a>
          <a
            href={mail}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className={iconContainer}>
              <Mail size={iconSize} color="#fff" />
            </div>
          </a>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className={iconContainer}>
              <Linkedin size={iconSize} color="#fff" />
            </div>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group hover:scale-110 transition-all duration-200"
          >
            <div className={iconContainer}>
              <Github size={iconSize} color="#fff" />
            </div>
          </a>
        </div>
      </div>
      <div className="w-full md:w-3/5 flex flex-col justify-center px-2">
        <div className="text-[#ececec] text-[1.05rem] font-bold mb-4 font-sans">About Me</div>
        <div
          className="text-[0.88rem] md:text-[0.965rem] leading-[1.75] text-[#d8dee9] font-[400]"
          style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}
        >
          Software Engineer turned Product Manager focusing on building products that make sense.
          <br /><br />
          With experience at organizations like Epic Games and the United Nations, I've led end-to-end product developments - from understanding current state, defining MVPs and roadmaps to solutioning backend architectures, APIs, databases, and deploying and scaling infrastructure.
          <br /><br />
          My background in engineering enables me to work seamlessly with developers, while my product mindset ensures we're always solving the right problems.
          <br /><br />
          Pursuing a Master's in Information Management at the University of Washington, I bring clarity, curiosity, and execution to every stage of the product lifecycle.
        </div>
      </div>
    </div>
  </div>
);

export default AboutHeroSection;

