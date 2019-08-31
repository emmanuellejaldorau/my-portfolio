import React, { useState } from 'react';
import '../App.css';
import SkillsTile from './SkillsTile';
import SkillsBanner from './SkillsBanner';


function Skills() {
  const [frontBannerDisplayed, displayFrontBanner ] = useState(false);
  const frontBanner = [
    {icon:"angular" , name: "Angular" },
    {icon:"bootstrap", name:"Bootstrap"},
    {icon:"html5", name: "HTML 5"},
    {icon:"css3-alt", name:"CSS 3"},
    {icon:"js", name:"Javascript"},
  ]
  const [backBannerDisplayed, displayBackBanner ] = useState(false);
  const backBanner = [
    {icon:"node" , name: "Node.js" },
    {icon:"java", name:"Java"}
  ]

  const [cmsBannerDisplayed, displayCmsBanner ] = useState(false);
  const cmsBanner = [
    {icon: "wordpress" , name: "Wordpress"},
    {icon:"salesforce" , name: "Salesforce"},
  ]

  const [projectBannerDisplayed, displayProjectBanner ] = useState(false);
  const projectBanner = [
    {icon: "git" , name: "Git"},
    {icon:"github" , name: "Github"},
    {icon:"jira" , name: "Jira"},
  ]

  return (
      <section className="skills">
          <h2>WHAT I WORK WITH</h2>
          <div className="skills-tiles-list">
            <div className="skills-tile" onClick={() => displayFrontBanner(frontBannerDisplayed ? false : true)}>
              <SkillsTile icon="code" name="FRONT-END" />
            </div>
            {frontBannerDisplayed && <SkillsBanner iconsBanner= {frontBanner} />}
            <div className="skills-tile" onClick={() => displayBackBanner(backBannerDisplayed ? false : true)}>
              <SkillsTile icon="cogs" name="BACK-END" />
            </div>
            {backBannerDisplayed && <SkillsBanner iconsBanner= {backBanner} />}
            <div className="skills-tile" onClick={() => displayCmsBanner(cmsBannerDisplayed ? false : true)}>
              <SkillsTile icon="tools" name="CMS" />
            </div>
            {cmsBannerDisplayed && <SkillsBanner iconsBanner= {cmsBanner} />}
            <div className="skills-tile" onClick={() => displayProjectBanner(projectBannerDisplayed ? false : true)}>
              <SkillsTile icon="clipboard-list" name="COLLABORATION" />
            </div>
            {projectBannerDisplayed && <SkillsBanner iconsBanner= {projectBanner} />}
          </div>
      </section>
  );
}

export default Skills;
