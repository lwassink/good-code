import React from 'react';
import Paper from 'material-ui/Paper';
import { index } from '../styles/indexStyle.js';
import SearchIndexItem from './search_index_item.jsx';
import LoadingContainer from '../util/loading_container.js';

class ProgramIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let programs = merge({}, this.props.programs);
    if (programs.errors) {
      delete programs.errors;
    }

    return(
      <div>
        <p>
          { Object.keys(programs).length === 0 ? 'No search results...' : '' }
        </p>

        <Paper
          style={index}>
          <LoadingContainer />

          <ul>
            {_.values(programs).map(program => 
                (<SearchIndexItem
                  key={program.id}
                  program={program} />)
            )}
          </ul>
        </Paper>
      </div>
    );
  }
};

export default ProgramIndex;

