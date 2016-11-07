import { RECEIVE_PROGRAM_ERRORS,
  RECEIVE_PROGRAM,
  REMOVE_PROGRAM,
  RECEIVE_PROGRAMS,
  EXPAND
} from '../actions/program_actions.js';
import merge from 'lodash/merge';

const _default_state = {}

export default (oldState = _default_state, action) =>{
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  let clearErrors = {errors: []};

  switch(action.type) {
    case RECEIVE_PROGRAMS:
      merge(clearErrors, action.programs)
      return clearErrors;
    case RECEIVE_PROGRAM:
      let programState = {[action.program.id]: action.program};
      merge(newState, programState, clearErrors);
      return programState;
    case REMOVE_PROGRAM:
      delete newState[action.id];
      return newState;
    case RECEIVE_PROGRAM_ERRORS:
      merge(newState, {errors: action.errors})
      return newState;
    case EXPAND:
      let ids = Object.keys(newState);
      delete ids.errors;
      ids.forEach(id => {newState[id].expanded = false});
      newState[action.id].expanded = true;
      return newState;
    default:
      return oldState;
  }
}

