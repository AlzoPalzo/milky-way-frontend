import React, {Component} from 'react';

import Moon from './Moon'

class Planet extends Component {

  state = {
    current_Moon: "",
    moonInfo:
    {
      name: this.props.selectedPlanet.name,
      distance: "",
      orbital_period: "",
      diameter: "",

    }
  }

  render() {
    const planetStyle = {
      width: '50%'
    }
    const flexBox = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center'
    }
    const paddingLeft = {
      paddingLeft: '20px'
    }
    const paddingFifty = {
      padding: '50px'
    }


const {returnToSolarSystem, selectedPlanet, moons} = this.props

    return (<div className='ui middle aligned grid'>
      <div className='sixteen wide column'>
        <h1 id="solarTitle">{selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)}</h1>
      </div>
      <div className='six wide column'>
        <img alt="Planet" id={selectedPlanet} style={planetStyle} src={require(`../images/${this.props.selectedPlanet}.png`)}/>
      </div>
      <div className='four wide column' style={paddingFifty}>
        <div className='infoBox' style={paddingLeft}>
          {this.state.current_Moon === ""
            ? <table id='infoTable'>
                <tbody>
                  <tr>
                    <td>Name: </td> <td>{selectedPlanet}</td>
                  </tr>
                    {
                      moons.length > 0
                      ? <tr><td>Number of moons: </td> <td>{ moons.length }</td></tr>
                      : <tr><td>This planet has no moons</td> </tr>
                    }
                    {
                      moons.length > 0
                      ? <tr><td>Average moon diameter: </td> <td>{ (moons.map(moon => moon.diameter).reduce((a, b) => a + b, 0 ) / moons.length).toFixed(2)}</td></tr>
                      : null
                    }
                </tbody>
              </table>
            : <table id='infoTable'></table>
          }
        </div>
      </div>
      <div className='six wide column'>
        <div style={flexBox}>
          {moons.map(moon => <Moon key={moon.id} moon={moon} planet={selectedPlanet}/>)}
        </div>
      </div>
    </div>);
  }
}

export default Planet;
