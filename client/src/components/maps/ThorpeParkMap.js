import React, { Component } from 'react'
import '.././styles/ThorpeParkMap.css';
import '../../App.css'
import InfoBox from '../../components/modal/InfoBox'
import { Link } from "react-router-dom";
import Button from '../button'

const title = <h1>Thorpe Park</h1>

class ThorpeParkMap extends Component {

  constructor() {
    super()
    this.state = {
      feature: {
        "name": "Stealth",
        "thrill": "5",
        "ridetime": "01:00",
        "category": "rollercoaster",
        "minheight": "1.4m",
        "minage": "8",
        "video": "p3KGBjqIbfc"
      },
      showModal: false,
    }
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

  filter = (data) => {
    data.forEach((ride) => {
      console.log(ride);
      let x = this.refs[ride];
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
        <Link to='/'><Button class='back' name='back' /></Link>
          {showModal &&
            <InfoBox feature={this.state.feature} onCloseRequest={() => this.handleToggleModal()}>
            </InfoBox>}
          <div ref="Swarm" id="swarm" className="ride"></div>
          <div ref="Rumba Rapids" id="rumbaRapids" className="ride"></div>
          <div ref="Nemesis Inferno" id="nemesis" className="ride"></div>
          <div ref="I'm a Celebrity" id="celebrity" className="ride"></div>
          <div ref="Derren Brown's Ghost Train" id="derrenBrown" className="ride"></div>
          <div ref="Storm Surge" id="stormSurge" className="ride"></div>
          <div ref="Saw" id="saw" className="ride"></div>
          <div ref="Stealth" id="stealth" className="ride" onClick={() => this.handleToggleModal()}></div>
          <div ref="Flying Fish" id="flyingFish" className="ride"></div>
          <div ref="Rocky Express" id="rockyExpress" className="ride"></div>
          <div ref="Detonator" id="detonator" className="ride"></div>
          <div ref="Amity Beach" id="amityBeach" className="ride"></div>
          <div ref="Wet wet wet" id="wet" className="ride"></div>
          <div ref="Depth Charge" id="depthCharge" className="ride"></div>
          <div ref="Tidal Wave" id="tidalWave" className="ride"></div>
          <div ref="Storm Cup" id="stormCup" className="ride"></div>R
          <div ref="Colossus" id="colossus" className="ride" onClick={() => this.handleToggleModal()}></div>
          <div ref="Vortex" id="vortex" className="ride"></div>
          <div ref="Zodiac" id="zodiac" className="ride"></div>
          <div ref="Rush" id="rush" className="ride"></div>
          <div ref="Quantum" id="quantum" className="ride"></div>
          <div ref="Dome" id="dome" className="ride"></div>
          <div ref="Samurai" id="samurai" className="ride"></div>
          <div ref="Angry Birds 4D" id="angryBirds" className="ride"></div>
          <div ref="King Pigs" id="kingPig" className="ride"></div>
          <div ref="Monkey" id="monkey" className="ride"></div>
          <div ref="Walking Dead" id="livingNightmare" className="ride"></div>
          <div ref="Lumber" id="lumber" className="ride"></div>
          <div ref="Timber Tug Boat" id="timber" className="ride"></div>
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
          <main>
          <Modal feature={this.state.feature} show={this.state.show} handleClose={this.hideModal}></Modal>
          <InfoBox feature={this.state.feature} />
          </main>
          <div id="filters">
            <div id="attractionsFilter"><AttractionsFilter callBackFromParent={this.filter} /></div>
            <div id="facilitiesFilter"><FacilitiesFilter /></div>
          </div>
        </div>
        <Link to='/'><Button className='back' name='back' /></Link>
      </div>
    )
  }
}

export default ThorpeParkMap
