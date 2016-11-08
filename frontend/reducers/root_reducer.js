import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import ProgramsReducer from './programs_reducer.js'
import UtilReducer from './util_reducer.js';
import ReviewReducer from './review_reducer.js';

export default combineReducers({
  currentUser: SessionReducer,
  programs: ProgramsReducer,
  util: UtilReducer,
  reviews: ReviewReducer
});

