import React from 'react';
import '../App.css';


function Projects() {

  return (
    <>
      <h2 className="projects-title">LAST PROJECTS</h2>
      <section className="projects">
          <p className="projects-description">Below are the projects I developed during my bootcamp training. Unfortunately, I can't display my work projects as they are considered confidential.</p>
          <div className = "projects-tiles">
            <div className="star-project" aria-label="Prism project picture ">
              <a href="https://customreactapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="project-overlay">
                  <h2>PRISM</h2>
                </div> 
                </a>
            </div> 
            <div className="other-project-group">
              <div className="other-project iron-sharer" aria-label="Iron Sharer project picture">
                <a href="https://ironhack-sharer.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <div className="project-overlay">
                    <h2>IRON SHARER</h2>
                  </div> 
                </a>
              </div>
              <div className="other-project back-to-school" aria-label="Back to school project picture">
                <a href="https://emmanuellejaldorau.github.io/game-project/" target="_blank" rel="noopener noreferrer">
                  <div className="project-overlay">
                    <h2>BACK TO SCHOOL</h2>
                  </div> 
                </a>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Projects;
