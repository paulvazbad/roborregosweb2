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
            <div className="left-div">
              <div className="center-left-div">
                {this.props.children}
              </div>
            </div>

            <div className="div-img">
              <img src={RoboLogo} class="image-background" align="right" />
            </div>
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
      <BackgroundSolid>
        <div className="index-cover-content">
          <DisappearingLogo />
          <h1>RoBorregos: Official Representative Robotics Team</h1>
          <h3>Tec de Monterrey</h3>
          <h4>Monterrey, N.L., Mexico</h4>
        </div>
      </BackgroundSolid>
    );
  }
}

export default IndexCover;