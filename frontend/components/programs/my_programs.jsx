import React from 'react';
import ProgramIndex from '../programs/program_index.jsx';

export default (props) => {
  return (
    <div
      className="main">
      <p>
        These are the programs you created.
        You can edit or delete them.
    </p>

    <ProgramIndex expand={props.expand} programs={props.programs} fetchPrograms={props.fetchPrograms} />
  </div>
  );
};

