import { CheckCircle2 } from "lucide-react";
import "./Experience.scss";

const Experience = () => {
  const frontendSkills = [
    ["HTML", "Experienced"],
    ["CSS", "Experienced"],
    ["SASS", "Intermediate"],
    ["JavaScript", "Experienced"],
    ["TypeScript", "Intermediate"],
    ["ReactJs", "Experienced"],
    ["NextJs", "Experienced"],
    ["TailwindCss", "Experienced"],

  ];

  const backendSkills = [
    ["NodeJs", "Intermediate"],
    ["ExpressJs", "Intermediate"],
    ["Prisma", "Intermediate"],
    ["MongoDB", "Intermediate"],
    ["Postgres", "Basic"],
    
  ];

  const devopsSkills = [
    ["Git", "Intermediate"],
    ["Github", "Intermediate"],
    ["VsCode", "Experienced"],
    ["Linux", "Intermediate"],
  ];

  return (
    <section className="experience-section">
      <h5>Explore My</h5>
      <h2>Experience</h2>

      <div className="experience-container">
        {/* Frontend */}
        <div className="experience-box">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {frontendSkills.map(([tech, level]) => (
              <article key={tech}>
                <CheckCircle2 className="icon" />
                <div>
                  <h4>{tech}</h4>
                  <small>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="experience-box">
          <h3>Backend Development</h3>
          <div className="experience-content">
            {backendSkills.map(([tech, level]) => (
              <article key={tech}>
                <CheckCircle2 className="icon" />
                <div>
                  <h4>{tech}</h4>
                  <small>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DevOps & Tools */}
        <div className="experience-box">
          <h3>Tools</h3>
          <div className="experience-content">
            {devopsSkills.map(([tech, level]) => (
              <article key={tech}>
                <CheckCircle2 className="icon" />
                <div>
                  <h4>{tech}</h4>
                  <small>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
