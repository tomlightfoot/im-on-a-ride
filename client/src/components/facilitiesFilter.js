import React, { Component } from 'react'

class FacilitiesFilter extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isCheckedToilets: false,
       isCheckedLockers: false,
       isCheckedGuestServices: false,
       isCheckedHealthCentre: false,
       isCheckedKiosk: false,
       isCheckedFood: false
     };
   }

   toggleChangeToilets = () => {
     this.setState({
       isCheckedToilets: !this.state.isCheckedToilets,
     });
   }

   toggleChangeLockers = () => {
     this.setState({
       isCheckedLockers: !this.state.isCheckedLockers,
     });
   }

   toggleChangeGuestServices = () => {
     this.setState({
       isCheckedGuestServices: !this.state.isCheckedGuestServices,
     });
   }

   toggleChangeHealthCentre = () => {
     this.setState({
       isCheckedHealthCentre: !this.state.isCheckedHealthCentre,
     });
   }

   toggleChangeKiosk = () => {
     this.setState({
       isCheckedKiosk: !this.state.isCheckedKiosk,
     });
   }

   toggleChangeFood = () => {
     this.setState({
       isCheckedFood: !this.state.isCheckedFood,
     });
   }

   render() {
     return (
       <div>
         <input type="checkbox"
           checked={this.state.isCheckedToilets}
           onChange={this.toggleChangeToilets}
         />Toilets
         <input type="checkbox"
           checked={this.state.isCheckedLockers}
           onChange={this.toggleChangeLockers}
         />Lockers
         <input type="checkbox"
           checked={this.state.isCheckedGuestServices}
           onChange={this.toggleChangeGuestServices}
         />Guest Services
         <input type="checkbox"
           checked={this.state.isCheckedHealthCentre}
           onChange={this.toggleChangeHealthCentre}
         />Health Centre
         <input type="checkbox"
           checked={this.state.isCheckedKiosk}
           onChange={this.toggleChangeKiosk}
         />Kiosk
         <input type="checkbox"
           checked={this.state.isCheckedFood}
           onChange={this.toggleChangeFood}
         />Food
      </div>
     );
   }
}

export default FacilitiesFilter
