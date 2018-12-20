import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'
import '.././styles/chessmap.css';

const hello = <h1>Chessington map coming soon!</h1>

class ChessMap extends Component {
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

export default ChessMap;
