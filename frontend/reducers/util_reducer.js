import { START_LOADING, STOP_LOADING } from '../actions/util_actions.js';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case START_LOADING:
      newState.loading = true;
      return newState;
    case STOP_LOADING:
      newState.loading = false;
      return newState;
    default:
      return oldState;
  }
};

