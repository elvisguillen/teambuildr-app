import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserCard from '../presentational/UserCard';
import { fetchUser, setFilter } from '../../actions/usersActions';

const FilterLink = ({filter, children, handleFilter}) => {
  return (
    <a href="#" className='link-filter' onClick={handleFilter}>
      {children}
    </a>
  )
}

const filterUsers = (users, userFilter) => {
  switch(userFilter) {
    case 'SHOW_ALL':
      return users;
    case 'SHOW_COACHES':
      return users.filter(user => user.admin === 1);
    case 'SHOW_ATHLETES':
      return users.filter(user => user.admin === 0);
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch(fetchUser())
  },
  handleFilter: (filter) => {
    dispatch(setFilter(filter))
  }
})

class UsersContainer extends Component {
  constructor() {
    super()
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser()
  }

  handleFilter(e, filter) {
    e.preventDefault()
    this.props.handleFilter(filter)
  }
  render() {
    // console.log(this.props.auth.users)
    // const { first_name, last_email } = this.props.users;
    const { usersList } = this.props;
    console.log(usersList.userFilter)
    // console.log(Object.keys(users));
    const visibleUsers = filterUsers(
      usersList.users,
      usersList.userFilter
    )

    return (
      <div className='users-container'>
        <Row className='header-users'>
          <Col sm='6'>
            <h5>Users</h5>
          </Col>
          <Col sm='6' className='d-flex justify-content-end'>
            <FilterLink handleFilter={(e) => this.handleFilter(e, 'SHOW_ALL')}>Show All</FilterLink>
            <FilterLink handleFilter={(e) => this.handleFilter(e, 'SHOW_COACHES')}>Coaches</FilterLink>
            <FilterLink handleFilter={(e) => this.handleFilter(e, 'SHOW_ATHLETES')}>Athletes</FilterLink>
          </Col>
        </Row>
        <Row>
          {/* {Object.keys(users).map((user) => {
            return (
              <UserCard user={user.first_name} email={user.last_email}/>
            )
          })} */}
          {
            usersList.fetchedUsers === true ?
              visibleUsers.map(user => {
                return(
                  <UserCard 
                    key={user.id}
                    user={`${user.first} ${user.last}`} 
                    email={user.email}
                    image={user.pic}
                  />
                )
            })
              // console.log('YEAHHH')
            
            : console.log('AHHH')
          }
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);