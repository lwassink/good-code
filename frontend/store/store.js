import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';

export default (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  );
};

