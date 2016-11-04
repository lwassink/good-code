import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import { card, button, textInput } from '../styles/formStyles.js';
import { colors } from '../muiTheme.js';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { hashHistory } from 'react-router';
import Errors from './errors.jsx';

class ProgramForm extends React.Component {
  constructor () {
  }

  render () {
    return (
      <div>
        I'm the form!
      </div>
    )
  }
}

export default ProgramForm;

