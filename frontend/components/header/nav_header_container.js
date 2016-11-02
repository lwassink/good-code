import { connect } from 'react-redux';
import NavHeader from './nav_header.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = state => ({
  user: state.currentUser
});

const mapDisptachToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(NavHeader);
