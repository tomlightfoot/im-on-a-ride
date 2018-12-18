import React, { Component } from 'react'
import '.././styles/ThorpeParkMap.css';
import '../../App.css'
import AttractionsFilter from '.././attractionsFilter'
import FacilitiesFilter from'.././facilitiesFilter'
import InfoBox from '../../components/modal/InfoBox'
import { Link } from "react-router-dom";
import Button from '../button'

const title = <img className='titleLogo' src={require('.././images/facilities/entrance.png')} alt="gate" />

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
      <div id="titleHolder">
        {title}
      </div>
      <div id='map'>
        <div id='attractionsAndFacilities'>
          <div ref="Swarm" id="swarm" className="ride" onClick={() => this.toggleRideInfo("Swarm")}>
            <img src={require('.././images/attractions/swarm.jpg')} alt="Swarm" />
          </div>
          <div ref="Rumba Rapids" id="rumbaRapids" className="ride" onClick={() => this.toggleRideInfo("Rumba Rapids")}>
            <img src={require('.././images/attractions/rapids.png')} alt="Rumba Rapids" />
          </div>
          <div ref="Nemesis Inferno" id="nemesis" className="ride" onClick={() => this.toggleRideInfo("Nemesis Inferno")}>
            <img src={require('.././images/attractions/nemesis.png')} alt="Nemesis Inferno" />
          </div>
          <div ref="I'm a Celebrity" id="celebrity" className="ride" onClick={() => this.toggleRideInfo("I'm a Celebrity")}>
            <img src={require('.././images/attractions/im_a_celeb.jpg')} alt="I'm a Celebrity" />
          </div>
          <div ref="Derren Brown's Ghost Train" id="derrenBrown" className="ride" onClick={() => this.toggleRideInfo("Derren Brown's Ghost Train")}>
            <img src={require('.././images/attractions/derron_brown.jpg')} alt="Derren Brown's Ghost Train" />
          </div>
          <div ref="Storm Surge" id="stormSurge" className="ride" onClick={() => this.toggleRideInfo("Storm Surge")}>
            <img src={require('.././images/attractions/storm_surge.jpg')} alt="Storm Surge" />
          </div>
          <div ref="Saw" id="saw" className="ride" onClick={() => this.toggleRideInfo("Saw")}>
            <img src={require('.././images/attractions/saw.png')} alt="Saw" />
          </div>
          <div ref="Stealth" id="stealth" className="ride" onClick={() => this.toggleRideInfo("Stealth")}>
            <img src={require('.././images/attractions/stealth.jpg')} alt="Stealth" ></img>
          </div>
          <div ref="Flying Fish" id="flyingFish" className="ride" onClick={() => this.toggleRideInfo("Flying Fish")}>
            <img src={require('.././images/attractions/flying_fish.jpg')} alt="Flying Fish" />
          </div>
          <div ref="Rocky Express" id="rockyExpress" className="ride" onClick={() => this.toggleRideInfo("Rocky Express")}>
            <img src={require('.././images/attractions/rocky_express.jpg')} alt="Rocky Express" />
          </div>
          <div ref="Detonator" id="detonator" className="ride" onClick={() => this.toggleRideInfo("Detonator")}>
            <img src={require('.././images/attractions/detonator.jpg')} alt="Detonator" />
          </div>
          <div ref="Amity Beach" id="amityBeach" className="ride" onClick={() => this.toggleRideInfo("Amity Beach")}>
            <img src={require('.././images/attractions/amity_beach.jpg')} alt="Amity Beach" />
          </div>
          <div ref="Wet wet wet" id="wet" className="ride" onClick={() => this.toggleRideInfo("Wet wet wet")}>
            <img src={require('.././images/attractions/wet_wet_wet.jpg')} alt="Wet wet wet" />
          </div>
          <div ref="Depth Charge" id="depthCharge" className="ride" onClick={() => this.toggleRideInfo("Depth Charge")}>
            <img src={require('.././images/attractions/depth_charge.jpg')} alt="Depth Charge" />
          </div>
          <div ref="Tidal Wave" id="tidalWave" className="ride" onClick={() => this.toggleRideInfo("Tidal Wave")}>
            <img src={require('.././images/attractions/tidal_wave.jpg')} alt="Tidal Wave" />
          </div>
          <div ref="Storm Cup" id="stormCup" className="ride" onClick={() => this.toggleRideInfo("Storm Cup")}>
            <img src={require('.././images/attractions/storm_surge.jpg')} alt="Storm Cup" />
          </div>
          <div ref="Colossus" id="colossus" className="ride" onClick={() => this.toggleRideInfo("Colossus")}>
            <img src={require('.././images/attractions/colossus.jpg')} alt="Colossus" />
          </div>
          <div ref="Vortex" id="vortex" className="ride" onClick={() => this.toggleRideInfo("Vortex")}>
            <img src={require('.././images/attractions/vortex.jpg')} alt="Vortex" />
          </div>
          <div ref="Zodiac" id="zodiac" className="ride" onClick={() => this.toggleRideInfo("Zodiac")}>
            <img src={require('.././images/attractions/zodiac.jpg')} alt="Zodiac" />
          </div>
          <div ref="Rush" id="rush" className="ride" onClick={() => this.toggleRideInfo("Rush")}>
            <img src={require('.././images/attractions/rush.jpg')} alt="Rush" />
          </div>
          <div ref="Quantum" id="quantum" className="ride" onClick={() => this.toggleRideInfo("Quantum")}>
            <img src={require('.././images/attractions/quantum.jpg')} alt="Quantum" />
          </div>
          <div ref="Samurai" id="samurai" className="ride" onClick={() => this.toggleRideInfo("Samurai")}>
            <img src={require('.././images/attractions/samurai.jpg')} alt="Samurai" />
          </div>
          <div ref="Angry Birds 4D" id="angryBirds" className="ride" onClick={() => this.toggleRideInfo("Angry Birds 4D")}>
            <img src={require('.././images/attractions/angry_birds.jpg')} alt="Angry Birds 4D" />
          </div>
          <div ref="King Pigs" id="kingPig" className="ride" onClick={() => this.toggleRideInfo("King Pigs")}>
            <img src={require('.././images/attractions/king_pig.png')} alt="King Pigs" />
          </div>
          <div ref="Monkey" id="monkey" className="ride" onClick={() => this.toggleRideInfo("Monkey")}>
            <img src={require('.././images/attractions/monkey.jpg')} alt="Monkey" />
          </div>
          <div ref="Walking Dead" id="livingNightmare" className="ride" onClick={() => this.toggleRideInfo("Walking Dead")}>
            <img src={require('.././images/attractions/walking_dead.jpg')} alt="Walking Dead" />
          </div>
          <div ref="Lumber" id="lumber" className="ride" onClick={() => this.toggleRideInfo("Lumber")}>
            <img src={require('.././images/attractions/timber.jpg')} alt="Lumber" />
          </div>
          <div ref="Timber Tug Boat" id="timber" className="ride" onClick={() => this.toggleRideInfo("Timber Tug Boat")}></div>
          <div ref="5c0e7976fb6fc04dd6e95687" id="kfc" className="facility" >
          <img src={require('.././images/facilities/kfc.png')} alt="KFC" />
          </div>
          <div ref="5c0e7e8dfb6fc04dd6e95a4c" id="donut" className="facility">
          <img src={require('.././images/facilities/donut.png')} alt="donut" />
        </div>
          <div ref="5c0e78f8fb6fc04dd6e95627" id="burgerKing" className="facility">
          <img src={require('.././images/facilities/bk.png')} alt="burgerKing" />
        </div>
          <div ref="5c0e7916fb6fc04dd6e9564a" id="sombrero" className="facility">
          <img src={require('.././images/facilities/sombrero.png')} alt="sombrero" />
        </div>
          <div ref="5c0e78dffb6fc04dd6e95606" id="amityFish" className="facility">
          <img src={require('.././images/facilities/fish.png')} alt="amityFish" />
        </div>
          <div ref="5c0e792ffb6fc04dd6e95651" id="infernoPizza" className="facility">
          <img src={require('.././images/facilities/sombrero.png')} alt="infernoPizza" />
        </div>
          <div ref="5c0e7e52fb6fc04dd6e95a09" id="nitrogenie" className="facility">
          <img src={require('.././images/facilities/icecream.png')} alt="nitrogenie" />
        </div>
          <div ref="5c0e7e67fb6fc04dd6e95a18" id="amityKebab" className="facility">
          <img src={require('.././images/facilities/kebab.png')} alt="amityKebab" />
        </div>
          <div ref="5c0e7e78fb6fc04dd6e95a1e" id="beachShack" className="facility">
          <img src={require('.././images/facilities/icecream.png')} alt="beachShack" />
        </div>
          <div ref="5c0e7ef8fb6fc04dd6e95ab3" id="colossusSnack" className="facility">
          <img src={require('.././images/facilities/kebab.png')} alt="colossusSnack" />
        </div>
          <div ref="5c0e77bdfb6fc04dd6e954ca" id="toiletOne" className="facility">
          <img src={require('.././images/facilities/toilet.png')} alt="toiletOne" />
        </div>
          <div ref="5c0e77c7fb6fc04dd6e954cd" id="toiletTwo" className="facility">
          <img src={require('.././images/facilities/toilet.png')} alt="toiletTwo" />
        </div>
          <div ref="5c0e77d5fb6fc04dd6e95513" id="toiletThree" className="facility">
          <img src={require('.././images/facilities/toilet.png')} alt="toiletThree" />
        </div>
          <div ref="5c0e77dcfb6fc04dd6e95522" id="toiletFour" className="facility">
          <img src={require('.././images/facilities/toilet.png')} alt="toiletFour" />
        </div>
          <div ref="5c0e77e4fb6fc04dd6e95529" id="toiletFive" className="facility">
          <img src={require('.././images/facilities/toilet.png')} alt="toiletFive" />
        </div>
          <div ref="5c0e781afb6fc04dd6e95571" id="lockersOne" className="facility">
          <img src={require('.././images/facilities/lockers.png')} alt="lockersOne" />
        </div>
          <div ref="5c0e784cfb6fc04dd6e9558b" id="lockersTwo" className="facility">
          <img src={require('.././images/facilities/lockers.png')} alt="lockersTwo" />
        </div>
          <div ref="5c0e7859fb6fc04dd6e95595" id="lockersThree" className="facility">
          <img src={require('.././images/facilities/lockers.png')} alt="lockersThree" />
        </div>
          <div ref="5c0e786afb6fc04dd6e955ad" id="lockersFour" className="facility">
          <img src={require('.././images/facilities/lockers.png')} alt="lockersFour" />
        </div>
          <div ref="5c0e77f6fb6fc04dd6e95560" id="guestServices" className="facility">
          <img src={require('.././images/facilities/information.png')} alt="guestServices" />
        </div>
          <div ref="5c0e780dfb6fc04dd6e9556f" id="healthCentre" className="facility">
          <img src={require('.././images/facilities/healthcentre.png')} alt="healthCentre" />
        </div>
          <div ref="5c0e7f3dfb6fc04dd6e95adb" id="gate" className="facility">
          <img src={require('.././images/facilities/gate.png')} alt="gate" />
        </div>
          <div ref="5c0e7f07fb6fc04dd6e95ac0" id="sawKiosk" className="facility">
          <img src={require('.././images/facilities/kiosk.png')} alt="sawKiosk" />
        </div>
          <div ref="5c0e7e9dfb6fc04dd6e95a69" id="colossusKiosk" className="facility">
          <img src={require('.././images/facilities/kiosk.png')} alt="colossusKiosk" />
        </div>
          <div ref="5c0e7948fb6fc04dd6e95655" id="infernoKiosk" className="facility">
          <img src={require('.././images/facilities/kiosk.png')} alt="infernoKiosk" />
        </div>
          <div ref="5c0e78b3fb6fc04dd6e955d1" id="swarmKiosk" className="facility">
          <img src={require('.././images/facilities/kiosk.png')} alt="swarmKiosk" />
        </div>
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
