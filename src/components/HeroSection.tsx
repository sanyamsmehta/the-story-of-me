
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-portfolio-light to-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-dark">
          Hi, I'm <span className="text-portfolio-purple">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Product Manager & Software Engineer with a passion for building
          impactful products that solve real problems.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-portfolio-purple text-white font-medium rounded-md hover:bg-portfolio-darkPurple transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-portfolio-purple text-portfolio-purple font-medium rounded-md hover:bg-portfolio-lightPurple transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
