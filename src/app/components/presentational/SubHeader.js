import React, { Component } from 'react';
import { Col } from 'reactstrap';

class SubHeader extends Component {
  render() {
    return( 
      <div
        style={{
          backgroundColor: this.props.background
        }}
        className='w-100 h-20 page-header'
      >
      </div>
    )
  }
};

export default SubHeader;
