import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    const {returnToGalaxy, goToSolarSystem, goToPlanetView} = this.props
    return (<div>
      <button className="ui button green" onClick={returnToGalaxy}>Galaxy View</button>
      <button className="ui button green" onClick={goToSolarSystem}>Solar System View</button>
      <button className="ui button green" onClick={goToPlanetView}>Planet View</button>
    </div>);
  }
}

export default NavBar;
