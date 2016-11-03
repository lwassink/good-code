import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import ProgramsReducer from './programs_reducer.js'

export default combineReducers({
  currentUser: SessionReducer,
  programs: ProgramsReducer
});

