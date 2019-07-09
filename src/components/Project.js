import React, {Component} from 'react';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.content.title,
      image: this.props.content.image,
      content: this.props.content.content,
      github: this.props.content.github
    }
  }

  render() {
    return (
      <div className="project-container">
        <div className="project-container__image">
          <img src={this.state.image} alt="img"/>
        </div>
        <div className="project-content">
          <h2 className="project-content__title">{this.state.title}</h2>
          <p className="project-content__text">{this.state.content}</p>
          <a href={this.state.github}>github</a>
        </div>
      </div>
    )
  }
}