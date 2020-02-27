import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Contact() {

  return (
    <>
      <section className="contact">
        <h2 className="contact-title">GET IN TOUCH</h2>
        <div>
          <div>
            <FontAwesomeIcon className="contact-icon" icon="phone-square-alt" />
            +1 (702) 613-9391
          </div>
          <div>
            <FontAwesomeIcon className="contact-icon" icon="envelope-square" />
            e.jaldorau@gmail.com
          </div>
          <div>
            <FontAwesomeIcon className="contact-icon" icon={['fab', 'linkedin']} />
            www.linkedin.com/in/ejaldorau
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
