import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

function Header() {
  return (
      <header className="header" aria-label="New York background picture">
        <h1 className="title">
          <span>Emmanuelle</span> 
          <span>Jaldorau</span>
          <p className="legend">Full stack developer</p>
        </h1>        
        
        <a href="#presentation" className = "icon-presentation">
        <FontAwesomeIcon className="arrow" icon="chevron-down"/>
        </a>
      </header>
  );
}

export default Header;
