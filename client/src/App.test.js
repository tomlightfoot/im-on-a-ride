import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('The main app', () => {
//     it('the app should have a title', () => {
//         const app  = shallow(<App/>);
//         expect(app.contains(<div><h1>I'm on a Ride!</h1></div>)).toBe(true);
//     })
// })

//Write tests for when button clicked, comparing URL to expected.

//Probably need to Mount App, clickButton (thorpe (possibly div id?)
// get URL with .currentPath() => String
