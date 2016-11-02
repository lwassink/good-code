import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import { card, button, textInput } from '../styles/formStyles.js';
import { colors } from '../muiTheme.js';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Errors from './errors.jsx';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        value: "",
        touched: false
      },
      password: {
        value: "",
        touched: false
      }
    }

    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getErrors = this.getErrors.bind(this);
    this.update = this.update.bind(this);
    this.touch = this.touch.bind(this);
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.signup({username: this.state.username.value, password: this.state.password.value});
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.login({username: this.state.username.value, password: this.state.password.value});
  }

  validInput(key) {
    switch(key) {
      case 'username':
        return this.state.username.value.length > 0;
      case 'password':
        return this.state.password.value.length > 6;
    }
  }

  submittable() {
    return this.validInput('username') && this.validInput('password');
  }

  update(key) {
    return event => this.setState({[key]: {
      value: event.target.value,
      touched: this.state[key].touched }
    });
  }

  touch(key) {
    return event => this.setState({[key]: {
      value: this.state[key].value,
      touched: true }
    });
  }

  getErrors(key) {
    const errorMessages = {
      username: "Username is required",
      password: "Password must be at least six characters"
    };
    const errors = errorMessages[key];

    if (this.state[key].touched && !this.validInput(key)) {
      return errors;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Card
        style={card}>

        <Errors errors={this.props.errors} />

        <TextField
          style={textInput}
          value={this.state.username.value}
          errorText={this.getErrors('username')}
          onChange={this.update('username')}
          onBlur={this.touch('username')}
          floatingLabelText="Username" />
        <br />

        <TextField
          type="password"
          style={textInput}
          value={this.state.password.value}
          errorText={this.getErrors('password')}
          onChange={this.update('password')}
          onBlur={this.touch('password')}
          floatingLabelText="Password" />
        <br />

        <CardActions>
          <FlatButton
            onClick={this.handleLogin}
            style={button}
            hoverColor={colors.lightBrown}
            disabled={!this.submittable()}
            label="Login" />
          <br />

          <FlatButton
            onClick={this.handleSignup}
            hoverColor={colors.lightBrown}
            style={button}
            disabled={!this.submittable()}
            label="Create Account" />
          <br />
        </CardActions>
      </Card>
    );
  }
}

export default SessionForm;

