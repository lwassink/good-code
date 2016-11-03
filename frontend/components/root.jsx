import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { muiTheme } from './muiTheme.js';
import App from './app.jsx';
import ProgramIndexContainer from './program_index/program_index_container.js';

export default ({ store }) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)} >
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={ProgramIndexContainer} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

