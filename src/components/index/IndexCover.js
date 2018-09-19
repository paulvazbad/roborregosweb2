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
        <div className="background-solid">

          <div className="content-center">
            <div className="left-div">
              <div className="center-left-div">
                {this.props.children}
              </div>
            </div>

            <div className="div-img">
              <img src={RoboLogo} className="image-background" align="right" />
            </div>
          </div>
          
          <div className="footer" 
            style={{backgroundImage: "url(" + RoboLogo + ")"}}>
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
        <img 
          src={RoboLogo} 
          className={"disappearing-img " + (this.props.visible ? "img-visible" : "img-invisible")}/>
      </div>
    );
  }
}

class IndexCover extends Component {
  constructor(props) {
    /** {logoVisible: boolean} */
    super(props);
  }

  render() {
    return (
      <BackgroundSolid>
        <div className="index-cover-content">
          <DisappearingLogo visible={this.props.logoVisible} />
          <h1>RoBorregos: Official Representative Robotics Team</h1>
          <h3>Tec de Monterrey</h3>
          <h4>Monterrey, N.L., Mexico</h4>
        </div>
      </BackgroundSolid>
    );
  }
}

export default IndexCover;