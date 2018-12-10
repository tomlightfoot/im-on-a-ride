import React, { Component } from 'react';

import Button from './components/button'
import './App.css';

const title = <h1>I'm on a Ride!</h1>

class App extends Component {
  render() {
    return (

      <div id='king'>
      <div id='title'>
        {title}
      </div>
      <div>
        <Button name='Thorpe Park'/>
        <Button name='Alton Towers'/>
        <Button name='Chessington: World of Adventures'/>
        <Button name='LegoLand'/>
      </div>
      </div>
    )
  }
}

function Map() {
  return (
    <div>
      <h2>"Map"</h2>
    </div>
  );
}

export default App;
