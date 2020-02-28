import React, { useState } from 'react';
import '../App.css';
import SkillsTile from './SkillsTile';
import SkillsBanner from './SkillsBanner';


function Skills() {
  const [bannerDisplayed, setBannerState ] = useState({
    frontBannerDisplayed: false,
    backBannerDisplayed: false,
    cmsBannerDisplayed: false,
    projectBannerDisplayed: false
  });

  const displayBanner = banner => {
    for (const property in bannerDisplayed) {
      if(property === banner){
        bannerDisplayed[banner] = bannerDisplayed[banner] ? false : true;
      } else {
        bannerDisplayed[property] =false;
      }
    }
    setBannerState({...bannerDisplayed});
  };
  
  const frontBanner = [
    {icon:"react" , name: "React" },
    {icon:"angular" , name: "Angular" },
    {icon:"bootstrap", name:"Bootstrap"},
    {icon:"html5", name: "HTML 5"},
    {icon:"css3-alt", name:"CSS 3"},
    {icon:"js", name:"Javascript"},
  ]
  const backBanner = [
    {icon:"node" , name: "Node.js" },
    {icon:"java", name:"Java"}
  ]
  const cmsBanner = [
    {icon: "wordpress" , name: "Wordpress"},
    {icon:"salesforce" , name: "Salesforce"},
  ]
  const projectBanner = [
    {icon: "git" , name: "Git"},
    {icon:"github" , name: "Github"},
    {icon:"jira" , name: "Jira"},
  ]

  return (
      <section className="skills">
          <h2>WHAT I WORK WITH</h2>
          <div className="skills-tiles-list">
            <div className="skills-tile" onClick={() => displayBanner("frontBannerDisplayed")}>
              <SkillsTile icon="code" name="FRONT-END" />
            </div>
            {bannerDisplayed.frontBannerDisplayed && <SkillsBanner iconsBanner= {frontBanner} />}
            <div className="skills-tile" onClick={() => displayBanner("backBannerDisplayed")}>
              <SkillsTile icon="cogs" name="BACK-END" />
            </div>
            {bannerDisplayed.backBannerDisplayed && <SkillsBanner iconsBanner= {backBanner} />}
            <div className="skills-tile" onClick={() => displayBanner("cmsBannerDisplayed")}>
              <SkillsTile icon="tools" name="CMS" />
            </div>
            {bannerDisplayed.cmsBannerDisplayed && <SkillsBanner iconsBanner= {cmsBanner} />}
            <div className="skills-tile" onClick={() => displayBanner("projectBannerDisplayed")}>
              <SkillsTile icon="clipboard-list" name="COLLABORATION" />
            </div>
            {bannerDisplayed.projectBannerDisplayed && <SkillsBanner iconsBanner= {projectBanner} />}
          </div> 
      </section>
  );
}

export default Skills;
