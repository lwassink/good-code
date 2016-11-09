import { connect } from 'react-redux';
import ReviewModal from './review_modal.jsx';
import { openReviewForm, closeReviewForm } from '../../actions/review_actions.js';

const mapStateToProps = (state, ownProps) => ({
  open: state.reviews.formOpen,
});

const mapDispatchToProps = dispatch => ({
  openDialog: () => dispatch(openReviewForm()),
  closeDialog: () => dispatch(closeReviewForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewModal);

