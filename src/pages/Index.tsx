
import { useEffect } from "react";
import Layout from "../components/Layout";
import AboutHeroSection from "../components/AboutHeroSection";
import AcademicSection from "../components/AcademicSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const LifeSection = () => (
  <section
    id="life"
    className="section-padding bg-white text-gray-900 border-b border-gray-300"
    style={{
      // Faint glass touch in light mode
      backdropFilter: "blur(2px)",
      background: "rgba(255,255,255,0.94)",
    }}
  >
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Life</h2>
      <div className="text-base md:text-lg text-gray-700">[Add your content here]</div>
    </div>
  </section>
);

const LightThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white text-gray-900 transition-colors duration-300">
    {children}
  </div>
);

const Index = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <Layout>
      <AboutHeroSection />
      <LightThemeWrapper>
        <ExperienceSection />
        <SkillsSection />
        <AcademicSection />
        <ProjectsSection />
        <LifeSection />
        <ContactSection />
      </LightThemeWrapper>
    </Layout>
  );
};

export default Index;
