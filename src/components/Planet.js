import React, {Component} from 'react';

import Moon from './Moon'

class Planet extends Component {

  state = {
    current_Moon: "",
    moonInfo: {
      name: this.props.selectedPlanet.name,
      distance: "",
      orbital_period: "",
      diameter: ""
    }
  }

  render() {
    const planetStyle = {
      width: '42%'
    }


    const {selectedPlanet, moons} = this.props

    return (<div className='ui middle aligned grid'>
      <div className='sixteen wide column' id={selectedPlanet + 'Title'}>
        <h1 className="solarTitle">{selectedPlanet.charAt(0).toUpperCase() + selectedPlanet.slice(1)}</h1>
      </div>
      <div className='eight wide column'>
        <div className='row'>
          <img alt="Planet" id={selectedPlanet} style={planetStyle} src={require(`../images/${this.props.selectedPlanet}.png`)}/>
        </div>
        <div className='row'>
          <div className='pInfoBox' id={selectedPlanet + 'Info'}>
            {
              this.state.current_Moon === ""
                ? <table className='infoTable'>
                    <tbody>
                      <tr>
                        <td>Name:
                        </td>
                        <td>{selectedPlanet}</td>
                      </tr>
                      {
                        moons.length > 0
                          ? <tr>
                              <td>Number of moons:
                              </td>
                              <td>{moons.length}</td>
                            </tr>
                          : <tr>
                              <td>This planet has no moons</td>
                            </tr>
                      }
                      {
                        moons.length > 0
                          ? <tr>
                              <td>Average moon diameter:
                              </td>
                              <td>{(moons.map(moon => moon.diameter).reduce((a, b) => a + b, 0) / moons.length).toFixed(2)}</td>
                            </tr>
                          : null
                      }
                    </tbody>
                  </table>
                : <table id='infoTable'></table>
            }
          </div>
        </div>
      </div>
      <div className='eight wide column moonBox'>
        {moons.map(moon => <Moon key={moon.id} moon={moon} planet={selectedPlanet}/>)}
      </div>
    </div>);
  }
}

export default Planet;
