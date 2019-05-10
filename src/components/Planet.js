import React, {Component} from 'react';

import Moon from './Moon'

class Planet extends Component {

  state = {
    name: this.props.selectedPlanet,
    distance: 0,
    orbital_period: 0,
    diameter: 0,
    sort_size: true
  }

  render() {
    const planetStyle = {
      width: '42%'
    }

    const {selectedPlanet, moons} = this.props
    const moonsByDistance = [...moons].sort((a, b) => a.distance - b.distance)
    const moonsBySize = [...moons].sort(
      (a, b) => a.diameter > b.diameter
      ? -1
      : 1)
    // debugger

    return (<div className='ui middle aligned grid'>
      <div className='sixteen wide column' id={selectedPlanet + 'Title'}>
        {
          this.props.selectedPlanet === 'Mercury' || this.props.selectedPlanet === 'Venus'
            ? null
            : <div className="ui buttons">
                <button className="ui button colour1" onClick={() => this.sortBy(true)}>Sort by Distance</button>
                <div className="or"></div>
                <button className="ui button colour2" onClick={() => this.sortBy(false)}>Sort by Size</button>
              </div>
        }
        <h1 className="solarTitle">{this.state.name}</h1>
      </div>

      <div className={this.size()}>
        <div className='row'>
          <img alt="Planet" id={selectedPlanet} style={planetStyle} src={require(`../images/${this.props.selectedPlanet}.png`)}/>
        </div>
        <div className='row'>

          <div className='pInfoBox' id={selectedPlanet + 'Info'}>
            {
              this.state.distance === 0
                ? <table className='infoTable'>
                    {
                      moons.length > 0
                        ? <tbody>
                            <tr>
                              <td>Number of Notable Moons
                              </td>
                              <td>{moons.length}</td>
                            </tr>
                            <tr>
                              <td>Average Distance from Moon
                              </td>
                              <td>{(moons.map(moon => moon.distance).reduce((a, b) => a + b, 0) / moons.length).toFixed(0)}
                                &nbsp;km</td>
                            </tr>
                            <tr>
                              <td>Average Moon Diameter
                              </td>
                              <td>{(moons.map(moon => moon.diameter).reduce((a, b) => a + b, 0) / moons.length).toFixed(0)}
                                &nbsp;km</td>
                            </tr>
                            <tr>
                              <td>Average Orbital Period
                              </td>
                              <td>{(moons.map(moon => moon.orbital_period).reduce((a, b) => a + b, 0) / moons.length).toFixed(1)}
                                &nbsp;days</td>
                            </tr>
                          </tbody>
                        : <tbody>
                          <tr>
                            <td>Name
                            </td>
                          <td>{selectedPlanet}</td>
                        </tr>
                          <tr>
                            <td>Number of Notable Moons</td>
                            <td>This Planet has no Moons</td>
                          </tr>
                        </tbody>
                    }
                  </table>
                : <table className='infoTable'>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{this.state.name}</td>
                      </tr>
                      <tr>
                        <td>Distance
                        </td>
                        <td>{this.state.distance}&nbsp;km</td>
                      </tr>
                      <tr>
                        <td>Diameter
                        </td>
                        <td>{this.state.diameter}&nbsp;km</td>
                      </tr>
                      <tr>
                        <td>Orbital Period
                        </td>
                        <td>{this.state.orbital_period}&nbsp;days</td>
                      </tr>
                    </tbody>
                  </table>
            }
          </div>
        </div>
      </div>

      <div className='six wide column'>
        <div className='moonBox'>
          {
            this.state.sort_size
              ? moonsBySize.map(moon => <Moon key={moon.id} moon={moon} changeMoon={this.changeMoon} planet={selectedPlanet} resetStatBox={this.resetStatBox}/>)
              : moonsByDistance.map(moon => <Moon key={moon.id} moon={moon} changeMoon={this.changeMoon} planet={selectedPlanet} resetStatBox={this.resetStatBox}/>)
          }
        </div>
      </div>

    </div>)
  }

  changeMoon = (moon) => {
    this.setState({name: moon.name, distance: moon.distance, orbital_period: moon.orbital_period, diameter: moon.diameter})
  }

  componentDidMount() {
    if (this.props.moon.name) {
      this.setState({name: this.props.moon.name, distance: this.props.moon.distance, orbital_period: this.props.moon.orbital_period, diameter: this.props.moon.diameter});
      this.props.resetMoon()
    }
  }

  size = () => {
    if (this.props.selectedPlanet === 'Mercury' || this.props.selectedPlanet === 'Venus') {
      return 'sixteen wide column'
    } else {
      return 'eight wide column'
    }
  }

  resetStatBox = () => this.setState({name: this.props.selectedPlanet, distance: 0, orbital_period: 0, diameter: 0})

  sortBy = (arg) => {
    arg
      ? this.setState({sort_size: false})
      : this.setState({sort_size: true})
  }
}
export default Planet;
