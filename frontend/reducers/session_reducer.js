import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _default_state = {
  errors: []
};

export default (oldState = _default_state, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_ERRORS:
      let errorState = { errors: action.errors };
      merge(newState, errorState);
      return errorState;
    case RECEIVE_CURRENT_USER:
      let userState = action.user;
      merge (userState, { errors: [] });
      return userState;
    case LOGOUT:
      return { errors: [] }
    default:
      return oldState;
  }
};

