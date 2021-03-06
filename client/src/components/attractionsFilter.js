import React, { Component } from 'react'
import './styles/filter.css'

class AttractionsFilter extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isCheckedRollercoaster: false,
       isCheckedStanding: false,
       isCheckedWater: false,
       isCheckedFamily: false,
       isCheckedExperience: false
     };
   }

   // The below code could definitely be DRYer, will come back to refactor if have the time

   toggleChangeRollercoaster = () => {
     this.setState({
       isCheckedRollercoaster: !this.state.isCheckedRollercoaster,
     });
     fetch('/attractions')
      .then(res => res.json())
      .then(attractions => { this.props.callBackFromParent(attractions.filter(attraction => attraction.category === "rollercoaster").map(attraction => attraction.name)) })
   }

   toggleChangeStanding = () => {
     this.setState({
       isCheckedStanding: !this.state.isCheckedStanding,
     });
     fetch('/attractions')
      .then(res => res.json())
      .then(attractions => { this.props.callBackFromParent(attractions.filter(attraction => attraction.category === "standing ride").map(attraction => attraction.name)) })
   }

   toggleChangeWater = () => {
     this.setState({
       isCheckedWater: !this.state.isCheckedWater,
     });
     fetch('/attractions')
      .then(res => res.json())
      .then(attractions => { this.props.callBackFromParent(attractions.filter(attraction => attraction.category === "water ride").map(attraction => attraction.name)) })
   }

   toggleChangeFamily = () => {
     this.setState({
       isCheckedFamily: !this.state.isCheckedFamily,
     });
     fetch('/attractions')
      .then(res => res.json())
      .then(attractions => { this.props.callBackFromParent(attractions.filter(attraction => attraction.category === "family fun").map(attraction => attraction.name)) })
   }

   toggleChangeExperience = () => {
     this.setState({
       isCheckedExperience: !this.state.isCheckedExperience,
     });
     fetch('/attractions')
      .then(res => res.json())
      .then(attractions => { this.props.callBackFromParent(attractions.filter(attraction => attraction.category === "experience ride").map(attraction => attraction.name)) })
   }

   render() {
     return (
      <div className ="main">
        <h5>Attractions</h5>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <label className="container" >
          <input className="label__checkbox" type="checkbox" checked={this.state.isCheckedRollercoaster} onChange={this.toggleChangeRollercoaster}/>
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon"></i>
            </span>
          </span>
          Rollercoaster
        </label>
        <label className="container" >
          <input className="label__checkbox" type="checkbox" checked={this.state.isCheckedStanding} onChange={this.toggleChangeStanding}/>
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon"></i>
            </span>
          </span>
          Standing Ride
        </label>
        <label className="container" >
          <input className="label__checkbox" type="checkbox" checked={this.state.isCheckedWater} onChange={this.toggleChangeWater}/>
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon"></i>
            </span>
          </span>
          Water Ride
        </label>
        <label className="container" >
          <input className="label__checkbox" type="checkbox" checked={this.state.isCheckedFamily} onChange={this.toggleChangeFamily}/>
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon"></i>
            </span>
          </span>
          Family Fun
        </label>
        <label className="container" >
          <input className="label__checkbox" type="checkbox" checked={this.state.isCheckedExperience} onChange={this.toggleChangeExperience}/>
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon"></i>
            </span>
          </span>
          Experience
        </label>
      </div>
     );
   }
}

export default AttractionsFilter
