import React, { Component } from 'react';
import './switch.css'

class Switch extends Component {
  render() {
    return(
      <div>
        <label class='switch'>
        <button type='checkbox'>
        <span class='slider round'></span>
        </button>
        </label>
      </div>
    )
  }
}

export default Switch
