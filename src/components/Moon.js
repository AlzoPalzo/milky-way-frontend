import React, { Component } from 'react';

class Moon extends Component {

    state = {
        showInfo: false
    }

    displayInfo = () =>
    {
        this.setState({
            showInfo: true
        })
    }

    hideInfo = () =>
    {
        this.setState({
            showInfo: false
        })
    }

    render() {
        const style = this.state.showInfo ? {} : {display: 'none'}

        return (

            <div className='moon' >

                <img className='moon-image' src={require('../images/moons/theMoon.png')} onMouseEnter={this.displayInfo} onMouseLeave={this.hideInfo}/>

                <div className={'ui card'} style={style}>
                    <div className='content'>
                        <div className='header'>The Moon</div>
                        <div className='description'> This is a Moon</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Moon;
