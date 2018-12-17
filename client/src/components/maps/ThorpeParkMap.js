import React, { Component } from 'react'
import '.././styles/ThorpeParkMap.css';
import '../../App.css'
import AttractionsFilter from '.././attractionsFilter'
import FacilitiesFilter from'.././facilitiesFilter'
import InfoBox from '../../components/modal/InfoBox'
import { Link } from "react-router-dom";
import Button from '../button'

const title = <h1>Thorpe Park</h1>

class ThorpeParkMap extends Component {

  constructor() {
    super()
    this.state = {
      features: null,
      feature: null,
      showModal: false,
    }
  }

  componentDidMount() {
    fetch('/attractions')
    .then(res => res.json())
    .then(data => this.setState({ features: data}, () => console.log('Complete')))
  }

  toggleRideInfo(ride) {

    let rideInfo = this.state.features.filter(feature => feature.name === ride)[0]
    this.setState({ feature: rideInfo })
    console.log(this.state.feature);
    this.handleToggleModal()
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  showModal = () => {
    this.setState({show: true})
  }

  hideModal = () => {
    this.setState({show: false})
  }

  attractionsFilter = (data) => {
    data.forEach((ride) => {
      let x = this.refs[ride];
      if (x.style.display !== "block") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
  }

  facilitiesFilter = (data) => {
    data.forEach((facility) => {
      console.log(facility);
      let x = this.refs[facility];
      console.log(x);
      if (x.style.display !== "block") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
  }

  render() {
    const { showModal } = this.state;
    return (

    <div className="containerForMap">
    {title}
      <div id='map'>
        <div id='attractionsAndFacilities'>
          <div ref="Swarm" id="swarm" className="ride" onClick={() => this.toggleRideInfo("Swarm")}></div>
          <div ref="Rumba Rapids" id="rumbaRapids" className="ride" onClick={() => this.toggleRideInfo("Rumba Rapids")}></div>
          <div ref="Nemesis Inferno" id="nemesis" className="ride" onClick={() => this.toggleRideInfo("Nemesis Inferno")}></div>
          <div ref="I'm a Celebrity" id="celebrity" className="ride" onClick={() => this.toggleRideInfo("I'm a Celebrity")}></div>
          <div ref="Derren Brown's Ghost Train" id="derrenBrown" className="ride" onClick={() => this.toggleRideInfo("Derren Brown's Ghost Train")}></div>
          <div ref="Storm Surge" id="stormSurge" className="ride" onClick={() => this.toggleRideInfo("Storm Surge")}></div>
          <div ref="Saw" id="saw" className="ride" onClick={() => this.toggleRideInfo("Saw")}></div>
          <div ref="Stealth" id="stealth" className="ride" onClick={() => this.toggleRideInfo("Stealth")}></div>
          <div ref="Flying Fish" id="flyingFish" className="ride" onClick={() => this.toggleRideInfo("Flying Fish")}></div>
          <div ref="Rocky Express" id="rockyExpress" className="ride" onClick={() => this.toggleRideInfo("Rocky Express")}></div>
          <div ref="Detonator" id="detonator" className="ride" onClick={() => this.toggleRideInfo("Detonator")}></div>
          <div ref="Amity Beach" id="amityBeach" className="ride" onClick={() => this.toggleRideInfo("Amity Beach")}></div>
          <div ref="Wet wet wet" id="wet" className="ride" onClick={() => this.toggleRideInfo("Wet wet wet")}></div>
          <div ref="Depth Charge" id="depthCharge" className="ride" onClick={() => this.toggleRideInfo("Depth Charge")}></div>
          <div ref="Tidal Wave" id="tidalWave" className="ride" onClick={() => this.toggleRideInfo("Tidal Wave")}></div>
          <div ref="Storm Cup" id="stormCup" className="ride" onClick={() => this.toggleRideInfo("Storm Cup")}></div>
          <div ref="Colossus" id="colossus" className="ride" onClick={() => this.toggleRideInfo("Colossus")}></div>
          <div ref="Vortex" id="vortex" className="ride" onClick={() => this.toggleRideInfo("Vortex")}></div>
          <div ref="Zodiac" id="zodiac" className="ride" onClick={() => this.toggleRideInfo("Zodiac")}></div>
          <div ref="Rush" id="rush" className="ride" onClick={() => this.toggleRideInfo("Rush")}></div>
          <div ref="Quantum" id="quantum" className="ride" onClick={() => this.toggleRideInfo("Quantum")}></div>
          <div ref="Samurai" id="samurai" className="ride" onClick={() => this.toggleRideInfo("Samurai")}></div>
          <div ref="Angry Birds 4D" id="angryBirds" className="ride" onClick={() => this.toggleRideInfo("Angry Birds 4D")}></div>
          <div ref="King Pigs" id="kingPig" className="ride" onClick={() => this.toggleRideInfo("King Pigs")}></div>
          <div ref="Monkey" id="monkey" className="ride" onClick={() => this.toggleRideInfo("Monkey")}></div>
          <div ref="Walking Dead" id="livingNightmare" className="ride" onClick={() => this.toggleRideInfo("Walking Dead")}></div>
          <div ref="Lumber" id="lumber" className="ride" onClick={() => this.toggleRideInfo("Lumber")}></div>
          <div ref="Timber Tug Boat" id="timber" className="ride" onClick={() => this.toggleRideInfo("Timber Tug Boat")}></div>
          <div id="kfc" className="facility food"></div>
          <div id="donut" className="facility food"></div>
          <div id="burgerKing" className="facility food"></div>
          <div id="sombrero" className="facility food"></div>
          <div id="amityFish" className="facility food"></div>
          <div id="infernoPizza" className="facility food"></div>
          <div id="nitrogenie" className="facility food"></div>
          <div id="amityKebab" className="facility food"></div>
          <div id="beachShack" className="facility food"></div>
          <div id="colossusSnack" className="facility food"></div>
          <div id="toiletOne" className="facility toilet"></div>
          <div id="toiletTwo" className="facility toilet"></div>
          <div id="toiletThree" className="facility toilet"></div>
          <div id="toiletFour" className="facility toilet"></div>
          <div id="toiletFive" className="facility toilet"></div>
          <div id="lockersOne" className="facility locker"></div>
          <div id="lockersTwo" className="facility locker"></div>
          <div id="lockersThree" className="facility locker"></div>
          <div id="lockersFour" className="facility locker"></div>
          <div id="guestServices" className="facility guestServices"></div>
          <div id="healthCentre" className="facility healthCentre"></div>
          <div id="gate" className="facility gate"></div>
          <div id="sawKiosk" className="facility kiosk"></div>
          <div id="colossusKiosk" className="facility kiosk"></div>
          <div id="infernoKiosk" className="facility kiosk"></div>
          <div id="swarmKiosk" className="facility kiosk"></div>
        </div>
        <section id="filters">
          <div id="attractionsFilter">
            <AttractionsFilter callBackFromParent={this.attractionsFilter} />
          </div>
          <div id="facilitiesFilter">
            <FacilitiesFilter callBackFromParent={this.facilitiesFilter}/>
          </div>
        </section>
      </div>
    <Link to='/'><Button class='back' name='back' /></Link>
    {showModal &&
    <InfoBox feature={this.state.feature} onCloseRequest={() => this.handleToggleModal()}>
    </InfoBox>}
    </div>
    )
  }
}

export default ThorpeParkMap
