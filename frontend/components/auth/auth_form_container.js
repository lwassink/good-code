import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, signup } from '../../actions/session_actions.js';

const mapStateToProps = state => ({
  errors: state.currentUser.errors
});

const mapDisptachToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(AuthForm);

