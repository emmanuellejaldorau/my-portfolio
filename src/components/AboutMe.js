import React from 'react';
import '../App.css';
import profile from '../images/profilepic.jpeg';

function AboutMe() {
  return (
      <section id="presentation">
          <img src={profile} alt="profile picture" className="img-presentation"/> 
          <div className="title-presentation">
            <h2>ABOUT ME</h2>
          </div>
          <div className="text-presentation">
            <p>I am a Full-stack developer with a background in digital project management and CMS contribution. Detail oriented and fast-learner, I am highly-motivated to reinvest the skills I acquired and expand my knowledge working with an outstanding team. I am looking for a position in NYC starting July 2020.</p>
            <a href="resume.pdf" className="cv-button" download>Download CV</a>
          </div>
      </section>
  );
}

export default AboutMe;
