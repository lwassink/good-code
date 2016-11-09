import { connect } from 'react-redux';
import { openReviewForm, destroyReview } from '../../actions/review_actions.js';
import { withRouter } from 'react-router';
import EditAndDelete from './edit_and_delete.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const EditAndDeleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAndDelete)

export default withRouter(EditAndDeleteContainer);

