import React, { Component } from'react';

import '../../styles/index/CoverLetter.css';
import RoboLogo from '../../images/RoboLogo.png'

class Index extends Component {
  constructor(props) {
    /** {widthContainer: string, verticalPadding: string} */
    super(props);
  }

  render() {
    const styleOutterDiv = {
      backgroundImage: 'url(' + RoboLogo + ')',
      paddingTop:this.props.verticalPadding,
      paddingBottom:this.props.verticalPadding,
    };

    return (
      <div className="cover-letters" style={styleOutterDiv}>
        <div className="container" style={{width:this.props.widthContainer}}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Index;