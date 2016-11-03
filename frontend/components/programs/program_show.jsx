import React from 'react';
import Paper from 'material-ui/Paper';

class ProgramShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper>
        <ul
          className="program-item-list">
          <li>
            <h2>{program.name}</h2>
          </li>
          <li>
            <label>Created by:</label> {program.creator}
          </li>
          <li>
            <label>Description:</label> {program.description}
          </li>
        </ul>
      </Paper>
    )
  }
}

export default ProgramShow;

