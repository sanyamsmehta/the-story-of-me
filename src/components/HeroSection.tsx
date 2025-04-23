
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const brandLogos = [
  {
    name: "United Nations OCHA",
    src: "/placeholder.svg", // Replace with uploaded logo path
    alt: "United Nations OCHA Logo",
  },
  {
    name: "Epic Games",
    src: "/placeholder.svg", // Replace with uploaded logo path
    alt: "Epic Games Logo",
  },
  {
    name: "Black Box Ltd",
    src: "/placeholder.svg", // Replace with uploaded logo path
    alt: "Black Box Ltd Logo",
  },
  {
    name: "LTI Mindtree",
    src: "/placeholder.svg", // Replace with uploaded logo path
    alt: "LTI Mindtree Logo",
  },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#10182B] to-[#182238] pt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#F4F7FA]">
          Hi, I'm <span className="text-highlight text-[#1796d2]">Sanyam Mehta</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Product Management | Software Engineering
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/sanyammehta/"
            className="text-[#1796d2] hover:text-white transition-colors"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/sanyammehta"
            className="text-[#1796d2] hover:text-white transition-colors"
            aria-label="GitHub"
            target="_blank" rel="noopener noreferrer"
          >
            <Github size={32} />
          </a>
          <a
            href="mailto:sanyam.mehta93@gmail.com"
            className="text-[#1796d2] hover:text-white transition-colors"
            aria-label="Email"
            target="_blank" rel="noopener noreferrer"
          >
            <Mail size={32} />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center mt-8">
          {brandLogos.map((logo) => (
            <div
              key={logo.name}
              className="bg-[#233E57] rounded-xl p-4 flex items-center justify-center shadow-xl min-w-[120px] min-h-[60px] transition-transform hover:scale-105"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-action text-white font-medium rounded-md hover:bg-[#1474a4] transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-action text-action font-medium rounded-md hover:bg-action/20 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
