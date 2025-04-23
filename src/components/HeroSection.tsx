
import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

// Change the photo to your real path if you upload yours
const profilePhoto =
  "/public/lovable-uploads/7398147a-1758-4d9a-87f7-bc11d011b63e.png";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background pt-24 pb-6">
      <div className="w-full max-w-xl mx-auto px-6 py-10 text-center bg-card rounded-2xl shadow-lg border border-border">
        {/* Profile Photo */}
        <div className="flex justify-center mb-8">
          <img
            src={profilePhoto}
            alt="Sanyam Mehta"
            className="w-28 h-28 rounded-full object-cover border-4 border-border shadow-sm"
            style={{ background: "#eee" }}
          />
        </div>

        {/* Name and Roles */}
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-foreground">
          Hi, I'm{" "}
          <span className="font-bold">Sanyam Mehta</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-7">
          Product Management&nbsp;|&nbsp;Software Engineering
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-0">
          <a
            href="https://www.linkedin.com/in/sanyammehta/"
            className="text-foreground hover:opacity-70 transition-colors"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/sanyammehta"
            className="text-foreground hover:opacity-70 transition-colors"
            aria-label="GitHub"
            target="_blank" rel="noopener noreferrer"
          >
            <Github size={32} />
          </a>
          <a
            href="mailto:sanyam.mehta93@gmail.com"
            className="text-foreground hover:opacity-70 transition-colors"
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
