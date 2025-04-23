
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

// Change the photo to your real path if you upload yours
const profilePhoto =
  "/public/lovable-uploads/7398147a-1758-4d9a-87f7-bc11d011b63e.png";

const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-background pt-16 pb-6">
      {/* Profile Photo at the very top */}
      <div className="flex justify-center mb-6">
        <img
          src={profilePhoto}
          alt="Sanyam Mehta"
          className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm"
          style={{ background: "#eee" }}
        />
      </div>
      {/* Social Links directly beneath the photo */}
      <div className="flex justify-center gap-8 mb-8">
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
    </section>
  );
};

export default HeroSection;
