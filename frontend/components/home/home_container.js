import { connect } from 'react-redux';
import Home from './home.jsx';
import { fetchPrograms, expand } from '../../actions/program_actions.js';
import { login } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.currentUser.id ? true : false,
  programs: state.programs,
  path: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    expand: id => { return () => dispatch(expand(id)); },
    fetchPrograms: (
      ownProps.location.pathname === '/programs'
      ? page => dispatch(fetchUserPrograms(page))
      : page => dispatch(fetchPrograms(page))
    ),
    loginGuest: () => dispatch(login({username: 'Guest', password: 'password'}))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

