
import { useState, useEffect } from "react";
import { FileText, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

// Nav items in new order: Home, About, Work, Academics, Skills, Projects, Life, Contact
interface NavItem {
  title: string;
  href?: string;
  icon?: JSX.Element;
  isDropdown?: boolean;
}

const navItems: NavItem[] = [
  { title: "Home", href: "#about" },
  { title: "About", href: "#about" },
  { title: "Work", href: "#experience" },
  { title: "Academics", href: "#academic" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Life", href: "#life" },
  { title: "Contact", href: "#contact" },
  { title: "Resume", isDropdown: true, icon: <FileText size={18} /> },
];

const resumeOptions = [
  {
    label: "Software Engineer Resume",
    url: "/SanyamMehta_SDE_Resume.pdf",
  },
  {
    label: "Product Manager Resume",
    url: "/SanyamMehta_PM_Resume.pdf",
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showName, setShowName] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const handleNavClick = (href: string | undefined) => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
    if (!href) return;
  };

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
          className={`transition-opacity duration-500 font-extrabold text-sm md:text-base text-white ${
            showName ? "opacity-100" : "opacity-0"
          }`}
          style={{
            minWidth: "160px",
            pointerEvents: showName ? "auto" : "none",
          }}
        >
          Sanyam Mehta
        </div>

        {/* Mobile menu toggle button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <Menu size={24} />
          </button>
        )}

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#101010]/95 border-b border-muted overflow-hidden md:hidden">
            <ScrollArea className="max-h-[70vh]">
              <div className="py-2">
                {navItems.map((item, idx) => (
                  <div key={item.title} className="px-4 py-2">
                    {item.isDropdown ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className={`nav-link tracking-wide font-medium text-base transition relative flex items-center w-full
                            ${activeSection === "resume"
                              ? "text-white"
                              : "text-gray-400 hover:text-white"}`}
                        >
                          {item.icon}
                          <span className="ml-1">{item.title}</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#101010] border-muted">
                          {resumeOptions.map((option) => (
                            <DropdownMenuItem key={option.label}>
                              <a
                                href={option.url}
                                download
                                className="text-gray-300 hover:text-white w-full"
                              >
                                {option.label}
                              </a>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <a
                        href={item.href}
                        className={`block py-2 text-base
                          ${activeSection === item.href?.substring(1)
                            ? "text-white"
                            : "text-gray-400 hover:text-white"}`}
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <li key={item.title} className={idx === navItems.length - 1 ? "ml-8" : ""}>
              {item.isDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`nav-link tracking-wide font-medium text-base transition relative flex items-center
                      ${activeSection === "resume"
                        ? "text-white after:scale-x-100"
                        : "text-gray-400 hover:text-white"}`}
                  >
                    {item.icon}
                    <span className="ml-1">{item.title}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#101010] border-muted">
                    {resumeOptions.map((option) => (
                      <DropdownMenuItem key={option.label}>
                        <a
                          href={option.url}
                          download
                          className="text-gray-300 hover:text-white w-full"
                        >
                          {option.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  href={item.href}
                  className={`nav-link tracking-wide font-medium text-base transition relative
                    ${activeSection === item.href?.substring(1)
                      ? "text-white after:scale-x-100"
                      : "text-gray-400 hover:text-white"}`}
                  style={{ textTransform: "none" }}
                >
                  {item.title}
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${activeSection === item.href?.substring(1) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
