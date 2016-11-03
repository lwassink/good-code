import React from 'react';
import Paper from 'material-ui/Paper';
import { fetchProgram } from '../../util/programs_api_util.js';

class ProgramShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProgram()
  }

  componentWillReceiveProps(newState) {
    if (this.props.path != newState.path) {
      newState.fetchProgram();
    }
  }

  render() {
    return (
      <div
        className="program-show">
        <Paper>
          <ul
          className="program-item-list">
            <li>
              <h2>{this.props.program.name}</h2>
            </li>
            <li>
              <label>Created by:</label> {this.props.program.creator}
            </li>
            <li>
              <label>Description:</label>
              <br />
              {this.props.program.description}
            </li>
          </ul>
        </Paper>
      </div>
    )
  }
}

export default ProgramShow;

