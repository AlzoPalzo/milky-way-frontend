import React, { Component } from 'react';

class Planet extends Component {

    
    render() {
        const {returnToSolarSystem, selectedPlanet} = this.props

        return (
            <div>
                <h1>{selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)}</h1>
                <img className={selectedPlanet} src={require(`../images/${selectedPlanet}.png`)} /> <br/>
                <button onClick={returnToSolarSystem}>Back to Solar System view</button>
            </div>
        );
    }
}

export default Planet;
