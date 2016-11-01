import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions.js';

const _default_state = {
  currentUser: null,
  errors: []
};

export default (oldState = _default_state, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return { errors: action.errors, currentUser: action.user }
    case RECEIVE_CURRENT_USER:
      return { errors: [], currentUser: action.user }
    case LOGOUT:
      return { errors: [], currentUser: null }
    default:
      return oldState;
  }
};

