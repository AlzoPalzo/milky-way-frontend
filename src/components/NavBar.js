import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    const {returnToGalaxy, goToSolarSystem, goToPlanetView} = this.props
    return (<div id="navbar" className="ui grid middle aligned">
      <div className="four wide column">
        <img id="logo" src={require("../images/logo.png")}/>
      </div>
      <div className="eight wide column" id="buttoon">
        <button className="ui button white" onClick={returnToGalaxy}>Galaxy View</button>
        <button className="ui button white" onClick={goToSolarSystem}>Solar System View</button>
        <button className="ui button white" onClick={goToPlanetView}>Planet View</button>
      </div>
      <div className="four wide column" id="buttoon">
        <div className="ui category search">
          <div className="ui icon input">
            <input className="prompt" id="search" type="text" placeholder="Search the Galaxy..."/>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default NavBar;
