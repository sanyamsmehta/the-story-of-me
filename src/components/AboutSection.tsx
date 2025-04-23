
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title text-center mb-8">About Me</h2>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          I'm a technically grounded Product Manager and Software Engineer with a focus on building user-first, scalable solutions. With experience at organizations like Epic Games and the United Nations, I've led end-to-end product development — from defining roadmaps and running user research to architecting backend systems and optimizing interfaces.
        </p>
        <p className="text-lg text-foreground leading-relaxed mb-6">
          My background in engineering enables me to work seamlessly with developers, while my product mindset ensures we're always solving the right problems.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Currently pursuing a Master's in Information Management at the University of Washington, I bring clarity, curiosity, and execution to every stage of the product lifecycle.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
