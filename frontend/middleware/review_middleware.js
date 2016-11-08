import {
  recieveReview,
  recieveReviews,
  removeReview,
  recieveReviewErrors,
  REQUEST_REVIEW,
  REQUEST_REVIEWS,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DESTROY_REVIEW
} from '../actions/review_actions.js';

export default ({ getState, dispatch }) => next => action => {
  const error = e => dispatch(recieveReviewErrors(e));
  const fetchReviewSuccess = review => dispatch(receiveStatus(status));
  const destroyStatusSuccess = () => dispatch(removeStatus(action.program));

  switch(action.type) {
    case REQUEST_REVIEW:
      return next(action);
    case REQUEST_REVIEWS:
      return next(action);
    case CREATE_REVIEW:
      return next(action);
    case UPDATE_REVIEW:
      return next(action);
    case DESTROY_REVIEW:
      return next(action);
    default:
      return next(action);
  }
}

