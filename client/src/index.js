import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThorpeMap from './components/maps/thorpemap'
import AltonMap from './components/maps/altonmap'
import ChessMap from './components/maps/chessmap'
import LegoMap from './components/maps/legomap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/thorpe/map" component={ThorpeMap} />
        <Route path="/alton/map" component={AltonMap} />
        <Route path="/chess/map" component={ChessMap} />
        <Route path="/lego/map" component={LegoMap} />
      </div>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
