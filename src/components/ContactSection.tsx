
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title text-center">Contact Me</h2>
        <p className="section-subtitle text-center">
          I'm always open to discussing new opportunities and ideas
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Get in touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out if you're looking for a product manager, a developer, 
              or just want to connect.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:sanyam.mehta93@gmail.com" 
                className="flex items-center gap-3 text-foreground hover:text-gray-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>sanyam.mehta93@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sanyammehta/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-foreground hover:text-gray-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/sanyammehta</span>
              </a>
              
              <a 
                href="https://github.com/sanyammehta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-foreground hover:text-gray-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/sanyammehta</span>
              </a>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-xl font-bold mb-4 text-foreground">Send me a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-foreground text-background py-2 px-4 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
