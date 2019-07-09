import React, {Component} from 'react';
import CodeBlock from '../components/CodeBlock'
import SkillBlock from '../components/SkillBlock';
import ProjectsButton from '../components/ProjectsButton';

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-section1">
          <CodeBlock content={`Hello, my name is `} name="Dan Valinotti" />
          <div className="home-section1__header">
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
              <h2 className="home-section1__header-text" style={{color: 'white'}}>Software Engineer</h2>
              <h2 className="home-section1__header-text">UX Developer</h2>
            </div>
            <h1 className="home-section1__header-n">&</h1>
          </div>
        </div>
        <div className="home-section2">
          <div className="home-section2-container">
            <h1 className="home-section2__header">About me</h1>
            <p className="home-section2__body">
              I'm one of those developers who got into programming to make Minecraft mods, then made a career out of it.
              I am a <span className="special-text">full-stack developer</span> with a specialization in <span className="special-text">front-end and UX development</span>, with a passion for 
              creating intuitive user interfaces.
            </p>
          </div>
        </div>
        <div className="home-section3">
          <div className="home-section3-container">
            <h1 className="home-section2__header">Skills</h1>
            <SkillBlock />
          </div>
        </div>
        <div className="home-section4">
          <ProjectsButton />
        </div>
      </div>
    )
  }
}