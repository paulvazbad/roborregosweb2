import React, { Component } from'react';

import IndexCover from './IndexCover.js'
import CompleteImage from '../CompleteImage.js'

import ImgBackground1 from '../../images/IndexBackground1.jpg'

/** 
 * Minimum number of pixels to toggle the visibility of 
 * the logo when scrolling down.
 */
const SCROLL_TOGGLE_VISIBLE = 30;

class Index extends Component {
  constructor(props) {
    /** {} */
    super(props);

    this.state = {logoVisible: true};

    this.handleWindowScroll = this.handleWindowScroll.bind(this);

    window.addEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    return (
      <div>
        <IndexCover logoVisible={this.state.logoVisible}/>
        <CompleteImage path={ImgBackground1}/>
      </div>
    );
  }

  handleWindowScroll() {
    if (window.scrollY > SCROLL_TOGGLE_VISIBLE) {
      this.setState({
        logoVisible: false,
      });
    } else {
      this.setState({
        logoVisible: true,
      });
    }  
  }
}

export default Index;