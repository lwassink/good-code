import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { colors } from '../muiTheme.js';
import Snackbar from 'material-ui/Snackbar';

class StatusSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusCode: this.props.statusCode,
      snackOpen: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRequestSnackClose = this.handleRequestSnackClose.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.statusCode != this.props.statusCode) {
      this.setState({ statusCode: newProps.statusCode })
    }
  }

  handleChange(event, index, value) {
    if (this.state.statusCode != value) {
      if (value === 0) {
        this.props.destroyStatus();
      } else {
        this.props.setStatus(this.state.statusCode, value);
      }
    }
    this.setState({
      statusCode: value,
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
          value={this.state.statusCode}
          onChange={this.handleChange}
          color="brown"
          style={{
            width: 160
          }}
          labelStyle={{
            color: colors.tan
          }}>
          <MenuItem value={0} primaryText="No status" />
          <MenuItem value={1} primaryText="Currently using" />
          <MenuItem value={2} primaryText="Have used" />
          <MenuItem value={3} primaryText="Want to use" />
        </SelectField>

        <Snackbar
          open={this.state.snackOpen}
          message="Status Set"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestSnackClose}

        />
      </div>
    )
  }
}

export default StatusSelector;

