import { connect } from 'react-redux';
import ReviewForm from './review_form.jsx';
import { withRouter } from 'react-router';
import { createReview, closeReviewForm } from '../../actions/review_actions.js';

const _default_review = {
  body: '',
  project_used_in: '',
}

const mapStateToProps = (state, ownProps) => ({
  program_id: ownProps.router.params.id,
  review: merge({}, _default_review)
});

const mapDispatchToProps = dispatch => ({
  submit: review => dispatch(createReview(review))
});

const ReviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

export default withRouter(ReviewFormContainer);

