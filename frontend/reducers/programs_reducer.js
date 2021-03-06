import { RECEIVE_PROGRAM_ERRORS,
  RECEIVE_PROGRAM,
  REMOVE_PROGRAM,
  RECEIVE_PROGRAMS,
  EXPAND,
  CLEAR_PROGRAMS
} from '../actions/program_actions.js';
import {
  RECEIVE_STATUS,
  REMOVE_STATUS
} from '../actions/statuses_actions.js';
import merge from 'lodash/merge';
import keys from 'lodash/keys';

const _default_state = {}

export default (oldState = _default_state, action) =>{
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  let clearErrors = {errors: []};

  switch(action.type) {
    case RECEIVE_PROGRAMS:
      merge(newState, clearErrors, action.programs);
      return newState;
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
      let ids = keys(newState).slice(0,-2);
      ids.forEach(id => {newState[id].expanded = false});
      newState[action.id].expanded = true;
      return newState;
    case RECEIVE_STATUS:
      newState[action.status.program_id].status = action.status.content;
      return newState;
    case REMOVE_STATUS:
      newState[action.status.programId] = null;
      return newState;
    case CLEAR_PROGRAMS:
      return {};
    default:
      return oldState;
  }
}

