
import { useEffect } from "react";
import Layout from "../components/Layout";
import AboutHeroSection from "../components/AboutHeroSection";
import AcademicSection from "../components/AcademicSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ResumeSection from "../components/ResumeSection";

const LifeSection = () => (
  <section
    id="life"
    className="section-padding border-b border-gray-300"
    style={{
      backgroundColor: "#FFFFFF",
    }}
  >
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-black">Life</h2>
      <div className="text-base md:text-lg text-gray-800">[Add your content here]</div>
    </div>
  </section>
);

const LightThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <div 
    className="transition-colors duration-300" 
    style={{ 
      backgroundColor: "#FFFFFF",
      color: "#000000"
    }}
  >
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
        <ResumeSection />
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
