import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { colors } from '../muiTheme.js';
import Snackbar from 'material-ui/Snackbar';

class StatusSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 1,
      snackOpen: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRequestSnackClose = this.handleRequestSnackClose.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({
      status: value,
      snackOpen: true
    });
  }

  handleRequestSnackClose() {
    this.setState({ snackOpen: false });
  }

  render() {
    return (
      <div>
        <SelectField
          value={this.state.status}
          onChange={this.handleChange}
          color="brown"
          style={{
            width: 160
          }}
          labelStyle={{
            color: colors.tan
          }}>
          <MenuItem value={1} primaryText="No status" />
          <MenuItem value={2} primaryText="Have used" />
          <MenuItem value={3} primaryText="Currently using" />
          <MenuItem value={4} primaryText="Want to use" />
        </SelectField>

        <Snackbar
          open={this.state.snackOpen}
          message="Status Set"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestSnackClose}

        />
      </div>
    )
  }
}

export default StatusSelector;

