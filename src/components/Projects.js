import React from 'react';
import '../App.css';


function Projects() {

  return (
    <>
      <h2 className="projects-title">LAST PROJECTS</h2>
      <section className="projects">
          
          <div className="star-project">
            <a href="https://customreactapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <div className="project-overlay">
                <h2>PRISM</h2>
              </div> 
              </a>
          </div>
          
          
          <div className="other-project-group">
            <div className="other-project iron-sharer">
              <a href="https://ironhack-sharer.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="project-overlay">
                  <h2>IRON SHARER</h2>
                </div> 
              </a>
            </div>
            <div className="other-project back-to-school">
              <a href="https://emmanuellejaldorau.github.io/game-project/" target="_blank" rel="noopener noreferrer">
                <div className="project-overlay">
                  <h2>BACK TO SCHOOL</h2>
                </div> 
              </a>
            </div>
          </div>
      </section>
    </>
  );
}

export default Projects;
