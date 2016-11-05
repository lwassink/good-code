import { connect } from 'react-redux';
import Home from './home.jsx';
import { fetchPrograms } from '../../actions/program_actions.js';
import { login } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.currentUser.id ? true : false,
  programs: state.programs,
  path: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchPrograms: (ownProps.location.pathname === '/programs'
      ? () => dispatch(fetchUserPrograms())
      : () => dispatch(fetchPrograms())),
    loginGuest: () => dispatch(login({username: 'Guest', password: 'password'}))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

