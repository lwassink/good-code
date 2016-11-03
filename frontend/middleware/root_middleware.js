import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import ProgramMiddleware from './program_middleware.js';

export default applyMiddleware(
  SessionMiddleware,
  ProgramMiddleware
);
