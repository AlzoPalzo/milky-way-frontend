import React, {Component} from 'react';

import Planet from './Planet'

class SolarSystem extends Component {
  state = {
    moon: {},
    selectedPlanet: "Earth",
    viewPlanet: "The Solar System",
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
    },
    scale: false
  };

  search = () => {
    const {
      searchTerm,
      resetSearch,
      planets,
      moons,
      goToPlanetView
    } = this.props;
    const searchType = searchTerm.split(" ")[1];
    if (searchTerm !== "") {
      if (searchType === "p") {
        const planetName = searchTerm.split(" ")[0];
        const planet = this.props.planets.find(
          planet => (planet.name.toLowerCase() === planetName.toLowerCase())
        );
        this.setState({
          selectedPlanet:
            planetName.charAt(0).toUpperCase() + planetName.slice(1),
          viewPlanet: planetName.charAt(0).toUpperCase() + planetName.slice(1),
          planetInfo: {
            atmosphere: planet.atmosphere,
            day_length: planet.day_length,
            diameter: planet.diameter,
            gravity: planet.gravity,
            mass: planet.mass,
            name: planet.name.charAt(0).toUpperCase() + planet.name.slice(1),
            orbital_period: planet.orbital_period,
            sun_distance: planet.sun_distance,
            temperature: planet.temperature
          }
        });
      } else {
        const moon = moons.find(
          moon => moon.name.toLowerCase() === searchTerm.split(" ")[0]
        );
        const planet = planets.find(planet => planet.id === moon.planet_id);
        this.setState(
          {
            moon: moon,
            selectedPlanet:
              planet.name.charAt(0).toUpperCase() + planet.name.slice(1)
          },
          goToPlanetView
        );
      }
      resetSearch();
    }
  };

  render() {
    const { selectedPlanet, scale } = this.state;


    return (
      <React.Fragment>
        <div className="ui toggle checkbox">
          <input type="checkbox" name="public" onChange={this.scalePlanet} />
          <label>SCALE UP MUFUKKA</label>
        </div>

        {this.search()}
        {this.props.showPlanet ? (
          <Planet
            moon={this.state.moon}
            resetMoon={this.resetMoon}
            resetSearch={this.props.resetSearch}
            searchTerm={this.props.searchTerm}
            returnToSolarSystem={this.props.returnToSolarSystem}
            selectedPlanet={selectedPlanet}
            moons={this.planetMoons()}
          />
        ) : (
          <React.Fragment>
            <h1 className="solarTitle">{this.state.viewPlanet}</h1>
             <div className= {scale ? 'solar-system ui middle aligned grid SolarSystemScale' : 'solar-system ui middle aligned grid'}>
                <div className='one wide column'><img alt="The Sun" onMouseEnter={this.changePlanet} className={scale ? 'The Sun SunScale' : 'The Sun'} src={require('../images/Sun.png')}/></div>
                <div className='one wide column'><img alt="Mercury" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Mercury MercuryScale' : 'planet Mercury'} src={require('../images/Mercury.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Venus" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Venus VenusScale' : 'planet Venus'} src={require('../images/Venus.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Earth" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Earth EarthScale' : 'planet Earth'} src={require('../images/Earth.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Mars" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Mars MarsScale' :'planet Mars'} src={require('../images/Mars.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Jupiter" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Jupiter JupiterScale' :'planet Jupiter'} src={require('../images/Jupiter.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Saturn" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Saturn SaturnScale' :'planet Saturn'} src={require('../images/Saturn.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Uranus" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Uranus UranusScale' :'planet Uranus'} src={require('../images/Uranus.png')}/></div>
                <div className='one wide column'></div>
                <div className='one wide column'><img alt="Neptune" onClick={this.handlePlanetClick} onMouseEnter={this.handleMouseEnter} className={scale ? 'planet Neptune NeptuneScale' :'planet Neptune'} src={require('../images/Neptune.png')}/></div>


              <div className="six wide column" />
              <div className={scale ? "four wide column InfoScale" :"four wide column"}>
                <div className="infoBox">
                  <table className="infoTable">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{this.state.planetInfo.name}</td>
                      </tr>
                      <tr>
                        <td>Diameter</td>
                        <td>
                          {this.state.planetInfo.diameter}
                          &nbsp;km
                        </td>
                      </tr>
                      <tr>
                        <td>Mass</td>
                        <td>
                          {this.state.planetInfo.mass}
                          &nbsp;Earths
                        </td>
                      </tr>
                      <tr>
                        <td>Length of Day</td>
                        <td>
                          {this.state.planetInfo.day_length}
                          &nbsp;Hours
                        </td>
                      </tr>
                      <tr>
                        <td>Gravity</td>
                        <td>
                          {this.state.planetInfo.gravity}
                          &nbsp;m/s&#178;
                        </td>
                      </tr>
                      <tr>
                        <td>Orbital Period</td>
                        <td>
                          {this.state.planetInfo.orbital_period}
                          &nbsp;days
                        </td>
                      </tr>
                      <tr>
                        <td>Atmospheres</td>
                        <td>
                          {this.state.planetInfo.atmosphere === -1
                            ? "N/A"
                            : this.state.planetInfo.atmosphere}
                          &nbsp;atm(s)
                        </td>
                      </tr>
                      <tr>
                        <td>Sun Distance</td>
                        <td>
                          {this.state.planetInfo.sun_distance}
                          &nbsp;million km
                        </td>
                      </tr>
                      <tr>
                        <td>Surface Temp</td>
                        <td>
                          {this.state.planetInfo.temperature}
                          &#176;C
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="six wide column" />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  handlePlanetClick = e => {
    this.props.goToPlanetView();
    this.setState({
      selectedPlanet: e.target.className.split(" ")[1]
    });
  };

  handleMouseEnter = e => {
    this.changePlanet(e);
    this.planetInfo(e);
  };

  changePlanet = e => {
    this.setState({
      viewPlanet:
        e.target.className !== "The Sun"
          ? e.target.className.split(" ")[1]
          : e.target.className.split(" ")[0] +
            " " +
            e.target.className.split(" ")[1]
    });
  };
  planetInfo = e => {
    const info = this.props.planets.find(
      planet => planet.name === e.target.className.split(" ")[1]
    );

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
    });
  };

  resetMoon = () => {
    this.setState({
      moon: {}
    })
  }

  planetMoons = () => {
    const selectedPlanet = this.props.planets.find(
      planet => planet.name === this.state.selectedPlanet
    )
    return this.props.moons.filter(
      moon => moon.planet_id === selectedPlanet.id
    )
  }

  scalePlanet = () => {
    this.setState({
      scale: !this.state.scale
    })
  }
}

export default SolarSystem;
