import React, { Component } from'react';
import '../styles/CompleteImage.css';

class CompleteImage extends Component {
  constructor(props) {
    /** {path:string} */
    super(props);
  }

  render() {
    return (
      <div className="complete-image">
        <img 
          src={this.props.path}
          className="image" />
      </div>
    );
  }
}

export default CompleteImage;