import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { colors } from '../muiTheme.js';

class StatusSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 1
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ status: value });
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
      </div>
    )
  }
}

export default StatusSelector;

