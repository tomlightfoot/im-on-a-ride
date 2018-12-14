import React, { Component } from 'react'
import ReactDOM from "react-dom";
import AttractionsFilter from '../attractionsFilter'
import FacilitiesFilter from '../facilitiesFilter'
import '.././styles/ThorpeParkMap.css';
import '../../App.css'
import InfoBox from '../InfoBox'
import { Link } from "react-router-dom";
import Button from '../button'

const title = <h1>Thorpe Park</h1>
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
}

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
        "minage": "8"
      },
      show: false
    }
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
    return (
      <div className="containerForMap">

      {title}
        <div id='map'>
          <div ref="Swarm" id="swarm" className="ride"></div>
          <div ref="Rumba Rapids" id="rumbaRapids" className="ride"></div>
          <div ref="Nemesis Inferno" id="nemesis" className="ride"></div>
          <div ref="I'm a Celebrity" id="celebrity" className="ride"></div>
          <div ref="Derren Brown's Ghost Train" id="derrenBrown" className="ride"></div>
          <div ref="Storm Surge" id="stormSurge" className="ride"></div>
          <div ref="Saw" id="saw" className="ride"></div>
          <div ref="Stealth" id="stealth" className="ride" onClick={this.showModal}></div>
          <div ref="Flying Fish" id="flyingFish" className="ride"></div>
          <div ref="Rocky Express" id="rockyExpress" className="ride"></div>
          <div ref="Detonator" id="detonator" className="ride"></div>
          <div ref="Amity Beach" id="amityBeach" className="ride"></div>
          <div ref="Wet wet wet" id="wet" className="ride"></div>
          <div ref="Depth Charge" id="depthCharge" className="ride"></div>
          <div ref="Tidal Wave" id="tidalWave" className="ride"></div>
          <div ref="Storm Cup" id="stormCup" className="ride"></div>
          <div ref="Colossus" id="colossus" className="ride"></div>
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
