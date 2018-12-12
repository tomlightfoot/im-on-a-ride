import React, { Component } from 'react'
import AttractionsFilter from './attractionsFilter'
import FacilitiesFilter from './facilitiesFilter'
import './ThorpeParkMap.css';

class ThorpeParkMap extends Component {

  render() {
    return (
      <div className="containerForMap">
        <div id='map'>
          <div id="swarm" className="ride"></div>
          <div id="rumbaRapids" className="ride"></div>
          <div id="nemesis" className="ride"></div>
          <div id="celebrity" className="ride"></div>
          <div id="derrenBrown" className="ride"></div>
          <div id="stormSurge" className="ride"></div>
          <div id="saw" className="ride"></div>
          <div id="stealth" className="ride"></div>
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
          <div id="attractionsFilter"><AttractionsFilter /></div>
          <div id="facilitiesFilter"><FacilitiesFilter /></div>
        </div>
      </div>
    )
  }
}

export default ThorpeParkMap
