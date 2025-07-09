import React from "react";
import { Users, Code2 } from "lucide-react";
import profileImage from "../assets/profile.png";
import "./About.scss";

const About = () => {
  return (
    <section className="about-section">
      <div className="imageContainer1">
        <img src={profileImage} alt="Rahul's Profile" />
      </div>

      <div className="about-content">
        <p className="subtitle">Get To Know More</p>
        <h1 className="title">About Me</h1>

        <p className="intro">
          Hi, I'm <strong className="highlight">Rahul</strong> 👋
          <br />
          <br />
          Over the last <strong>3 years</strong>, I've developed strong frontend
          and backend skills to deliver <span className="highlight">scalable</span>,{" "}
          <span className="highlight">intuitive</span>, and{" "}
          <span className="highlight">modern</span> web applications.
        </p>

        <div className="cards">
          {/* Education */}
          <div className="card">
            <Users size={28} className="card-icon" />
            <div>
              <h3>Education</h3>
              <p>B.E. Computer Science</p>
              <p>Panjab University, Chandigarh</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="card">
            <Code2 size={28} className="card-icon" />
            <div>
              <h3>Tech Stack</h3>
              <p>
                I specialize in a wide range of languages, frameworks, and tools
                that enable me to build robust web apps with smooth UX.
              </p>
            </div>
          </div>
        </div>

        <p className="description">
          Outside of coding, I love exploring new technologies, contributing to
          open-source, and collaborating on exciting projects. I enjoy solving
          real-world problems and building meaningful products.
        </p>
      </div>
    </section>
  );
};

export default About;
