import React from 'react';
import '../styles/About.scss';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section className="about-body">
      <div className="container">
        <h1>About Me</h1>
        <div className="line"></div>

        <section className="about-section">
          <h2><FaUser /> Background</h2>
          <p>
            Hi, I'm Barrack Amuyunzu, a passionate software developer based in Kenya. My journey into the world of technology started at a young age, driven by curiosity and a desire to understand how things work. This curiosity eventually led me to pursue a career in software development.
          </p>
        </section>
        
        <div className="line"></div>

        <section className="about-section">
          <h2><FaGraduationCap /> Education</h2>
          <p>
            I hold a degree in Computer Science from Kenyatta University. During my studies, I focused on software engineering principles, data structures, and algorithms, gaining a solid foundation in both theoretical and practical aspects of computer science.
          </p>
        </section>
        
        <div className="line"></div>

        <section className="about-section">
          <h2><FaBriefcase /> Career Path</h2>
          <p>
            My professional journey began with an internship at Andela, where I honed my skills in full-stack development. Since then, I have worked with various organizations, contributing to projects involving web development, mobile app development, and cloud computing. Currently, I am a software engineer at Safaricom PLC, where I develop innovative solutions to complex problems.
          </p>
        </section>
        
        <div className="line"></div>

        <section className="about-section">
          <h2><FaMapMarkerAlt /> Current Role</h2>
          <p>
            At Safaricom PLC, I am part of a dynamic team that develops and maintains critical software systems. My role involves designing, developing, and deploying scalable applications that meet the needs of millions of users. I am passionate about leveraging technology to create impactful solutions and continuously learning to stay abreast of the latest industry trends.
          </p>
        </section>
        
        <div className="line"></div>
      </div>
    </section>
  );
};

export default About;
