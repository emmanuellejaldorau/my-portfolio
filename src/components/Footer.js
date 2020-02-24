import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
      <footer className="footer">
        <p>
          Made with 
          <FontAwesomeIcon className= "footer-icon" icon="fire" />
          by Emmanuelle
        </p>
      </footer>
  );
}

export default Footer;
