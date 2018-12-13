import React, { Component } from 'react'
import './styles/filter.css'

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
        <label class="container" >Toilets
          <input type="checkbox" checked={this.state.isCheckedToilets} onChange={this.toggleChangeToilets}/>
        </label>
        <label class="container" >Lockers
          <input type="checkbox" checked={this.state.isCheckedLockers} onChange={this.toggleChangeLockers}/>
        </label >
        <label class="container">Guest Services
          <input type="checkbox" checked={this.state.isCheckedGuestServices} onChange={this.toggleChangeGuestServices}/>
        </label>
        <label class="container" >Health Centre
          <input type="checkbox" checked={this.state.isCheckedHealthCentre} onChange={this.toggleChangeHealthCentre}/>
        </label>
        <label class="container" >Kiosk
          <input type="checkbox" checked={this.state.isCheckedKiosk} onChange={this.toggleChangeKiosk}/>
        </label>
        <label class="container" >Food
          <input type="checkbox" checked={this.state.isCheckedFood} onChange={this.toggleChangeFood}/>
        </label>
      </div>
     );
   }
}

export default FacilitiesFilter
