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
     fetch('/facilities')
      .then(res => res.json())
      .then(facilities => { this.props.callBackFromParent(facilities.filter(facilities => facilities.type === "toilet").map(facility => facility._id)) })
   }

   toggleChangeLockers = () => {
     this.setState({
       isCheckedLockers: !this.state.isCheckedLockers,
     });
     fetch('/facilities')
      .then(res => res.json())
      .then(facilities => { this.props.callBackFromParent(facilities.filter(facilities => facilities.type === "lockers").map(facility => facility._id)) })
   }

   toggleChangeGuestServices = () => {
     this.setState({
       isCheckedGuestServices: !this.state.isCheckedGuestServices,
     });
     fetch('/facilities')
      .then(res => res.json())
      .then(facilities => { this.props.callBackFromParent(facilities.filter(facilities => facilities.type === "guest services").map(facility => facility._id)) })
   }

   toggleChangeHealthCentre = () => {
     this.setState({
       isCheckedHealthCentre: !this.state.isCheckedHealthCentre,
     });
     fetch('/facilities')
      .then(res => res.json())
      .then(facilities => { this.props.callBackFromParent(facilities.filter(facilities => facilities.type === "health centre").map(facility => facility._id)) })
   }

   toggleChangeKiosk = () => {
     this.setState({
       isCheckedKiosk: !this.state.isCheckedKiosk,
     });
     fetch('/facilities')
      .then(res => res.json())
      .then(facilities => { this.props.callBackFromParent(facilities.filter(facilities => facilities.type === "kiosk").map(facility => facility._id)) })
   }

   toggleChangeFood = () => {
     this.setState({
       isCheckedFood: !this.state.isCheckedFood,
     });
     fetch('/facilities')
      .then(res => res.json())
      .then(facilities => { this.props.callBackFromParent(facilities.filter(facilities => facilities.type === "food").map(facility => facility._id)) })
   }

   render() {
     return (
      <div class="main">
        <h5>Facilities</h5>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedToilets} onChange={this.toggleChangeToilets}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Toilets
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedLockers} onChange={this.toggleChangeLockers}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Lockers
        </label>
        <label class="container">
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedGuestServices} onChange={this.toggleChangeGuestServices}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Guest Services
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedHealthCentre} onChange={this.toggleChangeHealthCentre}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Health Centre
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedKiosk} onChange={this.toggleChangeKiosk}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Kiosk
        </label>
        <label class="container" >
          <input class="label__checkbox" type="checkbox" checked={this.state.isCheckedFood} onChange={this.toggleChangeFood}/>
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
          Food
        </label>
      </div>
     );
   }
}

export default FacilitiesFilter
