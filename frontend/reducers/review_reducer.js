import {
  RECIEVE_REVIEW,
  RECIEVE_REVIEWS,
  REMOVE_REVIEW
} from '../actions/review_actions.js';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECIEVE_REVIEW:
    case RECIEVE_REVIEWS:
    case REMOVE_REVIEW:
    default:
      return oldState;
  }
}

