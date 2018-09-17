import React, { Component } from'react';
import '../../styles/index/IndexCover.css';
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

class DisappearingLogo extends Component {
  constructor(props) {
    /** {visible : boolean} */
    super(props);
  }

  render() {
    return (
      <div className="disappearing-logo">
        <div className="size-holder-div"></div>
        <img src={RoboLogo} className="disappearing-img"/>
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