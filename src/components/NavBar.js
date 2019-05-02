import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        const { returnToGalaxy, goToSolarSystem, goToPlanetView} = this.props
        return (
            <div>
               <button onClick={returnToGalaxy}>Galaxy View</button> 
               <button onClick={goToSolarSystem}>Solar System View</button> 
               <button onClick={goToPlanetView}>Planet View</button> 
            </div>
        );
    }
}

export default NavBar;
