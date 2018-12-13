import React, { Component } from 'react'
import './styles/filter.css'

class AttractionsFilter extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isCheckedRollarcoaster: false,
       isCheckedStanding: false,
       isCheckedWater: false,
       isCheckedFamily: false,
       isCheckedExperience: false
     };
   }

   toggleChangeRollercoaster = () => {
     this.setState({
       isCheckedRollercoaster: !this.state.isCheckedRollercoaster,
     });
   }

   toggleChangeStanding = () => {
     this.setState({
       isCheckedStanding: !this.state.isCheckedStanding,
     });
   }

   toggleChangeWater = () => {
     this.setState({
       isCheckedWater: !this.state.isCheckedWater,
     });
   }

   toggleChangeFamily = () => {
     this.setState({
       isCheckedFamily: !this.state.isCheckedFamily,
     });
   }

   toggleChangeExperience = () => {
     this.setState({
       isCheckedExperience: !this.state.isCheckedExperience,
     });
   }

   render() {
     return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedRollercoaster} onChange={this.toggleChangeRollercoaster}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Rollercoaster
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedStanding} onChange={this.toggleChangeStanding}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Standing
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedWater} onChange={this.toggleChangeWater}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Water
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedFamily} onChange={this.toggleChangeFamily}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Family
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedExperience} onChange={this.toggleChangeExperience}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Experience
        </label>
      </div>
     );
   }
}

export default AttractionsFilter
