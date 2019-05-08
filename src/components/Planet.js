import React, {Component} from 'react';

import Moon from './Moon'

class Planet extends Component {

  render() {
    const {returnToSolarSystem, selectedPlanet} = this.props

    return (<React.Fragment>
      <h1>{selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)}</h1>

      <img alt="Planet" className={selectedPlanet} src={require(`../images/${this.props.selectedPlanet}.png`)}/> {this.props.moons.map(moon => <Moon moon={moon}/>)}

      <br/>
      <button onClick={this.props.returnToSolarSystem}>Back to Solar System view</button>
    </React.Fragment>);
  }
}

export default Planet;
