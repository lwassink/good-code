import { receivePrograms,
  receiveProgram,
  removeProgram,
  receiveProgramErrors,
  clearPrograms,
  FETCH_PROGRAMS,
  FETCH_USER_PROGRAMS,
  FETCH_PROGRAM,
  CREATE_PROGRAM,
  UPDATE_PROGRAM,
  DESTROY_PROGRAM,
  SEARCH
} from '../actions/program_actions.js';
import {fetchPrograms,
  fetchProgram,
  fetchUserPrograms,
  createProgram,
  updateProgram,
  destroyProgram,
  search
} from '../util/programs_api_util.js';
import { startLoading, stopLoading } from '../actions/util_actions.js';
import { hashHistory } from 'react-router';

export default ({ getState, dispatch }) => next => action => {
  const error = e => dispatch(receiveProgramErrors(e.responseJSON));

  const fetchProgramsSuccess = page => {
    return programs => {
      if (page ===  0) {
        dispatch(clearPrograms());
      }

      dispatch(stopLoading());
      dispatch(receivePrograms(programs));
    }
  }
  const fetchProgramSuccess = program => {
    dispatch(stopLoading());
    dispatch(receiveProgram(program));
  }

  const makeProgramSuccess = program => {
    dispatch(receiveProgram(program));
    hashHistory.push(`programs/${program.id}`);
  }

  const removeProgramSuccess = id => {
    return () => {
      dispatch(removeProgram(id));
      hashHistory.push('/');
    }
  }

  switch(action.type) {
    case FETCH_PROGRAMS:
      if (action.page === 0) dispatch(startLoading());
      fetchPrograms(action.page, fetchProgramsSuccess(action.page), error, action.statusCode);
      return next(action);
    case FETCH_USER_PROGRAMS:
      if (action.page === 0) dispatch(startLoading());
      fetchUserPrograms(action.page, fetchProgramsSuccess(action.page), error);
      return next(action);
    case FETCH_PROGRAM:
      dispatch(startLoading());
      fetchProgram(action.id, fetchProgramSuccess, error);
      return next(action);
    case CREATE_PROGRAM:
      createProgram(action.program, makeProgramSuccess, error);
      return next(action);
    case UPDATE_PROGRAM:
      updateProgram(action.program, makeProgramSuccess, error);
      return next(action);
    case DESTROY_PROGRAM:
      destroyProgram(action.id, removeProgramSuccess(action.idprogram), error);
      return next(action);
    case SEARCH:
      search(action.query, fetchProgramsSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

