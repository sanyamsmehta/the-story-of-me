
import { useState, useEffect } from "react";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Work", href: "#experience" },
  { title: "Academics", href: "#academic" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
  { title: "Resume", href: "#resume" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for navbar

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
          ? "bg-[#101010]/95 shadow-md py-4 border-b border-muted"
          : "bg-transparent py-7"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-end items-center">
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className={`nav-link tracking-wide font-medium text-base transition relative
                  ${activeSection === item.href.substring(1)
                    ? "text-white after:scale-x-100"
                    : "text-gray-400 hover:text-white"}`
                }
                style={{ textTransform: "none" }}
              >
                {item.title}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
