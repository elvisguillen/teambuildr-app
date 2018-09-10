import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Layout from './Layout';

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Container>
            <Row className='h-100 d-flex flex-grow-1 align-items-center'>
              <Col md={{size: 12, offset: 0}}>
                <h1 className='text-center'>Home</h1>
              </Col>
            </Row>
          </Container>
        </Layout>
      </div>

    )
  }
}

export default Home;

