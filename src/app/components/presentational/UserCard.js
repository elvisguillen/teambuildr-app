import React, { Component } from 'react';
import { Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import Reveal from 'react-reveal/Reveal';

const UserCard = (props) => {
  return (
    
      <Col sm='12' md='6' lg='4' xl='3'>
        <Reveal effect='fadeInUp'>
          <Card className='align-items-center'>
            <div className='img-circular-border'>
              <img src={props.image} className='thumb-user rounded-circle img-fluid'/>
            </div>
            <CardTitle>
              {props.user}
            </CardTitle>
            <CardText>
              {props.email}
            </CardText>
          </Card>
        </Reveal>
      </Col>
  )
}

export default UserCard;