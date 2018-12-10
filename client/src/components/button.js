import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link to="/thorpe/map"><button type='submit' to='/thorpe/map'>{this.props.name}</button></Link>
    );
  }
}

export default Button;
