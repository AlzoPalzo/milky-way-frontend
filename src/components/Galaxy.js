import React, {Component} from 'react';

import SolarSystem from './SolarSystem'
import NavBar from './NavBar'

class Galaxy extends Component {

  state = {
    showSolarSystem: false,
    showPlanet: false
  }

  handleGalaxyClick = () => {
    this.setState({showSolarSystem: true})
  }

  goToPlanetView = () => {
    this.setState({showSolarSystem: true, showPlanet: true})
  }

  goToSolarSystem = () => {
    this.setState({showSolarSystem: true, showPlanet: false})
  }

  returnToSolarSystem = () => {
    this.setState({showPlanet: false})
  }

  returnToGalaxy = () => {
    this.setState({showSolarSystem: false, showPlanet: false})
  }

  render() {
    const {showPlanet} = this.state
    return (<div >
      <NavBar returnToGalaxy={this.returnToGalaxy} goToSolarSystem={this.goToSolarSystem} goToPlanetView={this.goToPlanetView}/>
      <br/> {
        !this.state.showSolarSystem
          ? <img alt="Milky Way" id="MilkyWay" onClick={this.handleGalaxyClick} src={require('../images/galaxy2.png')}/>
          : <SolarSystem showPlanet={showPlanet} goToPlanetView={this.goToPlanetView} returnToSolarSystem={this.returnToSolarSystem}/>
      }
    </div>);
  }
}

export default Galaxy;
