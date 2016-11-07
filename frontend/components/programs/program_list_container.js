import { connect } from 'react-redux';
import ProgramList from './program_list.jsx';
import { fetchPrograms, expand } from '../../actions/program_actions.js';
import { login } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => ({
  programs: state.programs,
  statusCode: ownProps.params.statusCode,
  path: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    expand: id => { return () => dispatch(expand(id)); },
    fetchPrograms: () => dispatch(fetchPrograms(ownProps.params.statusCode))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramList);

