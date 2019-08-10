import React from 'react';
import '../App.css';
import SkillsTile from './SkillsTile';

function Skills() {
  return (
      <section className="skills">
          <h2>WHAT I WORK WITH</h2>
          <div class="skills-tiles-list">
            <SkillsTile icon="code" name="FRONT-END" />
            <SkillsTile icon="cogs" name="BACK-END" />
            <SkillsTile icon="tools" name="CMS" />
            <SkillsTile icon="clipboard-list" name="PROJECT MANAGEMENT" />
          </div>
      </section>
  );
}

export default Skills;
