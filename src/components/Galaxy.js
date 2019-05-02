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
    this.setState({showPlanet: true})
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
      <NavBar/>
      <br/> {
        !this.state.showSolarSystem
          ? <img onClick={this.handleGalaxyClick} src={require('../images/sun.png')}/>
          : <SolarSystem showPlanet={showPlanet} goToPlanetView={this.goToPlanetView}/>
      }
    </div>);
  }
}

export default Galaxy;
