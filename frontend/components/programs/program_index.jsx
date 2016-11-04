import React from 'react';
import Paper from 'material-ui/Paper';
import { index } from '../styles/indexStyle.js';
import ProgramIndexItem from './program_index_item.jsx';

class ProgramIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPrograms();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.path != newProps.path) {
      newProps.fetchPrograms();
    }
  }

  render() {
    let programs = merge({}, this.props.programs);
    if (programs.errors) {
      delete programs.errors;
    }

    return(
      <div
        className="program-index">
        <Paper
          style={index}>
          <ul>
            {Object.values(programs).map(program => 
                (<ProgramIndexItem key={program.id} program={program} />)
            )}
          </ul>
        </Paper>
      </div>
    );
  }
};

export default ProgramIndex;

