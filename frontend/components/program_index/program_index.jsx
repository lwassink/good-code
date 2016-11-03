import React from 'react';
import ProgramIndexItem from './program_index_item.jsx';

class ProgramIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPrograms();
  }

  render() {
    let progProps = this.props.programs;
    delete progProps.errors;
    const programs = Object.values(progProps);

    console.log(programs);

    return(
      <div>
        <ul>
          {programs.map(program => <ProgramIndexItem program={program} />)}
        </ul>
      </div>
    );
  }
};

export default ProgramIndex;

