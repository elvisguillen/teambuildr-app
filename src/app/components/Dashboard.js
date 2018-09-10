import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import Layout from './Layout';
import UsersContainer from './container/UsersContainer';

const mapStateToProps = state => ({
  ...state
})

class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    const { first } = this.props.auth.user
    return (
      <Layout>
        <Container>
          <Row className='h-100 d-flex flex-grow-1 align-items-center'>
            <Col md={{size: 12, offset: 12}}>
              <h2 className='page-title'>Dashboard</h2>
              <UsersContainer/>
            </Col>
          </Row>
        </Container>
      </Layout>

    )
  }
}

export default connect(mapStateToProps)(Dashboard);

