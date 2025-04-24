
import React from "react";

const LifeSection = () => (
  <section
    id="life"
    className="section-padding bg-white border-t border-gray-100"
  >
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
        Life
      </h2>
      
      <div className="flex gap-4 overflow-x-auto mb-6 pb-2 scrollbar-hide">
        <img src="/lovable-uploads/4af5dd36-2a8a-45b8-ae30-91f587674bc1.png" alt="Golf" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/81923b10-97c8-475c-ad12-fc2228879c2e.png" alt="Car" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/5f364fc0-1625-4eb1-915e-10b4a9292fe0.png" alt="Chai" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/b7e44e92-1ee6-41c0-9806-9f96112e1230.png" alt="Messi" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/ddfb077f-229c-4a4a-b472-dfafdeace66a.png" alt="Spanish Levels" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/69af06a8-e982-4f40-960f-14e05c4c6b03.png" alt="Book" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/71b5d9b9-b1d3-43dc-82bb-e4a9761a3c77.png" alt="Religious Symbols" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/f37c6385-aea4-4cca-b754-c012db7f4f6e.png" alt="Philosophy" className="h-32 w-auto object-cover rounded-lg" />
        <img src="/lovable-uploads/bd15fd7b-d44b-4c49-a473-01264ea4d535.png" alt="The Office" className="h-32 w-auto object-cover rounded-lg" />
      </div>

      <div className="space-y-6 text-base md:text-lg text-gray-800">
        <p>
          There are a few things that I live for- Driving, Golf, Chai, and the company of my close ones.
          I am really close to my friends and family back home and I love spending time with my 95 year old grandmother.
        </p>
        <p>
          Having travelled to over 25 countries, attending a Christian school for 14 years, living in the middle-east for 3 years, and also now living in the states for 2 years has given me exposure to so many different cultures, religions, and perspectives, that I find it easy to relate to, understand, and connect with people. I speak 5 languages fluently and also completed studying The Delle Level A1,A2, and B1 in Spanish.
        </p>
        <p>
          I love reading philosophical books. Man's Search for Meaning has been my favorite book so far. I am also a staunch believer of Stoicism and I strongly believe that the true path to Happiness lies in Working.
        </p>
        <p>
          The Office, is without a doubt my favorite TV show and has helped me pass some tough times through life laughing.
        </p>
        <p className="italic">
          While this section may seem all over the place, it makes me up.
        </p>
      </div>
    </div>
  </section>
);

export default LifeSection;

