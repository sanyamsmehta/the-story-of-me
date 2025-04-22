
const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-portfolio-dark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-center">
          Interested in working together or have a question? Feel free to contact me.
        </p>

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple text-white"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-portfolio-purple text-white font-medium rounded-md hover:bg-portfolio-darkPurple transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
