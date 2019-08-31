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

      { props.iconsBanner.map( (e , i) => {
        return <div key={i} className="skills-group">
          <FontAwesomeIcon icon={['fab', e.icon]} />
          <p>{e.name}</p>
        </div>})
      }


      </div>
      
    </>
  );
}

export default SkillsBanner;
