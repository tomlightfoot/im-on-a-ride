import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './styles/infobox.css'

function upcase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

class InfoBox extends Component {

  render() {
    return (

      <div class="infobox">
      <h4>{this.props.feature.name}</h4>

        <ul>Thrill Rating = {this.props.feature.thrill}</ul>
        <ul>Ridetime = {this.props.feature.ridetime}</ul>
        <ul>Category = {this.props.feature.category}</ul>
        <ul>Minimum Height = {this.props.feature.minheight}</ul>
        <ul>Minimum Age = {this.props.feature.minage}</ul>
        <span id='close' onClick={this.props.handleClose}>&times;</span>
      </div>
    );
  }
}

export default InfoBox;
