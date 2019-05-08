import React, {Component} from 'react';

import Planet from './Planet'

class SolarSystem extends Component {

  state = {
    selectedPlanet: 'Mercury',
    viewPlanet: 'The Solar System',
    planetInfo: {
      atmosphere: 1,
      day_length: 24,
      diameter: 12756,
      gravity: 9.8,
      mass: 1,
      name: "Earth",
      orbital_period: 365,
      sun_distance: 149.6,
      temperature: 15
    }
  }

  render() {
    const {selectedPlanet} = this.state

    return (<React.Fragment>
      {
        this.props.showPlanet

          ? <Planet returnToSolarSystem={this.props.returnToSolarSystem} selectedPlanet={selectedPlanet} moons={this.planetMoons()}/>
          : <React.Fragment>
              <h1 id="solarTitle">{this.state.viewPlanet}</h1>
              <div className='solar-system ui middle aligned grid'>
                <div className='one wide column'><img alt="The Sun" onMouseEnter={this.changePlanet} className={'The Sun'} src={require('../images/Sun.png')}/></div>
                <div className='one wide column'><img alt="Mercury" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Mercury'} src={require('../images/Mercury.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Venus" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Venus'} src={require('../images/Venus.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Earth" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Earth'} src={require('../images/Earth.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Mars" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Mars'} src={require('../images/Mars.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Jupiter" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Jupiter'} src={require('../images/Jupiter.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Saturn" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Saturn'} src={require('../images/Saturn.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Uranus" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Uranus'} src={require('../images/Uranus.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Neptune" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={'planet Neptune'} src={require('../images/Neptune.png')}/></div>

                <div className='six wide column'></div>
                <div className='four wide column'>
                  <div className='infoBox'>
                    <table id='infoTable'>
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{this.state.planetInfo.name}</td>
                        </tr>
                        <tr>
                          <td>Diameter</td>
                          <td>{this.state.planetInfo.diameter}
                            km</td>
                        </tr>
                        <tr>
                          <td>Mass</td>
                          <td>{this.state.planetInfo.mass}
                            Earths</td>
                        </tr>
                        <tr>
                          <td>Length of Day</td>
                          <td>{this.state.planetInfo.day_length}
                            Hours</td>
                        </tr>
                        <tr>
                          <td>Gravity</td>
                          <td>{this.state.planetInfo.gravity}
                            m/s&#178;</td>
                        </tr>
                        <tr>
                          <td>Orbital Period</td>
                          <td>{this.state.planetInfo.orbital_period}
                            days</td>
                        </tr>
                        <tr>
                          <td>Atmospheres</td>
                          <td>{
                              this.state.planetInfo.atmosphere === -1
                                ? 'N/A'
                                : this.state.planetInfo.atmosphere
                            }
                            atm(s)</td>
                        </tr>
                        <tr>
                          <td>Sun Distance</td>
                          <td>{this.state.planetInfo.sun_distance}
                            million km</td>
                        </tr>
                        <tr>
                          <td>Surface Temp</td>
                          <td>{this.state.planetInfo.temperature}
                            &#176;C</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='six wide column'></div>
              </div>
            </React.Fragment>
      }
    </React.Fragment>);
  }

  handlePlanetClick = (e) => {
    this.props.goToPlanetView()
    this.setState({
      selectedPlanet: e.target.className.split(' ')[1]
    })
  }

  handleMouseEnter = (e) => {
    this.changePlanet(e)
    this.planetInfo(e)
  }

  changePlanet = (e) => {
    this.setState({
      viewPlanet: e.target.className !== 'The Sun'
        ? e.target.className.split(' ')[1]
        : e.target.className.split(' ')[0] + ' ' + e.target.className.split(' ')[1]
    })
  }
  planetInfo = (e) => {
    const info = this.props.planets.find(planet => planet.name === e.target.className.split(' ')[1])

    this.setState({
      planetInfo: {
        atmosphere: info.atmosphere,
        day_length: info.day_length,
        diameter: info.diameter,
        gravity: info.gravity,
        mass: info.mass,
        name: info.name,
        orbital_period: info.orbital_period,
        sun_distance: info.sun_distance,
        temperature: info.temperature
      }
    })

  }

  planetMoons = () => {
    const selectedPlanet = this.props.planets.find(planet => planet.name === this.state.selectedPlanet)
    return this.props.moons.filter(moon => moon.planet_id === selectedPlanet.id)
  }

}

export default SolarSystem;
