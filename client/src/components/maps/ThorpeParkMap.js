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

  // componentDidMount() {
  //   fetch('/attractions')
  //   .then(res => res.json())
  //   .then(data => this.setState(data))
  // }

  showModal = () => {
    this.setState({show: true})
  }

  hideModal = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <div className="containerForMap">

      {title}
        <div id='map'>
          <div id="swarm" className="ride"></div>
          <div id="rumbaRapids" className="ride"></div>
          <div id="nemesis" className="ride"></div>
          <div id="celebrity" className="ride"></div>
          <div id="derrenBrown" className="ride"></div>
          <div id="stormSurge" className="ride"></div>
          <div id="saw" className="ride"></div>
          <div id="stealth" className="ride" onClick={this.showModal}></div>
          <div id="flyingFish" className="ride"></div>
          <div id="rockyExpress" className="ride"></div>
          <div id="detonator" className="ride"></div>
          <div id="amityBeach" className="ride"></div>
          <div id="wet" className="ride"></div>
          <div id="depthCharge" className="ride"></div>
          <div id="tidalWave" className="ride"></div>
          <div id="stormCup" className="ride"></div>
          <div id="colossus" className="ride"></div>
          <div id="vortex" className="ride"></div>
          <div id="zodiak" className="ride"></div>
          <div id="rush" className="ride"></div>
          <div id="quantum" className="ride"></div>
          <div id="dome" className="ride"></div>
          <div id="samuri" className="ride"></div>
          <div id="angryBirds" className="ride"></div>
          <div id="kingPig" className="ride"></div>
          <div id="monkey" className="ride"></div>
          <div id="livingNightmare" className="ride"></div>
          <div id="lumber" className="ride"></div>
          <div id="timber" className="ride"></div>
          <main>
          <Modal feature={this.state.feature} show={this.state.show} handleClose={this.hideModal}></Modal>
          <InfoBox feature={this.state.feature} />
          </main>
          <div id="filters">
            <div id="attractionsFilter"><AttractionsFilter /></div>
            <div id="facilitiesFilter"><FacilitiesFilter /></div>
          </div>

        </div>
        <Link to='/'><Button class='back' name='back' /></Link>
      </div>
    )
  }
}

export default ThorpeParkMap
