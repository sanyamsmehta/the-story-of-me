
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Meet Sanyam – bridging product vision & engineering excellence
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-dark">
              My Background
            </h3>
            <p className="text-gray-700">
              Hi, I'm <span className="font-bold text-portfolio-purple">Sanyam Mehta</span>.
              I'm a seasoned software engineer turned product manager—your single-stop candidate for all your product needs. 
              I have a track record of building what you envision and know what it takes, from backend systems to polished user experiences.
            </p>
            <p className="text-gray-700">
              How I can help you: I am a seasoned software engineer turned product manager and I know what goes into building what you envision.
            </p>

            <h3 className="text-2xl font-semibold text-portfolio-dark mt-10">
              Fortes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-portfolio-darkPurple mb-3">
                  Technical
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Backend Engineering</li>
                  <li>DevOps</li>
                  <li>Product Management</li>
                  <li>Software Architecture</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-portfolio-darkPurple mb-3">
                  Professional
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>People Management</li>
                  <li>Strategic Planning</li>
                  <li>User Research</li>
                  <li>Cross-functional Leadership</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-portfolio-lightPurple rounded-lg p-4 md:p-8 h-full">
              <div className="aspect-square rounded-lg bg-gray-200 mb-6 overflow-hidden flex items-center justify-center">
                <img
                  src="/public/lovable-uploads/7e855a4c-df09-44c0-8e3c-9f34caeef668.png"
                  alt="Sanyam Mehta"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Email
                  </h4>
                  <p className="text-portfolio-dark">sanyam77@uw.edu</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Location
                  </h4>
                  <p className="text-portfolio-dark">Seattle, WA</p>
                </div>
                <div className="pt-4 flex gap-4">
                  <a href="https://linkedin.com/in/sanyammehta" className="text-gray-600 hover:text-portfolio-purple transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="https://github.com/sanyamsmehta" className="text-gray-600 hover:text-portfolio-purple transition-colors text-2xl" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">GitHub</span>
                    <i className="ri-github-fill"></i>
                  </a>
                  <a href="mailto:sanyam77@uw.edu" className="text-gray-600 hover:text-portfolio-purple transition-colors text-2xl">
                    <span className="sr-only">Email</span>
                    <i className="ri-mail-fill"></i>
                  </a>
                  {/* Add more socials if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
