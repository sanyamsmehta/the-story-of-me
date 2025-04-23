
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-portfolio-dark to-portfolio-light pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-action">
          Hi, I'm <span className="text-action">Sanyam Mehta</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Product Management | Backend-Engineering | DevOps
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-action text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
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
