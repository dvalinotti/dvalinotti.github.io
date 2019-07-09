import React, {Component, Fragment} from 'react';
import Project from '../components/Project';
import {content} from '../content';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-page">
        <div className="projects-header">
          <h1 className="projects-header__text">Projects</h1>
        </div>
        <div className="projects-content">
          <Project content={content[0]} />
        </div>
      </div>
    )
  }
}