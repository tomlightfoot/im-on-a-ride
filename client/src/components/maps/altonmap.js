import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'

const hello = <h1>Hello, this is where the Alton Towers map will go</h1>

class AltonMap extends Component {
  render() {
    return (
      <div>
        <Link to='/'><Button class='back' name='back' /></Link>
      </div>
    );
  }
}

export default AltonMap;
