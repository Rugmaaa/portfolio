import React from 'react';
import profile from '../../assets/images.png';
import './About.css'; // Import your CSS file

function About() {
  return (
    <div className="About">
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate developer with experience in React, Node.js, and modern web technologies.
      </p>
      <div>
        <img src={profile} alt='Profile' className='About_img' />
        <div className="profile-info">
          <h2>Web Developer</h2>
          <p>
            I specialize in creating dynamic and responsive websites using modern web technologies. I enjoy problem-solving and continuous learning to stay up-to-date with the latest industry trends.
          </p>
        </div>
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>Redux</li>
          <li>Version Control (Git)</li>
          <li>API Development</li>
        </ul>
      </div>
      <div>
        <h3>Education</h3>
        <ul className="education-list">
          <li>
            <strong>Undergraduate (UG):</strong> Bachelor of Technology (B.Tech) in Computer Science from XYZ University, 2018-2022
          </li>
          <li>
            <strong>Postgraduate (PG):</strong> Master of Technology (M.Tech) in Software Engineering from ABC University, 2022-2024
          </li>
          <li>
            <strong>Plus Two (Higher Secondary):</strong> Science (PCMB) from XYZ High School, 2016-2018
          </li>
          <li>
            <strong>SSLC (Secondary School):</strong> XYZ High School, 2016
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
