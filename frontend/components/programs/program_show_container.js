import { connect } from 'react-redux';
import ProgramShow from './program_show.jsx';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.prams.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProgram: () => dispatch(fetchProgram(ownProps.params.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgramShow);

