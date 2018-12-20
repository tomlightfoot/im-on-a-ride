import React, { Component } from 'react';
import '.././App.css'


class Button extends Component {
  render() {
    return (
      <button className={this.props.className} type='submit'>{this.props.name}</button>
    );
  }
}

export default Button;
