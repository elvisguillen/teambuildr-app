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

const mapStateToProps = state => ({
  ...state
})



class Sidebar extends Component {
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

    const privateLinks = (
      <div>
        <img src={user.pic} className='thumb-user header-thumb rounded-circle img-fluid'/>
        {/* {user.first} {user.last}  */}
        <a href='#' onClick={this.logout}>Logout</a>
      </div>
    )

    return (
        <Col
          sm='1'
          className='sidebar d-none d-lg-block'
          style={{
            backgroundColor: currentUser ? skin.primary : '#123597'
          }}
        >
          <NavbarBrand>             
            { currentUser ? 
              <img src={skin.logo} className='logo img-fluid'/> 
              : 'TeamBuildr' 
            }
          </NavbarBrand>
{/*         
          { isAuthenticated ? privateLinks : publicLinks } */}

        </Col>
    )
  }
};

export default connect(mapStateToProps, { logout })(Sidebar);

