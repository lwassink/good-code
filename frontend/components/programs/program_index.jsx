import React from 'react';
import Paper from 'material-ui/Paper';
import { index } from '../styles/indexStyle.js';
import ProgramIndexItem from './program_index_item.jsx';
import LoadingContainer from '../util/loading_container.js';
import InfiniteScroll from 'react-infinite-scroller';

class ProgramIndex extends React.Component {
  constructor(props) {
    super(props)
    this.fetchPrograms = this.props.fetchPrograms.bind(this);
  }

  componentDidMount() {
    this.props.fetchPrograms(0);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.path != this.props.path) {
      newProps.fetchPrograms(0);
    }
  }

  render() {
    let programs = merge({}, this.props.programs);
    delete programs.programCount;
    if (programs.errors) {
      delete programs.errors;
    }
    programs = _.values(programs);

    return(
      <div>
        <p>
          { Object.keys(programs).length === 0 ? 'No programs to display...' : '' }
        </p>

        <Paper
          style={index}>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.fetchPrograms}
            hasMore={programs.length < this.props.programs.programCount}
            loader={<LoadingContainer />}>

            <ul>
              {programs.reverse().map(program => 
                  (<ProgramIndexItem
                    key={program.id}
                    handleExpand={this.props.expand(program.id)}
                    expanded={program.expanded}
                    program={program} />)
              )}
            </ul>

          </InfiniteScroll>
        </Paper>
      </div>
    );
  }
};

export default ProgramIndex;

