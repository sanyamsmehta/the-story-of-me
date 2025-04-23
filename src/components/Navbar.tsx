
import { useState, useEffect } from "react";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "About", href: "#about" },
  { title: "Academic", href: "#academic" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 80;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md py-3 border-b border-gray-200 dark:bg-black/95 dark:border-gray-800"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          Sanyam Mehta
        </a>
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-gray-600 ${
                  activeSection === item.href.substring(1)
                    ? "text-black dark:text-white underline underline-offset-4"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
