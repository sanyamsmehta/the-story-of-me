
import { useState, useEffect } from "react";

interface NavItem {
  title: string;
  href: string;
}

// Visible on all viewports, no mobile menu/drawer
const navItems: NavItem[] = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Interests", href: "#interests" },
  { title: "Resume", href: "#resume" },
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
          ? "bg-white/95 shadow-md py-3 border-b border-blue-50"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-900">
          Sanyam Mehta
        </a>
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-600 underline underline-offset-4"
                    : "text-blue-900"
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
