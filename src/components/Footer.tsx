
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Sanyam Mehta. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#academic" className="text-sm text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                  Academic
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
