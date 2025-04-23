
import { useEffect } from "react";
import Layout from "../components/Layout";
import AboutHeroSection from "../components/AboutHeroSection";
import AcademicSection from "../components/AcademicSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Enable smooth scrolling for navbar links
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
      <ExperienceSection />
      <SkillsSection />
      <AcademicSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
