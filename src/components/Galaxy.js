import React, {Component} from 'react';

import SolarSystem from './SolarSystem'
import NavBar from './NavBar'

class Galaxy extends Component {

  state = {
    showSolarSystem: false,
    showPlanet: false,
    planets: []
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

  componentDidMount(){
      fetch("http://localhost:4000/planets")
        .then(resp => resp.json())
        .then(planets => this.setState({ planets: planets }));
      fetch("http://localhost:4000/moons")
        .then(resp => resp.json())
        .then(moons => this.setState({ moons: moons }));
      fetch("http://localhost:4000/solar_systems")
        .then(resp => resp.json())
        .then(solar_systems => this.setState({ solar_systems: solar_systems }));
  }

  render() {
    const {showPlanet, planets} = this.state
    return (<div >
      <NavBar returnToGalaxy={this.returnToGalaxy} goToSolarSystem={this.goToSolarSystem} goToPlanetView={this.goToPlanetView}/>
      <br/> {
        !this.state.showSolarSystem
          ? <img alt="Milky Way" id="MilkyWay" onClick={this.handleGalaxyClick} src={require('../images/galaxy2.png')}/>
        : <SolarSystem showPlanet={showPlanet} goToPlanetView={this.goToPlanetView} returnToSolarSystem={this.returnToSolarSystem} planets={planets}/>
      }
    </div>);
  }
}

export default Galaxy;
