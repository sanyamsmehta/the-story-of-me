
import React from "react";

const LifeSection = () => (
  <section
    id="life"
    className="section-padding border-b border-gray-300 light-section"
  >
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-black">Life</h2>
      
      <div className="flex gap-4 overflow-x-auto mb-6 pb-2 scrollbar-hide">
        <img src="/lovable-uploads/b7e44e92-1ee6-41c0-9806-9f96112e1230.png" alt="Messi" className="h-40 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/4af5dd36-2a8a-45b8-ae30-91f587674bc1.png" alt="Golf" className="h-40 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/81923b10-97c8-475c-ad12-fc2228879c2e.png" alt="Car" className="h-40 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/5f364fc0-1625-4eb1-915e-10b4a9292fe0.png" alt="Chai" className="h-40 w-auto object-cover rounded-lg" />
      </div>

      <div className="space-y-6 text-base md:text-lg text-gray-800">
        <p>
          There are a few things that I live for- Driving, Golf, Chai, and the company of my close ones. 
          I also admire Messi for making me fall in Love with Football.
        </p>
        <p>
          I have travelled to over 25 countries and I speak 5 languages fluently. I have lived in 3 different countries. 
          I am extremely extroverted. The Office is one of my favorite TV shows and it has helped me through some tough times.
        </p>
        <p>
          My favorite book is Man's search for Meaning and I strongly believe that work is what leads a person to happiness. 
          I am a staunch believer of Stoicism. I am religious too and have been on several religious pilgrimages within my country and outside.
        </p>
        <p>
          I studied in a Christian School for 14 years, lived in the middle east which was for 2 years and now live in the states 
          where people from all around the world reside. This gave me exposure to so many cultures, religions, languages, and perspectives.
        </p>
        <p>
          I love meeting new people and knowing their life story. My family and my close friends are who I go to when I need clarity.
        </p>
        <p className="italic">
          While this section may seem all over the place, it makes me up.
        </p>
      </div>
    </div>
  </section>
);

export default LifeSection;
