import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

import FormContainer from './container/FormContainer';
import MainLogo from '../../images/teambuildr-icon-logo.png';

class Login extends Component {
  render() {
    return (
      <Container>
        <Row className='h-100 d-flex flex-grow-1 align-items-center'>

          <Col md={{size: 4, offset: 4}}>
            <img src={MainLogo} className='main-logo img-fluid'/>
            <Card>
            <h1>Login</h1>
              <FormContainer />
            </Card>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Login;

