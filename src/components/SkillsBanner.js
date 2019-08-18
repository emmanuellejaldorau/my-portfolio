import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SkillsBanner(props) {
  return (
    <>
      <div>
        <FontAwesomeIcon className="decoration" icon="caret-up" />
      </div>    
      <div className="skills-banner">
        <div className="skills-group">
          <FontAwesomeIcon icon={['fab', 'react']} />
          <p>React</p>
        </div>
        <div className="skills-group">
          <FontAwesomeIcon icon={['fab', 'angular']} />
          <p>Angular</p>
        </div>
        <div className="skills-group">
          <FontAwesomeIcon icon={['fab', 'bootstrap']} />
          <p>Bootstrap</p>
        </div>
        {/* <div className="skills-group">
          <FontAwesomeIcon icon={['fab', 'html5']} />
          <p>HTML 5</p>
        </div>
        <div className="skills-group">
          <FontAwesomeIcon icon={['fab', 'css3-alt']} />
          <p>CSS 3</p>
        </div>
        <div className="skills-group">
          <FontAwesomeIcon icon={['fab', 'js']} />
          <p>JS</p>
        </div> */}
      </div>
    </>
  );
}

export default SkillsBanner;
