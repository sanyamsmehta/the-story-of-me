
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Product Manager",
    company: "Company Name",
    period: "Jan 2022 - Present",
    description: [
      "Led cross-functional teams to develop and launch multiple successful product features",
      "Defined product strategy and roadmap based on market analysis and user feedback",
      "Collaborated with engineering teams to ensure timely and high-quality product delivery",
      "Conducted user research and usability testing to improve product experience"
    ]
  },
  {
    title: "Software Engineer",
    company: "Company Name",
    period: "Jun 2019 - Dec 2021",
    description: [
      "Developed and maintained key features for the company's flagship product",
      "Collaborated with UX designers to implement responsive and accessible interfaces",
      "Optimized application performance, reducing page load time by 40%",
      "Mentored junior developers and participated in code reviews"
    ]
  },
  {
    title: "Junior Developer",
    company: "Company Name",
    period: "Jan 2018 - May 2019",
    description: [
      "Built and maintained web applications using modern JavaScript frameworks",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in agile development processes, including daily stand-ups and sprint planning",
      "Collaborated with the QA team to identify and fix bugs"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-portfolio-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-center">Work Experience</h2>
        <p className="section-subtitle text-center">
          My professional journey and career highlights
        </p>

        <div className="mt-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6 ml-4 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-dark">
                      {exp.title}
                    </h3>
                    <p className="text-portfolio-purple font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-portfolio-purple mr-2 text-lg">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
