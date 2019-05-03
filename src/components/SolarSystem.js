import React, {Component} from 'react';

import Planet from './Planet'

class SolarSystem extends Component {

  state = {
    selectedPlanet: 'mercury'
  }

  handlePlanetClick = (e) => {
    this.props.goToPlanetView()
    this.setState({selectedPlanet: e.target.className.split(' ')[1]})
  }

  render() {
    const {selectedPlanet} = this.state

    return (<div>
      {
        this.props.showPlanet

          ? <Planet returnToSolarSystem={this.props.returnToSolarSystem} selectedPlanet={selectedPlanet}/>
        : <div className={'solar-system ui middle aligned grid'}>
              <div className='one wide column'><img alt="Sun" onClick={this.handlePlanetClick} className={'the sun'} src={require('../images/sun.png')}/></div>
              <div className='one wide column'></div>
              <div className='one wide column'><img alt="Mercury" onClick={this.handlePlanetClick} className={'planet mercury'} src={require('../images/mercury.png')}/></div>
              <div className='one wide column'><img alt="Venus" onClick={this.handlePlanetClick} className={'planet venus'} src={require('../images/venus.png')}/></div>
              <div className='one wide column'></div>
              <div className='one wide column'><img alt="Earth" onClick={this.handlePlanetClick} className={'planet earth'} src={require('../images/earth.png')}/></div>
              <div className='one wide column'></div>
              <div className='one wide column'><img alt="Mars" onClick={this.handlePlanetClick} className={'planet mars'} src={require('../images/mars.png')}/></div>
              <div className='one wide column'></div>
              <div className='one wide column'><img alt="Jupiter" onClick={this.handlePlanetClick} className={'planet jupiter'} src={require('../images/jupiter.png')}/></div>
              <div className='one wide column'></div>
              <div className='one wide column'><img alt="Saturn" onClick={this.handlePlanetClick} className={'planet saturn'} src={require('../images/saturn.png')}/></div>
              <div className='one wide column'></div>
              <div className='one wide column'><img alt="Uranus" onClick={this.handlePlanetClick} className={'planet uranus'} src={require('../images/uranus.png')}/></div>
              <div className='one wide column'></div>
              <div className='one wide column'><img alt="Neptune" onClick={this.handlePlanetClick} className={'planet neptune'} src={require('../images/neptune.png')}/></div>
            </div>
      }
    </div>);
  }
}

export default SolarSystem;
