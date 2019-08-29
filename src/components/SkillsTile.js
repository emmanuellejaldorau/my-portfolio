import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SkillsTile(props) {
  return (    
    <>
      <div className="skills-main-icon">
        <FontAwesomeIcon icon={props.icon}/>
      </div>
      <p>{props.name}</p>
    </>
  );
}

export default SkillsTile;
