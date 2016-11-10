export const FETCH_USER_PROGRAMS = 'FETCH_USER_PROGRAMS';
export const fetchUserPrograms = () => ({
  type: FETCH_USER_PROGRAMS
});

export const FETCH_PROGRAMS = 'FETCH_PROGRAMS';
export const fetchPrograms = (statusCode) => ({
  type: FETCH_PROGRAMS,
  statusCode
});

export const FETCH_PROGRAM = 'FETCH_PROGRAM';
export const fetchProgram = (id) => ({
  type: FETCH_PROGRAM,
  id
});

export const CREATE_PROGRAM = 'CREATE_PROGRAM';
export const createProgram = (program) => ({
  type: CREATE_PROGRAM,
  program
});

export const UPDATE_PROGRAM = 'UPDATE_PROGRAM';
export const updateProgram = (program) => ({
  type: UPDATE_PROGRAM,
  program
});

export const DESTROY_PROGRAM = 'DESTROY_PROGRAM';
export const destroyProgram = (id) => ({
  type: DESTROY_PROGRAM,
  id
});

export const RECEIVE_PROGRAM = 'RECEIVE_PROGRAM';
export const receiveProgram = (program) => ({
  type: RECEIVE_PROGRAM,
  program
});

export const RECEIVE_PROGRAMS = 'RECEIVE_PROGRAMS';
export const receivePrograms = (programs) => ({
  type: RECEIVE_PROGRAMS,
  programs
});

export const REMOVE_PROGRAM = 'REMOVE_PROGRAM';
export const removeProgram = (id) => ({
  type: REMOVE_PROGRAM,
  id
});

export const RECEIVE_PROGRAM_ERRORS = 'RECEIVE_PROGRAM_ERRORS';
export const receiveProgramErrors = (errors) => ({
  type: RECEIVE_PROGRAM_ERRORS,
  errors
});

export const EXPAND = 'EXPAND';
export const expand = (id) => ({
  type: EXPAND,
  id
});

export const SEARCH = 'SEARCH';
export const search = (query) => ({
  type: SEARCH,
  query
});

export const CLEAR_PROGRAMS = 'CLEAR_PROGRAMS';
export const clearPrograms = () => ({
  type: CLEAR_PROGRAMS
});

