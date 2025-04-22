
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Here's a little bit about who I am and what I do
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-portfolio-dark">
              My Background
            </h3>
            <p className="text-gray-700">
              I'm a passionate professional with experience in both product management and software engineering. I enjoy solving complex problems and creating intuitive user experiences that make a difference.
            </p>
            <p className="text-gray-700">
              With a background in [your background], I've developed a strong foundation in [relevant skills]. My approach combines technical expertise with business acumen to deliver results that matter.
            </p>
            
            <h3 className="text-2xl font-semibold text-portfolio-dark mt-10">
              My Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-portfolio-darkPurple mb-3">
                  Technical
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-portfolio-darkPurple mb-3">
                  Professional
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-portfolio-lightPurple rounded-lg p-4 md:p-8 h-full">
              <div className="aspect-square rounded-lg bg-gray-200 mb-6 overflow-hidden">
                {/* You can add your image here, replace the placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Your Photo Here
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Email
                  </h4>
                  <p className="text-portfolio-dark">youremail@example.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Location
                  </h4>
                  <p className="text-portfolio-dark">Your Location</p>
                </div>
                <div className="pt-4 flex gap-4">
                  {/* Social icons - replace with your actual social links */}
                  <a href="#" className="text-gray-600 hover:text-portfolio-purple transition-colors text-2xl">
                    <span className="sr-only">LinkedIn</span>
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-portfolio-purple transition-colors text-2xl">
                    <span className="sr-only">GitHub</span>
                    <i className="ri-github-fill"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-portfolio-purple transition-colors text-2xl">
                    <span className="sr-only">Twitter</span>
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-portfolio-purple transition-colors text-2xl">
                    <span className="sr-only">Email</span>
                    <i className="ri-mail-fill"></i>
                  </a>
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
