export const CREATE_STATUS = 'CREATE_STATUS';
export const createStatus = (status) => ({
  type: CREATE_STATUS,
  status
});

export const UPDATE_STATUS = 'UPDATE_STATUS';
export const updateStatus = (status) => ({
  type: UPDATE_STATUS,
  status
});

export const DESTROY_STATUS = 'DESTROY_STATUS';
export const destroyStatus = (programId) => ({
  type: DESTROY_STATUS,
  programId
});

export const RECEIVE_STATUS = 'RECEIVE_STATUS';
export const receiveStatus = (status) => ({
  type: RECEIVE_STATUS,
  status
});

export const REMOVE_STATUS = 'REMOVE_STATUS';
export const removeStatus = (programId) => ({
  type: REMOVE_STATUS,
  programId
});

