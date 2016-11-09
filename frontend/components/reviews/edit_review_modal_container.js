import { connect } from 'react-redux';
import EditReviewModal from './edit_review_modal.jsx';
import { openReviewEdit, closeReviewEdit } from '../../actions/review_actions.js';

const mapStateToProps = (state, ownProps) => ({
  open: state.reviews[ownProps.review.id].editOpen,
  review: ownProps.review
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openDialog: () => dispatch(openReviewEdit(ownProps.review.id)),
  closeDialog: () => dispatch(closeReviewEdit(ownProps.review.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewModal);

