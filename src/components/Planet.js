import React, {Component} from 'react';

import Moon from './Moon'

class Planet extends Component {

  
  state = {
      name: this.props.selectedPlanet,
      distance: 0,
      orbital_period: 0,
      diameter: 0,
  }

  render() {
    const planetStyle = {
      width: '42%'
    }

    const {selectedPlanet, moons} = this.props


    return (
    <div className='ui middle aligned grid'>
      <div className='sixteen wide column' id={selectedPlanet + 'Title'}>
        <h1 id="solarTitle">{this.state.name}</h1>
      </div>

      <div className={this.size()}>
        <div className='row'>
        <img alt="Planet" id={selectedPlanet} style={planetStyle} src={require(`../images/${this.props.selectedPlanet}.png`)}/>
      </div>
       <div className='row'>

       <div className='pInfoBox' id={selectedPlanet + 'Info'}>
          {this.state.distance === 0
            ? <table id='infoTable'>
                {
                  moons.length > 0
                    ? <tbody>
                        <tr>
                          <td>Name: </td> <td>{selectedPlanet}</td>
                        </tr>
                        <tr>
                          <td>Number of moons: </td> <td>{ moons.length }</td>
                        </tr> 
                        <tr>
                          <td>Average distance from moon: </td> <td>{ (moons.map(moon => moon.distance).reduce((a,b) => a + b, 0) / moons.length).toFixed(1) } km</td>
                        </tr>
                        <tr>
                          <td>Average moon diameter: </td> <td>{ (moons.map(moon => moon.diameter).reduce((a, b) => a + b, 0 ) / moons.length).toFixed(1)} km</td>
                        </tr>
                        <tr>
                          <td>Average orbital period: </td> <td>{ (moons.map(moon => moon.orbital_period).reduce((a, b) => a + b, 0 ) / moons.length).toFixed(1)} days</td>
                        </tr>
                      </tbody>
                    : <tbody>
                      <td>Name: </td> <td>{selectedPlanet}</td>
                      <tr><td>This planet has no moons</td> </tr>
                    </tbody>
                }
              </table>
            : <table id='infoTable'>
                <tbody>
                  <tr>
                    <td>Name:</td><td>{this.state.name}</td>
                  </tr>
                  <tr>
                    <td>Distance: </td><td>{this.state.distance}</td>
                  </tr>
                  <tr>
                    <td>Diameter: </td><td>{this.state.diameter}</td>
                  </tr>
                  <tr>
                    <td>Orbital Period: </td><td>{this.state.orbital_period}</td>
                  </tr>
                </tbody>
              </table>
            <div />
          }
        </div>
      </div>
      <div className='six wide column'>
        <div style={flexBox}>
          {moons.map(moon => <Moon key={moon.id} moon={moon} changeMoon={this.changeMoon} planet={selectedPlanet} resetStatBox={this.resetStatBox}/>)}

      </div>
      </div>
      <div className='eight wide column moonBox'>
        {moons.map(moon => <Moon key={moon.id} moon={moon} planet={selectedPlanet}/>)}
      </div>
    </div>)
  }

  changeMoon = (moon) =>
  {
    this.setState({
        name: moon.name,
        distance: moon.distance,
        orbital_period: moon.orbital_period,
        diameter: moon.diameter
    })
  }


  componentDidMount() {
    if (this.props.moon.name)
    {
      this.setState({
        name: this.props.moon.name,
        distance: this.props.moon.distance,
        orbital_period: this.props.moon.orbital_period,
        diameter: this.props.moon.diameter
      });
      this.props.resetMoon()
    }
  }

  size = () => {
    if (this.props.selectedPlanet === 'Mercury' || this.props.selectedPlanet === 'Venus') {
      return 'sixteen wide column'
    } else {
      return 'eight wide column'
   }

  resetStatBox = () =>
  this.setState({
    name: this.props.selectedPlanet,
      distance: 0,
      orbital_period: 0,
      diameter: 0,
  })
}

export default Planet;
