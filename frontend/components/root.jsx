import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { muiTheme } from './muiTheme.js';
import { fetchProgram } from '../actions/program_actions.js';
import App from './app.jsx';
import MyProgramsContainer from './programs/my_programs_container.jsx';
import ProgramShowContainer from './programs/program_show_container.js';
import HomeContainer from './home/home_container.js';
import ProgramFormContainer from './programs/program_form_container.js';

export default ({ store }) => {
  const _requireLogin = () =>{
    if (store.getState().currentUser.id === undefined) {
      hashHistory.replace('/');
    }
  };

  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)} >
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={HomeContainer} />
            <Route path="programs/new" onEnter={_requireLogin} component={ProgramFormContainer} />
            <Route path="programs/:id/edit" onEnter={_requireLogin} component={ProgramFormContainer} />
            <Route path="programs/:id" component={ProgramShowContainer} />
            <Route path="programs" component={MyProgramsContainer} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

