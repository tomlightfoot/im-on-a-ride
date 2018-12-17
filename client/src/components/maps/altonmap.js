import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'



class AltonMap extends Component {

  render() {

      const hello = <h1>Hello, this is where the Alton Towers map will go</h1>
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
