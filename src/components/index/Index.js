import React, { Component } from'react';

import IndexCover from './IndexCover.js'
import CompleteImage from '../CompleteImage.js'

import ImgBackground1 from '../../images/IndexBackground1.jpg'

class Index extends Component {
  constructor(props) {
    /** {} */
    super(props);

    this.state = {logoVisible: true};
  }

  render() {
    return (
      <div>
        <IndexCover logoVisible={this.state.logoVisible}/>
        <CompleteImage path={ImgBackground1}/>
      </div>
    );
  }
}

export default Index;