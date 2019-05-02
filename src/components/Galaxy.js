import React, { Component } from 'react';

import SolarSystem from './SolarSystem'

class Galaxy extends Component {

    state = {
        clicked: false
    }

    handleGalaxyClick = () =>
    {
        this.setState({
            clicked: true
        })
    }

    render() {
        return (
            <div onClick={ this.handleGalaxyClick }>
                {!this.state.clicked
                ? "I'm a galaxy"
                : <SolarSystem />
                }
            </div>
        );
    }
}

export default Galaxy;
