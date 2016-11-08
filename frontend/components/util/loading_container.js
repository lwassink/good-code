import { connect } from 'react-redux';
import Loading from './loading.jsx';

const mapStateToProps = state => ({
  loading: state.util.loading
});

export default connect(
  mapStateToProps
)(Loading);

