import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'
import '.././styles/legomap.css';

const hello = <h1 id="legoTitle">LegoLand park map coming soon!</h1>

class LegoMap extends Component {
  render() {
    return (
      <div>
        <div>
          {hello}
        </div>
        <div>
          <Link to='/'><Button class='back' name='back' /></Link>
        </div>
      </div>
    );
  }
}

export default LegoMap;
