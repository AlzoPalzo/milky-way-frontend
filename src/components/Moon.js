import React, {Component} from 'react';

class Moon extends Component {

  render() {
    return (<img className='moon-image' alt="moon" src={require(`../images/moons/${this.props.planet}/${this.props.moon.name.toLowerCase()}.png`)} onMouseEnter={() => this.props.changeMoon(this.props.moon)} onMouseLeave={this.props.resetStatBox}/>)
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
