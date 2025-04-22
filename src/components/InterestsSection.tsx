
import { Heart } from "lucide-react";

interface Interest {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const interests: Interest[] = [
  {
    title: "Travel",
    description: "Exploring new cultures and places around the world",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Photography",
    description: "Capturing moments and telling stories through images",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Hiking",
    description: "Exploring nature and enjoying the great outdoors",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15L13 21.5L21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 11L13 17.5L21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7L13 13.5L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Reading",
    description: "Expanding my knowledge through books and articles",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="section-padding bg-portfolio-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">Personal Interests</h2>
        <p className="section-subtitle text-center">
          A glimpse into my hobbies and passions outside of work
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center shadow-sm card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-portfolio-lightPurple flex items-center justify-center text-portfolio-purple">
                {interest.icon}
              </div>
              <h3 className="text-xl font-bold text-portfolio-dark mb-2">
                {interest.title}
              </h3>
              <p className="text-gray-600">{interest.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-portfolio-dark mb-4 text-center">
            More About My Interests
          </h3>
          <div className="text-gray-700 space-y-4">
            <p>
              This is a space where you can elaborate more on your personal interests and hobbies. 
              Share a bit more about what you enjoy doing outside of work and why these activities 
              are important to you.
            </p>
            <p>
              You could talk about how your hobbies have shaped your personal and professional life, 
              how they help you relax and recharge, or how they've contributed to your creative thinking 
              and problem-solving skills.
            </p>
            <p>
              This is also a great place to show your personality and help potential employers or 
              collaborators get to know you better as a person, not just as a professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
