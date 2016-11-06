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

  render() {
    let programs = merge({}, this.props.programs);
    if (programs.errors) {
      delete programs.errors;
    }

    return(
      <div>
        <Paper
          style={index}>
          <ul>
            {Object.values(programs).map(program => 
                (<ProgramIndexItem
                  key={program.id}
                  handleExpand={this.props.expand(program.id)}
                  expanded={program.expanded}
                  program={program} />)
            )}
          </ul>
        </Paper>
      </div>
    );
  }
};

export default ProgramIndex;

