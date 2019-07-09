import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ProjectsButton extends Component {
  render() {
    return (
      <Link to="/projects">
        <button type="button" className="projects-button">Projects >></button>
      </Link>
    )
  }
}