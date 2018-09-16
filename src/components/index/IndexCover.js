import React, { Component } from'react';
import '../../styles/index/MainEntry.css';
import RoboLogo from '../../images/RoboLogo.png'

class BackgroundSolid extends Component {
    constructor(props) {
      /** {} */
      super(props);
    }

    render() {
      return (
        <div class="background-solid">

          <div class="content-center">
            <img src={RoboLogo} class="image" align="right" />
          </div>
          
          <div class="footer" 
            style={{"background-image": "url(" + RoboLogo + ")"}}>
          </div>

        </div>
      );
    }
}

class IndexCover extends Component {
  constructor(props) {
    /** {} */
    super(props);
  }

  render() {
    return (
      <BackgroundSolid />
    );
  }
}

export default IndexCover;