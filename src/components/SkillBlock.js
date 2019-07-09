import React, {Component} from 'react';
import { Grid, Paper} from '@material-ui/core';
import react from '../images/react.png'
import sass from '../images/sass.svg'
import angular from '../images/angular.png'
import fe from '../images/fe.png'
import spring from '../images/spring.png'
import node from '../images/node.png'
import mongo from '../images/mongo.png'
import java from '../images/java.png'
import cpp from '../images/cpp.png'
import python from '../images/python.png'
import git from '../images/git.png'

export default class SkillBlock extends Component {
  render() {
    return (
      <Grid container spacing={1} className="home-section3__skills">
        <Grid item>
          <Paper className="home-section3__paper">
            <p className="home-section3__skills-header">Front-End</p>
            <div className="skill-logo-container">
              <img src={react} alt="react" className="skill-logo"/>
              <img src={sass} alt="sass" className="skill-logo"/>
              <img src={fe} alt="fe" className="skill-logo"/>
              <img src={angular} alt="angular" className="skill-logo" style={{maxWidth: 200}}/>
            </div>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className="home-section3__paper">
            <p className="home-section3__skills-header">Back-End</p>
            <div className="skill-logo-container">
              <img src={spring} alt="spring" className="skill-logo"/>
              <img src={node} alt="node" className="skill-logo"/>
              <img src={mongo} alt="mongo" className="skill-logo"/>
            </div>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className="home-section3__paper">
            <p className="home-section3__skills-header">General</p>
            <div className="skill-logo-container">
              <img src={java} alt="java" className="skill-logo"/>
              <img src={cpp} alt="cpp" className="skill-logo"/>
              <img src={python} alt="python" className="skill-logo"/>
              <img src={git} alt="git" className="skill-logo" style={{marginTop: 30}}/>
            </div>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}