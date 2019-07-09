import React, {Component, Fragment} from 'react';
import {Container} from '@material-ui/core';
import {slide as Menu} from 'react-burger-menu';
import {Parallax, Background} from 'react-parallax';

export default class Layout extends Component {
  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="projects" className="menu-item" href="/projects">Projects</a>
        </Menu>
        <Parallax 
          blur={10}
          bgImage={require('./images/site-bg.jpg')}
          bgImageAlt="bg"
          strength={100}
        >
          <main id="page-wrap">
            <Container maxWidth="lg">
                {this.props.children}
            </Container>
          </main>
        </Parallax>
      </div>
    )
  }
}