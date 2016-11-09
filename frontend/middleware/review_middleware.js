import {
  recieveReview,
  recieveReviews,
  removeReview,
  recieveReviewErrors,
  closeReviewForm,
  REQUEST_REVIEW,
  REQUEST_REVIEWS,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DESTROY_REVIEW
} from '../actions/review_actions.js';
import {
  fetchReview,
  fetchReviews,
  createReview,
  updateReview,
  destroyReview
} from '../util/reviews_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const error = e => dispatch(recieveReviewErrors(e));
  const fetchReviewSuccess = review => dispatch(recieveReview(review));
  const fetchReviewsSuccess = reviews => dispatch(recieveReviews(reviews));
  const destroyReviewSuccess = () => dispatch(removeReview(action.id));
  const makeReviewSuccess = review => {
    dispatch(recieveReview(review));
    dispatch(closeReviewForm());
  };

  switch(action.type) {
    case REQUEST_REVIEW:
      fetchReview(action.id, fetchReviewSuccess, error);
      return next(action);
    case REQUEST_REVIEWS:
      fetchReviews(action.program_id, fetchReviewsSuccess, error);
      return next(action);
    case CREATE_REVIEW:
      createReview(action.review, makeReviewSuccess, error);
      return next(action);
    case UPDATE_REVIEW:
      updateReview(action.review, makeReviewSuccess, error);
      return next(action);
    case DESTROY_REVIEW:
      destroyReview(action.id, destroyReviewSuccess, error);
      return next(action);
    default:
      return next(action);
  }
}

