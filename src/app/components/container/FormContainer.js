import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { updateEmail, updatePassword, login } from '../../actions/authActions';
import Input from '../presentational/Input';
import TextArea from '../presentational/TextArea';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  updateEmail: value =>
    dispatch(updateEmail(value)),
  updatePassword: value =>
    dispatch(updatePassword(value)),
  onSubmit: (email, password) =>
    dispatch(login(email, password)),
})

// const mapDispatchToProps = dispatch => ({
//   updateTitle: (title) =>
//     dispatch(updateTitle(title));
// })

class FormContainer extends Component {
  constructor() {
    super();
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailChange(e) {
    this.props.updateEmail(e.target.value);
    // ({ [e.target.id]: e.target.value }) 
  }

  handlePasswordChange(e) {
    this.props.updatePassword(e.target.value);
  }

  handleLogin(e, email, password) {
    e.preventDefault();
    // console.log(`Email: ${email} Password: ${password}`);
    this.props.onSubmit(email, password);
  }

  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value})
  // }

  render() {
    const { email, password } = this.props.auth;
    
    return (
      <Form id='login-form' onSubmit={(e) => this.handleLogin(e, email, password)}>
        <FormGroup>
          <Input
            // text={email}
            label='Email'
            type='text'
            id='email'
            placeholder='Email'
            value={this.props.auth.email}
            handleChange={this.handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            // text={password}
            label='Password'
            type='password'
            id='password'
            placeholder='Password'
            value={this.props.auth.password}
            handleChange={this.handlePasswordChange}
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
