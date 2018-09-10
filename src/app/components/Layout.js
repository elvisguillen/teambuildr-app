import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, NavItem } from 'reactstrap';

import Sidebar from './container/Sidebar';
import Header from './container/Header';

class Layout extends Component {
  render() {
    return (
      
      <Row className='d-flex'>
        
        <Sidebar />
        <div className='flex-grow-1 main'>
          <Header />
          {this.props.children}
        </div>
      </Row>

    )
  }
}

export default Layout;

