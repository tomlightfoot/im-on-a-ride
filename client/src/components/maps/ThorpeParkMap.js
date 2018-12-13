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

  // componentDidMount() {
  //   fetch('/attractions')
  //   .then(res => res.json())
  //   .then(data => this.setState(data))
  // }


  render() {
    const { showModal } = this.state;
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
          <div id="stealth" className="ride" onClick={() => this.handleToggleModal()}></div>
          <div id="flyingFish" className="ride"></div>
          <div id="rockyExpress" className="ride"></div>
          <div id="detonator" className="ride"></div>
          <div id="amityBeach" className="ride"></div>
          <div id="wet" className="ride"></div>
          <div id="depthCharge" className="ride"></div>
          <div id="tidalWave" className="ride"></div>
          <div id="stormCup" className="ride"></div>
          <div id="colossus" className="ride" onClick={() => this.handleToggleModal()}></div>
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
