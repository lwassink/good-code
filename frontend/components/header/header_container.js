import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions.js';
import Header from './header.jsx';

const mapStateToProps = state => ({
  loggedIn: state.currentUser.id ? true : false
});

const mapDisptachToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Header);

