import { receiveStatus,
  removeStatus,
  CREATE_STATUS,
  UPDATE_STATUS,
  DESTROY_STATUS
} from '../actions/statuses_actions.js';
import {
  createStatus,
  updateStatus,
  destroyStatus
} from '../util/statuses_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const error = e => console.log(e);
  const fetchStatusSuccess = status => dispatch(receiveStatus(status));
  const destroyStatusSuccess = () => dispatch(removeStatus(action.program));

  switch(action.type) {
    case CREATE_STATUS:
      createStatus(action.status, fetchStatusSuccess, error)
      return next(action);
    case UPDATE_STATUS:
      updateStatus(action.status, fetchStatusSuccess, error)
      return next(action);
    case DESTROY_STATUS:
      destroyStatus(action.programId, destroyStatusSuccess, error)
      return next(action);
    default:
      return next(action);
  }
}

