import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app.jsx';

export default () => {
  return (
    <MuiThemeProvider>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
      </Router>
    </MuiThemeProvider>
  );
};

