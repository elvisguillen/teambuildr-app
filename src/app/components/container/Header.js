import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import { 
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import logoff from '../../../images/power.png'

const mapStateToProps = state => ({
  ...state
})

class Header extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated, currentUser } = this.props.auth;
    const { user, skin } = this.props.auth
    console.log(skin)
    const publicLinks = (
      <Link to='/login'>
        Log In
      </Link>
    )

    const privateLinks = (
      <div className='d-flex flex-col align-items-center'>
        <img src={user.pic} className='thumb-user header-thumb rounded-circle img-fluid'/>
        <Link to="/account"><h6>{user.first} {user.last}</h6></Link>
        <a href='#' onClick={this.logout}>
          <img className='logoff' src={logoff}/>
        </a>
      </div>
    )

    return (
        <Navbar className='header justify-content-end'>
          <Nav>
            <NavItem>
              { isAuthenticated ? privateLinks : publicLinks }
            </NavItem>
          </Nav>
        </Navbar>
    )
  }
};

export default connect(mapStateToProps, { logout })(Header);

