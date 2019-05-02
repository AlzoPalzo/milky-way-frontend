import React, { Component } from 'react';

import Planet from './Planet'

class SolarSystem extends Component {

    state = {
        selectedPlanet: ''
    }

    handlePlanetClick = (e) =>
    {
        this.props.goToPlanetView,
        this.setState({
            selectedPlanet: e.target.className
        })
    }


    render() {
        const {systemView, selectedPlanet} = this.state

        return (
            <div>
                {
                    this.props.showPlanet
                    ?<div className={'solar-system'}>
                        <img onClick={this.handlePlanetClick} className={'sun'} src={require('../images/sun.png')}/>
                        <img onClick={this.handlePlanetClick} className={'mercury'} src={require('../images/mercury.png')}/>
                        <img onClick={this.handlePlanetClick} className={'venus'} src={require('../images/venus.png')}/>
                        <img onClick={this.handlePlanetClick} className={'earth'} src={require('../images/earth.png')}/>
                        <img onClick={this.handlePlanetClick} className={'mars'} src={require('../images/mars.png')}/>
                        <img onClick={this.handlePlanetClick} className={'jupiter'} src={require('../images/jupiter.png')}/>
                        <img onClick={this.handlePlanetClick} className={'saturn'} src={require('../images/saturn.png')}/>
                        <img onClick={this.handlePlanetClick} className={'neptune'} src={require('../images/uranus.png')}/>
                        <img onClick={this.handlePlanetClick} className={'uranus'} src={require('../images/neptune.png')}/>
                    </div>
                    :<Planet returnToSolarSystem={this.returnToSolarSystem} selectedPlanet={selectedPlanet}/>
                }
            </div>
        );
    }
}

export default SolarSystem;
