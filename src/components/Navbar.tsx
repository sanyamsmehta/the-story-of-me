
import { useState, useEffect } from "react";
import { FileText } from "lucide-react";

// Nav items in new order: Home, Work, Academics, Skills, Projects, Life, Contact, Resume
interface NavItem {
  title: string;
  href: string;
  icon?: JSX.Element;
}

const navItems: NavItem[] = [
  { title: "Home", href: "#about" },
  { title: "Work", href: "#experience" },
  { title: "Academics", href: "#academic" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Life", href: "#life" },
  { title: "Contact", href: "#contact" },
  { title: "Resume", href: "#resume", icon: <FileText size={18} /> },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Trigger name after About section is out of view (~about section height)
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const bottom = aboutSection.offsetTop + aboutSection.offsetHeight;
        setShowName(window.scrollY + 120 >= bottom);
      }

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

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
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left part: show name after About section */}
        <div
          className={`transition-opacity duration-500 font-extrabold text-lg md:text-2xl text-white ${
            showName ? "opacity-100" : "opacity-0"
          }`}
          style={{
            minWidth: "160px",
            pointerEvents: showName ? "auto" : "none",
          }}
        >
          Sanyam Mehta
        </div>
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
                {item.icon && <span className="ml-1">{item.icon}</span>}
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
