import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import { card, button, textInput } from '../styles/formStyles.js';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
    this.update = this.update.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  update(key) {
    return event => this.setState({ [key]: event.target.value });
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.signup(this.state)
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.login(this.state)
  }

  validPassword() {
    return this.state.password.length>= 6;
  }

  validUsername() {
    return this.state.username.length> 0;
  }

  submittable() {
    this.validPassword() && this.validUsername();
    return true;
  }

  render() {
    return (
      <Card
        style={card}>
        <TextField
          style={textInput}
          value={this.state.username}
          onChange={this.update("username")}
          floatingLabelText="Username" />
        <br />

        <TextField
          type="password"
          style={textInput}
          value={this.state.password}
          onChange={this.update("password")}
          floatingLabelText="Password" />
        <br />

        <CardActions>
          <FlatButton
            onClick={this.handleLogin}
            style={button}
            backgroundColor='#f4f1ea'
            disabled={!this.submittable()}
            label="Login" />
          <br />

          <FlatButton
            onClick={this.handleSignup}
            backgroundColor='#f4f1ea'
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

