import { connect } from 'react-redux';
import ProgramShow from './program_show.jsx';
import { fetchProgram, destroyProgram } from '../../actions/program_actions.js';

const _default_program = {id: "", name: "", creator: "", description: ""}

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.location.pathname,
  program: state.programs[ownProps.params.id] || _default_program,
  authorId: state.currentUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProgram: () => dispatch(fetchProgram(ownProps.params.id)),
  destroyProgram: () => dispatch(destroyProgram(ownProps.params.id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramShow);

