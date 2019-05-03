import React, {Component} from 'react';

import Planet from './Planet'

class SolarSystem extends Component {

  state = {
    selectedPlanet: 'mercury',
    title: 'The Solar System'
  }

  handlePlanetClick = (e) => {
    this.props.goToPlanetView()
    this.setState({
      selectedPlanet: e.target.className.split(' ')[1]
    })
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.className !== 'The Sun'
        ? e.target.className.split(' ')[1]
        : e.target.className.split(' ')[0] + ' ' + e.target.className.split(' ')[1]
    })
  }

  render() {
    const {systemView, selectedPlanet} = this.state

    return (<React.Fragment>
      {
        this.props.showPlanet

          ? <Planet returnToSolarSystem={this.props.returnToSolarSystem} selectedPlanet={selectedPlanet}/>
          : <div>
              <h1 id="solarTitle">{this.state.title}</h1>
              <div className='solar-system ui middle aligned grid'>
                <div className='one wide column'><img alt="Sun" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'The Sun'} src={require('../images/sun.png')}/></div>
                <div className='one wide column'><img alt="Mercury" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Mercury'} src={require('../images/mercury.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Venus" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Venus'} src={require('../images/venus.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Earth" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Earth'} src={require('../images/earth.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Mars" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Mars'} src={require('../images/mars.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Jupiter" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Jupiter'} src={require('../images/jupiter.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Saturn" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Saturn'} src={require('../images/saturn.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Uranus" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Uranus'} src={require('../images/uranus.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Neptune" onClick={this.handlePlanetClick} onMouseEnter={this.changeTitle} className={'planet Neptune'} src={require('../images/neptune.png')}/></div>
              </div>
            </div>
      }
    </React.Fragment>);
  }
}

export default SolarSystem;
