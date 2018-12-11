import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
      <div id='buttonMenu'>
        <Router>
          <div>
        <Link to='/thorpe/map'><Button name='Thorpe Park'/></Link>
        <Link to='/alton/map'><Button name='Alton Towers'/></Link>
        <Link to='/chessington/map'><Button name='Chessington: World of Adventures'/></Link>
        <Link to='/lego/map'><Button name='LegoLand'/></Link>
        </div>
        </Router>
      </div>
      </div>
    )
  }
}

export default App;
