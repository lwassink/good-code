import { connect } from 'react-redux';
import NavHeader from './nav_header.jsx';
import { logout } from '../../actions/session_actions.js';
import { hashHistory } from 'react-router';

const mapStateToProps = state => ({
  user: state.currentUser
});

const mapDisptachToProps = dispatch => ({
  logout: () => {
    hashHistory.push('/');
    dispatch(logout());}
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(NavHeader);
