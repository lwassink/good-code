import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';

export default applyMiddleware(
  SessionMiddleware
);
