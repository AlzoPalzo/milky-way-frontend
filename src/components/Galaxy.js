import React, {Component} from 'react';

import SolarSystem from './SolarSystem'
import NavBar from './NavBar'

class Galaxy extends Component {

  state = {
    searchTerm: "",
    showSolarSystem: false,
    showPlanet: false,
    planets: [],
    moons: []
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

  
  updateSearchTerm = (e) =>
  {
    const term = e.target.value.toLowerCase()
    this.state.planets.find(planet => planet.name.toLowerCase() === term)
    ? this.setState({
      searchTerm: term + ' p'
    }, this.goToSolarSystem)
    : this.state.moons.find(moon => moon.name.toLowerCase() === term) 
      ? this.setState({
        searchTerm: term + ' m'
      }, this.goToSolarSystem)
      :this.setState({
        searchTerm: ""
      })
  }

  resetSearch = () =>
  {
    this.setState({
      searchTerm: ""
    })
  }

  componentDidMount() {
    fetch("http://localhost:4000/planets").then(resp => resp.json()).then(planets => this.setState({planets: planets}));
    fetch("http://localhost:4000/moons").then(resp => resp.json()).then(moons => this.setState({moons: moons}));
    fetch("http://localhost:4000/solar_systems").then(resp => resp.json()).then(solar_systems => this.setState({solar_systems: solar_systems}));
  }

  render() {
    const {showPlanet, planets, moons} = this.state
    return (<React.Fragment>
      <NavBar updateSearchTerm={this.updateSearchTerm} returnToGalaxy={this.returnToGalaxy} goToSolarSystem={this.goToSolarSystem} goToPlanetView={this.goToPlanetView}/>
      <br/> {
        !this.state.showSolarSystem
          ? <img alt="Milky Way" id="MilkyWay" onClick={this.handleGalaxyClick} src={require('../images/galaxy2.png')}/>
          : <SolarSystem searchTerm={this.state.searchTerm} resetSearch={this.resetSearch} showPlanet={showPlanet} goToPlanetView={this.goToPlanetView} returnToSolarSystem={this.returnToSolarSystem} planets={planets} moons={moons}/>
      }
    </React.Fragment>);
  }
}

export default Galaxy;
