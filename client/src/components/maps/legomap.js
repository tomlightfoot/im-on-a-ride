import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'

const hello = <h1>Hello, this is where the LegoLand park map will go</h1>

class LegoMap extends Component {
  render() {
    return (
              <Link to='/'><Button class='back' name='back' /></Link>
    );
  }
}

export default LegoMap;
