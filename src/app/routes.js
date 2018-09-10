import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import history from './history';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Account from './components/Account';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const mapStateToProps = state => ({ 
  ...state
})

class Routes extends Component {
  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/login' component={Login}/>
          <PrivateRoute exact path='/dashboard' component={Dashboard} authed={isAuthenticated} />
          <PrivateRoute exact path='/account' component={Account} authed={isAuthenticated} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default connect(mapStateToProps)(Routes);