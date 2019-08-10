import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SkillsTile(props) {
  return (    
    <div class="skills-tile">
      <div class="skills-main-icon">
        <FontAwesomeIcon icon={props.icon}/>
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default SkillsTile;
