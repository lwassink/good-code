import { connect } from 'react-redux';
import { openReviewForm, destroyReview } from '../../actions/review_actions.js';
import { withRouter } from 'react-router';
import EditAndDelete from './edit_and_delete.jsx';

const mapStateToProps = (state, ownProps) => ({
  owner: state.currentUser.id === ownProps.review.author_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteReview: () => dispatch(destroyReview(ownProps.review.id))
});

const EditAndDeleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAndDelete)

export default withRouter(EditAndDeleteContainer);

