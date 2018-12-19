import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '../button'



class AltonMap extends Component {

  render() {

      const hello = <h1>Alton Towers map coming soon!</h1>
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
