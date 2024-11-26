import React from 'react';
import profile from '../../assets/images.png';
import ug from '../../assets/ug.png';
import hse from '../../assets/hse.png';
import './About.css';

function About() {
  return (
    <div className="About">
      <h1 className="about-head">About Me</h1>
      <img src={profile} alt="Profile of Rugma" className="about-image" />
      <h2>Rugma</h2>
      <p><strong>Age:</strong> 21</p>
      <p><strong>Email:</strong> rugma@gmail.com</p>
      <p className="about-p">
        Hi! I'm Rugma, a passionate and detail-oriented frontend developer with a love for crafting intuitive and visually appealing web experiences. 
        With a strong foundation in HTML, CSS, JavaScript, and modern frontend frameworks like React, Vue.js, and Angular, 
        I specialize in turning design concepts into responsive, high-performance websites and applications.
      </p>
      <h1 className='about-head'>Education</h1>
      <div className="education">
        <ul className="education-list">
          <li className="education-item">
            <p>BSc Computer Science</p>
            <img src={ug} alt="BSc Computer Science" className='education_img'/>
          </li>
          <li className="education-item">
            <p>Plus Two</p>
            <img src={hse} alt="Plus Two" education_img />
          </li>
          <li className="education-item">
            <p>SSLC</p>
            <img src={hse} alt="SSLC" education_img />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
