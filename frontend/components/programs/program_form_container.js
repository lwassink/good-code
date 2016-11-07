import { connect } from 'react-redux';
import { fetchProgram, createProgram, updateProgram } from '../../actions/program_actions.js';
import ProgramForm from './program_form.jsx';
import { merge } from 'lodash';

const _default_program = {
  id: "",
  name: "",
  creator: "",
  description: "",
  image_url: "",
  source_code_url: "",
  thumbnail_url: ""
}

const mapStateToProps = (state, ownProps) => {
  const program = state.programs[ownProps.params.id] ? state.programs[ownProps.params.id] : merge({}, _default_program);

  return ({
    path: ownProps.location.pathname,
    program: program,
    edit: ownProps.location.pathname.endsWith('new') ? false : true,
    errors: state.programs.errors || []
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const create = program => dispatch(createProgram(program));
  const update = program => dispatch(updateProgram(program));

  return ({
    fetchProgram: () => dispatch(fetchProgram(ownProps.params.id)),
    submit: ownProps.location.pathname.endsWith('new') ? create : update
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramForm);

