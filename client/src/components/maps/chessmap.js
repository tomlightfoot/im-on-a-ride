import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'

const hello = <h1>Hello, this is where the Chessington map will go</h1>

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
