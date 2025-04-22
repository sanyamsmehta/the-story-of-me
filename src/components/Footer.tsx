
const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold">
              Your Name
            </a>
            <p className="text-gray-400 mt-2">
              Product Manager & Software Engineer
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <span className="sr-only">LinkedIn</span>
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <span className="sr-only">GitHub</span>
              <i className="ri-github-fill"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <span className="sr-only">Twitter</span>
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
              <span className="sr-only">Email</span>
              <i className="ri-mail-fill"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
