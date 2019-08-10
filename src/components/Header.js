import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

function Header() {
  return (
      <header className="header">
        <h1 className="title">
          <span>Emmanuelle</span> 
          <span>Jaldorau</span>
          <p className="legend">web developer</p>
        </h1>        
        
        <FontAwesomeIcon className="arrow" icon="chevron-down"/>
      </header>
  );
}

export default Header;
