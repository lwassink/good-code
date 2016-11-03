import { connect } from 'react-redux';
import { fetchPrograms, fetchUserPrograms } from '../../actions/program_actions.js';
import ProgramIndex from './program_index.jsx';

const mapStateToProps = (state, ownProps) => ({
  programs: state.programs,
  path: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchPrograms: (ownProps.location.pathname === '/programs'
      ? () => dispatch(fetchUserPrograms())
      : () => dispatch(fetchPrograms()))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramIndex);
