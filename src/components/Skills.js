import React from 'react';
import '../App.css';
import SkillsTile from './SkillsTile';
import SkillsBanner from './SkillsBanner';


function Skills() {
  return (
      <section className="skills">
          <h2>WHAT I WORK WITH</h2>
          <div className="skills-tiles-list">
            <SkillsTile icon="code" name="FRONT-END" />
            <SkillsBanner />
            <SkillsTile icon="cogs" name="BACK-END" />
            <SkillsTile icon="tools" name="CMS" />
            <SkillsTile icon="clipboard-list" name="COLLABORATION" />
          </div>
      </section>
  );
}

export default Skills;
