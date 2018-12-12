import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'react-page-object'
import App from './App';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Main menu', () => {
  it('has a title', () => {
    const app = mount(<App />)
      expect(app.contains(<h1>I'm on a Ride!</h1>)).toBe(true);
  })
})

describe('Button clicks', () => {

  let page


  beforeEach(() => {
    page = new Page(<App />)
  })

  afterEach(() => {
    page.destroy()
  })

  it('goes to the thorpe park map', () => {
    expect(page.currentPath()).toEqual('/')
    page.clickLink('/thorpe/map')
    expect(page.content()).toMatch('Thorpe Park')
    expect(page.currentPath()).toEqual('/thorpe/map')
  })

  it('goes to the alton towers map', () => {
    expect(page.currentPath()).toEqual('/')
    page.clickLink('/alton/map')
    expect(page.content()).toMatch('Hello, this is where the Alton Towers map will go')
    expect(page.currentPath()).toEqual('/alton/map')
  })

  it('goes to the chessington map', () => {
    expect(page.currentPath()).toEqual('/')
    page.clickLink('/chess/map')
    expect(page.content()).toMatch('Hello, this is where the Chessington map will go')
    expect(page.currentPath()).toEqual('/chess/map')
  })

  it('goes to the legoland map', () => {
    expect(page.currentPath()).toEqual('/')
    page.clickLink('/lego/map')
    expect(page.content()).toMatch('Hello, this is where the LegoLand park map will go')
    expect(page.currentPath()).toEqual('/lego/map')
  })


})

//Write tests for when button clicked, comparing URL to expected.

//Probably need to Mount App, clickButton (thorpe (possibly div id?)
// get URL with .currentPath() => String
