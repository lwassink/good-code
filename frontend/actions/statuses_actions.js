export const FETCH_STATUS = 'FETCH_STATUS';
export const fetchStatus = (id) => ({
  type: FETCH_STATUS,
  id
});

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
export const destroyStatus = (id) => ({
  type: DESTROY_STATUS,
  id
});

export const RECEIVE_STATUS = 'RECEIVE_STATUS';
export const receiveStatus = (status) => ({
  type: RECEIVE_STATUS,
  status
});

export const REMOVE_STATUS = 'REMOVE_STATUS';
export const removeStatus = (id) => ({
  type: REMOVE_STATUS,
  id
});

