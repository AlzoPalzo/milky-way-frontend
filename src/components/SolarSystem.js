import React, {Component} from 'react';

import Planet from './Planet'

class SolarSystem extends Component {

  state = {
    selectedPlanet: 'mercury'
  }

  handlePlanetClick = (e) => {
    this.props.goToPlanetView()
    this.setState({selectedPlanet: e.target.className})
  }

  render() {
    const {systemView, selectedPlanet} = this.state

    return (<div>
      {
        this.props.showPlanet

          ? <Planet returnToSolarSystem={this.props.returnToSolarSystem} selectedPlanet={selectedPlanet}/>
          : <div className={'solar-system'}>
              <img alt="Sun" onClick={this.handlePlanetClick} className={'sun'} src={require('../images/sun.png')}/>
              <img alt="Mercury" onClick={this.handlePlanetClick} className={'mercury'} src={require('../images/mercury.png')}/>
              <img alt="Venus" onClick={this.handlePlanetClick} className={'venus'} src={require('../images/venus.png')}/>
              <img alt="Earth" onClick={this.handlePlanetClick} className={'earth'} src={require('../images/earth.png')}/>
              <img alt="Mars" onClick={this.handlePlanetClick} className={'mars'} src={require('../images/mars.png')}/>
              <img alt="Jupiter" onClick={this.handlePlanetClick} className={'jupiter'} src={require('../images/jupiter.png')}/>
              <img alt="Saturn" onClick={this.handlePlanetClick} className={'saturn'} src={require('../images/saturn.png')}/>
              <img alt="Uranus" onClick={this.handlePlanetClick} className={'uranus'} src={require('../images/uranus.png')}/>
              <img alt="Neptune" onClick={this.handlePlanetClick} className={'neptune'} src={require('../images/neptune.png')}/>
            </div>
      }
    </div>);
  }
}

export default SolarSystem;
