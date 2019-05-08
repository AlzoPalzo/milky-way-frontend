import React, {Component} from 'react';

import Moon from './Moon'

class Planet extends Component {

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


const {returnToSolarSystem, selectedPlanet} = this.props

    return (<div className='ui middle aligned grid'>
      <div className='sixteen wide column'>
        <h1 id="solarTitle">{selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)}</h1>
      </div>
      <div className='six wide column'>
        <img alt="Planet" id={selectedPlanet} style={planetStyle} src={require(`../images/${this.props.selectedPlanet}.png`)}/>
      </div>
      <div className='four wide column' style={paddingFifty}>
        <div className='infoBox' style={paddingLeft}>
          I am the info box
        </div>
      </div>
      <div className='six wide column'>
        <div style={flexBox}>
          {this.props.moons.map(moon => <Moon key={moon.id} moon={moon} planet={selectedPlanet}/>)}
        </div>
      </div>
    </div>);
  }
}

export default Planet;
