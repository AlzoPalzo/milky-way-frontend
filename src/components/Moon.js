import React, {Component} from 'react';

class Moon extends Component {

  state = {
    showInfo: false
  }

  displayInfo = () => {
    this.setState({showInfo: true})
  }

  hideInfo = () => {
    this.setState({showInfo: false})
  }

  render() {
    return (<img className='moon-image' alt="moon" src={require('../images/moons/Earth/theMoon.png')} onMouseEnter={this.displayInfo} onMouseLeave={this.hideInfo}/>)
  }
}

export default Moon;
// <div className={'ui card'} style={style}>
//   <div className='content'>
//     <div className='header'>The Moon</div>
//     <div className='description'>
//       This is a Moon</div>
//   </div>
// </div>



// const style = this.state.showInfo
// ? {}
// : {
//   display: 'none'
// }
