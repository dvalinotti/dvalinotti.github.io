import React, { Component } from "react";
import Typing from "react-typing-animation";
import {Motion, spring} from 'react-motion';
import Delay from './Delay';

export default class CodeBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
      name: this.props.name
    };
  }

  render() {
    return (
      <Motion
        defaultStyle={{scale: 0, opacity: 0}}
        style={{scale: spring(1, {precision: 0.1}), opacity: spring(1)}}
      >
        {style => (
          <div className="cb-window" style={{opacity: style.opacity, transform: `scale(${style.scale})`}}>
            <div className="cb-topbar">
              <div className="cb-topbar__button cb-MaxButton">
                <div className="cb-button__minline" />
              </div>
              <div className="cb-topbar__button cb-MaxButton">
                <div className="cb-button__max" />
              </div>
              <div className="cb-topbar__button cb-Xbutton">
                <span className="cb-button__x">X</span>
              </div>
            </div>
            <div className="cb-container">
              <div className="cb-textcontainer" style={{paddingBottom: 0}}>
                <p className="cb-termhead">~/git/my-website/src</p>
                <div className="cb-line">
                  <p className="cb-termarrow">> </p>
                  <Typing startDelay={1200}>
                    <p className="cb-content">{this.state.content}<span style={{fontStyle: 'italic', fontWeight: 600}}>{this.state.name}.</span></p>
                  </Typing>
                </div>
              </div>
              <Delay wait={5000}>
                <div className="cb-textcontainer" style={{paddingTop: 0}}>
                  <p className="cb-termhead">~/git/my-website/src</p>
                  <div className="cb-line">
                    <p className="cb-termarrow">> </p>
                    <Typing startDelay={500}>
                      <p className="cb-content">cowsay "welcome to my website!"</p>
                    </Typing>
                  </div>
                  <Delay wait={4500}>
                    <div className="cb-line" style={{display: "block"}}>
                      <p className="cb-content">&nbsp;________________________</p>
                      <p className="cb-content">{"< welcome to my website! >"}</p>
                      <p className="cb-content">&nbsp;------------------------</p>
                      <p className="cb-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;^__^</p>
                      <p className="cb-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;(oo)\_______</p>
                      <p className="cb-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\/\ </p>
                      <p className="cb-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w&nbsp;|</p>
                      <p className="cb-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||</p>
                    </div>
                  </Delay>
                </div>
              </Delay>
            </div>
          </div>
        )}

      </Motion>
    );
  }
}
