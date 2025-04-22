
import React from "react";

// Use the uploaded photo – replace with correct file name if different!
const sanyamPhoto = "/public/lovable-uploads/photo-1649972904349-6e44c42644a7"; // Use a professional photo if available

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={sanyamPhoto}
            alt="Sanyam Mehta"
            className="w-56 h-56 object-cover rounded-full shadow-lg border-4 border-portfolio-lightPurple"
          />
        </div>
        <div className="flex-1">
          <h2 className="section-title mb-3">Hi, I'm Sanyam Mehta</h2>
          <p className="text-xl text-gray-700 mb-6">
            I am a single stop candidate for all your product needs – a seasoned software engineer turned product manager. I know what goes into building what you envision.
          </p>
          <div className="mb-3">
            <strong className="block text-lg text-portfolio-dark mb-1">How I can help you:</strong>
            <span className="text-gray-600">
              I bring product ownership, deep technical know-how, and the ability to bridge engineering and business for maximum impact.
            </span>
          </div>
          <div>
            <strong className="block text-lg text-portfolio-dark mb-1">Fortes:</strong>
            <ul className="list-disc list-inside text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <li>Product Management</li>
              <li>Backend Engineering</li>
              <li>DevOps</li>
              <li>People Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

