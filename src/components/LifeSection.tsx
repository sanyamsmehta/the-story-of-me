
import React from "react";
import { Car, Golf, TeaCup, Football, Language, Users, Book, TheOffice, Family, Church, Meditation } from "lucide-react";

const LifeSection = () => {
  const interests = [
    { icon: <Car />, text: "Driving" },
    { icon: <Golf />, text: "Golf" },
    { icon: <TeaCup />, text: "Chai" },
    { icon: <Football />, text: "Football & Messi" },
    { icon: <Language />, text: "5 Languages" },
    { icon: <Users />, text: "Extrovert" },
    { icon: <TheOffice />, text: "The Office" },
    { icon: <Book />, text: "Man's Search for Meaning" },
    { icon: <Meditation />, text: "Stoicism" },
    { icon: <Church />, text: "Religious Pilgrimages" },
    { icon: <Family />, text: "Family & Friends" }
  ];

  return (
    <section id="life" className="section-padding border-b border-gray-300 light-section">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-black">Life</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              There are a few things that I live for. Driving, Golf, Chai, and the company of my close ones. I also admire Messi for making me fall in Love with Football.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              I have travelled to over 25 countries and I speak 5 languages fluently. I have lived in 3 different countries. I am extremely extroverted. The Office is one of my favorite TV shows and it has helped me through some tough times. My favorite book is Man's search for Meaning and I strongly believe that work is what leads a person to happiness. I am a staunch believer of Stoicism.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              I am religious too and have been on several religious pilgrimages within my country and outside. I studied in a Christian School for 14 years, lived in the middle east which was for 2 years and now live in the states where people from all around the world reside. This gave me exposure to so many cultures, religions, languages, and perspectives.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              I love meeting new people and knowing their life story. My family and my close friends are who I go to when I need clarity. I also love hanging out with my grandmother in my free time who is 95 years old.
            </p>
            <p className="text-base md:text-lg text-gray-800 italic mt-4">
              While this section may seem all over the place, it makes me up.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Golf image */}
            <img src="/lovable-uploads/f85bbbb3-dfb0-49b4-929c-29c22876da26.png" alt="Playing golf" className="rounded-lg object-cover w-full h-40" />
            {/* Messi image */}
            <img src="/lovable-uploads/cf2d921f-3d07-4440-bee0-fee715416e04.png" alt="Messi" className="rounded-lg object-cover w-full h-40" />
            {/* Car image */}
            <img src="/lovable-uploads/c74bf05b-47eb-4085-8d84-200bcea03e76.png" alt="Car" className="rounded-lg object-cover w-full h-40" />
            {/* Chai image */}
            <img src="/lovable-uploads/c0327af1-828b-4005-9921-26e8c86d94aa.png" alt="Chai" className="rounded-lg object-cover w-full h-40" />
            {/* Golf in Mauritius */}
            <img src="/lovable-uploads/74030212-fac4-4b49-bab8-4cdda83b28f1.png" alt="Golf in Mauritius" className="rounded-lg object-cover w-full h-40" />
            {/* Family */}
            <img src="/lovable-uploads/f21c4906-322d-4bd7-ae49-4a78c344ffab.png" alt="Family" className="rounded-lg object-cover w-full h-40" />
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-8">
          {interests.map((interest, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <div className="text-gray-700 mb-2">{interest.icon}</div>
              <span className="text-sm font-medium text-gray-600">{interest.text}</span>
            </div>
          ))}
        </div>

        {/* Additional images grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <img src="/lovable-uploads/a9c35e8a-ec58-4821-b376-5bcdd9ad2bf8.png" alt="Languages" className="rounded-lg object-cover w-full h-48" />
          <img src="/lovable-uploads/f583393c-ae00-46ae-ad4c-6746797aef57.png" alt="Book" className="rounded-lg object-cover w-full h-48" />
          <img src="/lovable-uploads/868dc36f-3227-4e60-9386-4fa958529e3d.png" alt="The Office" className="rounded-lg object-cover w-full h-48" />
          <img src="/lovable-uploads/d1cdd78d-3f99-434b-8922-7d7fc1e8e3fc.png" alt="Religion" className="rounded-lg object-cover w-full h-48" />
        </div>

        {/* Final image - Grandmother */}
        <div className="mt-12 flex justify-center">
          <img src="/lovable-uploads/b2af9409-6160-4838-b236-aa1039601e63.png" alt="With Grandmother" className="rounded-lg object-cover h-64" />
        </div>
      </div>
    </section>
  );
};

export default LifeSection;
