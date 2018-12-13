import React, { Component } from 'react';
import isNil from 'lodash/fp/isNil';

import Video from './video'
import './InfoBoxStyle.css'

class InfoBox extends Component {

  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  // Add listeners immediately after the component is mounted.
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  // Remove listeners immediately before a component is unmounted and destroyed.
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  // Handling the modal close by key press. 27 = Esc key
  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }

  // Handling the mouse click on browser window.
  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  // passing in onCloseRequest and children props.
  render () {
    const {
      onCloseRequest,
      children
    } = this.props;

    return (
      <div className='modal'>
        <div
          className='modalOverlay'
          ref={node => (this.modal = node)}
          >
          <div className='modalContent'>
          {children}
          <button
            type='button'
            className='closeButton' onClick={onCloseRequest}>&times;</button>
        </div>
        </div>
      <h4>{this.props.feature.name}</h4>
        <ul>Thrill Rating = {this.props.feature.thrill}</ul>
        <ul>Ridetime = {this.props.feature.ridetime}</ul>
        <ul>Category = {this.props.feature.category}</ul>
        <ul>Minimum Height = {this.props.feature.minheight}</ul>
        <ul>Minimum Age = {this.props.feature.minage}</ul>
        <Video feature={this.props.feature.video}/>
      </div>
    );
  }
}

export default InfoBox;
