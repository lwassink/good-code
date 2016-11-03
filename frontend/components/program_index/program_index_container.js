import { connect } from 'react-redux';
import { fetchPrograms } from '../../actions/program_actions.js';
import ProgramIndex from './program_index.jsx';

const mapStateToProps = state => ({
  programs: state.programs
});

const mapDispatchToProps = dispatch => ({
  fetchPrograms: () => dispatch(fetchPrograms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramIndex);

