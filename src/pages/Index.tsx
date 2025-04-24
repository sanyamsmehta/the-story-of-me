
import { useEffect } from "react";
import Layout from "../components/Layout";
import AboutHeroSection from "../components/AboutHeroSection";
import AcademicSection from "../components/AcademicSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import LifeSection from "../components/LifeSection";

const LightThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="transition-colors duration-300 bg-pure-white text-pure-black">
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
      <section className="dark-section">
        <AboutHeroSection />
      </section>
      <LightThemeWrapper>
        <ExperienceSection />
        <AcademicSection />
        <SkillsSection />
        <ProjectsSection />
        <LifeSection />
        <ContactSection />
      </LightThemeWrapper>
    </Layout>
  );
};

export default Index;
