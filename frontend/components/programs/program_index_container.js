import { connect } from 'react-redux';
import { fetchPrograms, fetchUserPrograms } from '../../actions/program_actions.js';
import ProgramIndex from './program_index.jsx';

const mapStateToProps = state => ({
  programs: state.programs
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

