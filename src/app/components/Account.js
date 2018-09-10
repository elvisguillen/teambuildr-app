import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Layout from './Layout';
import SubHeader from './presentational/SubHeader';
import AccountContainer from './container/AccountContainer';

const mapStateToProps = state => ({
  ...state.auth
})

class Account extends Component {
  constructor() {
    super();
  }
  render() {
    const skin = this.props.skin;
    const user = this.props.user;
    const currentUser = this.props.currentUser;
    return (
      <Layout>
        <SubHeader 
          background={currentUser ? skin.primary : ''}
        />
        <Container>
          <Row className='h-100 d-flex flex-grow-1 align-items-center'>
            <AccountContainer 
              image={user.pic}
              first={user.first}
              last={user.last}
              email={user.email}
              phone={user.phone}
              gender={1}
              border={skin.secondary}
            />
          </Row>
        </Container>
      </Layout>

    )
  }
}

export default connect(mapStateToProps)(Account);

