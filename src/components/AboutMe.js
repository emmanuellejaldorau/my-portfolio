import React from 'react';

import '../App.css';
import profile from '../images/profilepic.jpeg';

function AboutMe() {
  return (
      <section className="presentation">
        <h2 className="title-presentation">ABOUT ME</h2>
        <div className="content-presentation">
          <div className="text-presentation">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <img src={profile} alt="profile" />
        </div>
      </section>
  );
}

export default AboutMe;
