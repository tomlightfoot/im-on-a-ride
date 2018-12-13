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
        <label class="container" >Rollercoaster
          <input type="checkbox" checked={this.state.isCheckedRollercoaster} onChange={this.toggleChangeRollercoaster}/>
        </label>
        <label class="container" >Standing
          <input type="checkbox" checked={this.state.isCheckedStanding} onChange={this.toggleChangeStanding}/>
        </label>
        <label class="container" >Water
          <input type="checkbox" checked={this.state.isCheckedWater} onChange={this.toggleChangeWater}/>
        </label>
        <label class="container" >Family
          <input type="checkbox" checked={this.state.isCheckedFamily} onChange={this.toggleChangeFamily}/>
        </label>
        <label class="container" >Experience
          <input type="checkbox" checked={this.state.isCheckedExperience} onChange={this.toggleChangeExperience}/>
        </label>
      </div>
     );
   }
}

export default AttractionsFilter
