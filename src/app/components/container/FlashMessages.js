import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessages extends Component {
  constructor() {
    
  }

  render() {
    <Alert color='danger'></Alert>
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessages)