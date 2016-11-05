import { receivePrograms,
  receiveProgram,
  removeProgram,
  receiveProgramErrors,
  FETCH_PROGRAMS,
  FETCH_USER_PROGRAMS,
  FETCH_PROGRAM,
  CREATE_PROGRAM,
  UPDATE_PROGRAM,
  DESTROY_PROGRAM
} from '../actions/program_actions.js';
import {fetchPrograms,
  fetchProgram,
  fetchUserPrograms,
  createProgram,
  updateProgram,
  destroyProgram
} from '../util/programs_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const error = e => dispatch(receiveProgramErrors(e.responseJSON));
  const fetchProgramsSuccess = programs => dispatch(receivePrograms(programs));
  const fetchProgramSuccess = program => dispatch(receiveProgram(program));
  const removeProgramSuccess = program => dispatch(removeProgram(program));

  switch(action.type) {
    case FETCH_PROGRAMS:
      fetchPrograms(fetchProgramsSuccess, error);
      return next(action);
    case FETCH_USER_PROGRAMS:
      fetchUserPrograms(fetchProgramsSuccess, error);
      return next(action);
    case FETCH_PROGRAM:
      fetchProgram(action.id, fetchProgramSuccess, error);
      return next(action);
    case CREATE_PROGRAM:
      createProgram(action.program, fetchProgramSuccess, error);
      return next(action);
    case UPDATE_PROGRAM:
      updateProgram(action.program, fetchProgramSuccess, error);
      return next(action);
    case DESTROY_PROGRAM:
      destroyProgram(action.id, removeProgramSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

