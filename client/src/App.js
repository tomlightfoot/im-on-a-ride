import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from './components/button'
import './App.css';
import ThorpeParkMap from './components/maps/thorpemap'
import AltonMap from './components/maps/altonmap'
import ChessMap from './components/maps/chessmap'
import LegoMap from './components/maps/legomap'

class MyMenu extends Component {
  render() {
    return (
      <div>
        <div id='title'>
          {title}
        </div>
        <Link to='/thorpe/map'><Button name='ThorpePark'></Button></Link>
        <Link to='/alton/map'><Button name='Alton'></Button></Link>
        <Link to='/chess/map'><Button name='Chessington'></Button></Link>
        <Link to='/lego/map'><Button name='Legoland'></Button></Link>
      </div>
    )
  }
}

const title = <h1>I'm on a Ride!</h1>


class App extends Component {
  render() {
    return (


      <div id='king'>
        <div id='buttonMenu'>
          <Switch>
            <Route exact path='/' component={MyMenu} />
            <Route path='/thorpe/map' component={ThorpeParkMap} />
            <Route path='/alton/map' component={AltonMap} />
            <Route path='/chess/map' component={ChessMap} />
            <Route path='/lego/map' component={LegoMap} />
          </Switch>
        </div>
      </div>
    )

  }
}

export default App;
