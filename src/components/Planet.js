import React, {Component} from 'react';

class Planet extends Component {

  render() {
    const {returnToSolarSystem, selectedPlanet} = this.props

    return (<div>
      <h1>{selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)}</h1>
      <img alt="Selected Planet" className={selectedPlanet} src={require(`../images/${this.props.selectedPlanet}.png`)}/>
      <br/>
      <button onClick={this.props.returnToSolarSystem}>Back to Solar System view</button>
    </div>);
  }
}

export default Planet;
