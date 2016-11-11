import {
  RECIEVE_REVIEW,
  RECIEVE_REVIEWS,
  REMOVE_REVIEW,
  RECIEVE_REVIEW_ERRORS,
  OPEN_REVIEW_FORM,
  CLOSE_REVIEW_FORM,
  OPEN_REVIEW_EDIT,
  CLOSE_REVIEW_EDIT,
  CLEAR_REVIEWS
} from '../actions/review_actions.js';
import { merge } from 'lodash';

const _default_state = {
  formOpen: false,
  errors: []
};

export default (oldState = _default_state, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECIEVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case RECIEVE_REVIEWS:
      let reviewState = action.reviews;
      merge(reviewState, _default_state);
      return reviewState;
    case REMOVE_REVIEW:
      delete newState[action.id];
      return newState;
    case RECIEVE_REVIEW_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_REVIEWS:
      return _default_state;
    case OPEN_REVIEW_FORM:
      newState.formOpen = true;
      return newState;
    case CLOSE_REVIEW_FORM:
      newState.formOpen = false;
      return newState;
    case OPEN_REVIEW_EDIT:
      newState[action.id].editOpen = true;
      return newState;
    case CLOSE_REVIEW_EDIT:
      newState[action.id].editOpen = false
      return newState;
    default:
      return oldState;
  }
}

