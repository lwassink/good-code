import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/store.js';

// import { login, logout, signup } from './util/session_api_util.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;

  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;

  ReactDOM.render(<Root store={store} />,
    document.getElementById("root"));
});
