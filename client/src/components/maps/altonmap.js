import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'
import '.././styles/altonmap.css';

const hello = <h1 id="altonTitle">Alton Towers map coming soon!</h1>

class AltonMap extends Component {

  render() {

    return (
      <div>
          {hello}
        <div>
        <Link to='/'><Button class='back' name='back' /></Link>
        </div>
      </div>
    );
  }
}

export default AltonMap;
