import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/store.js';
import { merge, union } from 'lodash';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    store = configureStore({ currentUser: merge({ errors: [] }, window.currentUser) });
  } else {
    store = configureStore();
  }

  window.store = store;
  window.merge = merge;
  window.union = union;

  ReactDOM.render(<Root store={store} />,
    document.getElementById("root"));
});
