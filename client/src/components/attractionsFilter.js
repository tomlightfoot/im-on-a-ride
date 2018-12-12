import React, { Component } from 'react'

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
         <input type="checkbox"
           checked={this.state.isCheckedRollercoaster}
           onChange={this.toggleChangeRollercoaster}
         />Rollercoaster
         <input type="checkbox"
           checked={this.state.isCheckedStanding}
           onChange={this.toggleChangeStanding}
         />Standing
         <input type="checkbox"
           checked={this.state.isCheckedWater}
           onChange={this.toggleChangeWater}
         />Water
         <input type="checkbox"
           checked={this.state.isCheckedFamily}
           onChange={this.toggleChangeFamily}
         />Family
         <input type="checkbox"
           checked={this.state.isCheckedExperience}
           onChange={this.toggleChangeExperience}
         />Experience
      </div>
     );
   }
}

export default AttractionsFilter
