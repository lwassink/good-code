import { connect } from 'react-redux';
import ReviewForm from './review_form.jsx';
import { withRouter } from 'react-router';
import { createReview, updateReview, closeReviewForm } from '../../actions/review_actions.js';

const _default_review = {
  body: '',
  project_used_in: '',
}

const mapStateToProps = (state, ownProps) => {
  return ({
  program_id: ownProps.router.params.id,
  review: ownProps.review ? merge({}, _default_review, ownProps.review) : merge({}, _default_review)
});
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: ownProps.review ? review => dispatch(updateReview(review)) : review => dispatch(createReview(review))
});

const ReviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

export default withRouter(ReviewFormContainer);

