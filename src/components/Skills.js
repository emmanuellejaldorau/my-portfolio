import React, { useState } from 'react';
import '../App.css';
import SkillsTile from './SkillsTile';
import SkillsBanner from './SkillsBanner';


function Skills() {
  const [bannerDisplayed, displayBanner ] = useState(false);
  const handleClick = () => displayBanner(bannerDisplayed ? false : true);
  return (
      <section className="skills">
          <h2>WHAT I WORK WITH</h2>
          <div className="skills-tiles-list">
            <div className="skills-tile" onClick={handleClick}>
              <SkillsTile icon="code" name="FRONT-END" />
            </div>
            {bannerDisplayed && <SkillsBanner />}
            <div className="skills-tile" onClick={handleClick}>
              <SkillsTile icon="cogs" name="BACK-END" />
            </div>
            <div className="skills-tile" onClick={handleClick}>
              <SkillsTile icon="tools" name="CMS" />
            </div>
            <div className="skills-tile" onClick={handleClick}>
              <SkillsTile icon="clipboard-list" name="COLLABORATION" />
            </div>
          </div>
      </section>
  );
}

export default Skills;
