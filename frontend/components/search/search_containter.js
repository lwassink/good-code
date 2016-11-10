import { connect } from 'react-redux';
import Search from './search.jsx';
import { search, clearPrograms } from '../../actions/program_actions.js';

const mapStateToProps = (state, ownProps) => ({
  programs: state.programs,
  path: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch) => ({
  expand: id => { return () => dispatch(expand(id)); },
  search: query => dispatch(search(query)),
  clearPrograms: () => dispatch(clearPrograms())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

