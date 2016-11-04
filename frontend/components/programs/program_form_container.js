import { connect } from 'react-redux';
import { createProgram, updateProgram } from '../../actions/program_actions.js';
import ProgramForm from './program_form.jsx';

const _default_program = {
  id: "",
  name: "",
  creator: "",
  description: "",
  imageUrl: "",
  sourceCodeUrl: ""
}

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.location.pathname,
  program: state.programs[ownProps.params.id] || _default_program
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramForm);

