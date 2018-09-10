import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import TweenMax from 'gsap';
import Reveal from 'react-reveal/Reveal';

class AccountContainer extends Component {
  render() {
    const user = this.props;

    return (
      <div 
        className='h-100 d-flex flex-grow-1 align-items-center row'
      >

          <Col 
            sm={{size: 6, offset: 3}}
            className='account-container d-flex flex-column align-items-center text-center'
            style={{
              borderTop: `10px solid ${user.border}`
            }}
          >
            <div className='img-circular-border large account'>
              <img src={user.image} className='thumb-user rounded-circle img-fluid'/>
            </div>
            <div className='title'>
              <h1>{user.first} {user.last}</h1>
            </div>
            <div className='copy'>
              <h5>Email: {user.email}</h5>
              <h5>Phone: {user.phone}</h5>
              <h5>Gender: {user.gender === 0 ? 'Female' : 'Male'} </h5>
            </div>
          </Col>
      </div>
    )
  }
}

export default AccountContainer;