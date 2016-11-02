import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions.js';

const _default_state = {
  errors: []
};

export default (oldState = _default_state, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_ERRORS:
      let errorState = { errors: action.errors };
      merge(errorState, oldState);
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

