import { LOGIN,
  LOGOUT,
  SIGNUP,
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions.js';
import { login, signup, logout } from '../util/session_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const error = e => {
    dispatch(receiveErrors(e.responseJSON));
  };

  switch(action.type) {
    case LOGIN:
      login(action.user, success, error);
      return next(action);
    case LOGOUT:
      logout(success, error);
      return next(action);
    case SIGNUP:
      signup(action.user, success, error);
      return next(action);
    default:
      return next(action);
  }
};

