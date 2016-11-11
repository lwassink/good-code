import { connect } from 'react-redux';
import { fetchUserPrograms, expand } from '../../actions/program_actions.js';
import MyPrograms from './my_programs.jsx';

const mapStateToProps = (state, ownProps) => ({
  programs: state.programs
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    expand: id => { return () => dispatch(expand(id)); },
    fetchPrograms: page => dispatch(fetchUserPrograms(page))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPrograms);

