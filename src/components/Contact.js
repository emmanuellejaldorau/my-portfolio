import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Contact() {

  return (
    <>
      <section className="contact">
        <h2 className="contact-title">GET IN TOUCH</h2>
        <div>
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon="phone-square-alt" />
            +262 6 92 56 83 31
          </div>
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon="envelope-square" />
            <a href="mailto:e.jaldorau@gmail.com" className="link">
              e.jaldorau@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon className="contact-icon" icon={['fab', 'linkedin']} />
            <a href="https://www.linkedin.com/in/ejaldorau/?locale=en_US" target="_blank" rel="noopener noreferrer" className="link">
              linkedin.com/in/ejaldorau
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
