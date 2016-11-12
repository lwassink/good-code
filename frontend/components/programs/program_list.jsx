import React from 'react';
import ProgramIndex from '../programs/program_index.jsx';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

const introMessages = {
  1: 'These are programs you are currently using.',
  2: 'These are programs you have used in the past.',
  3: 'These are programs you want to use on a future project.'
};

export default (props) => {
  return (
    <div
      className="main">
      <p>
        { introMessages[props.statusCode] + " Add programs to this list by setting their status." }
      </p>

      <ProgramIndex
        key={props.statusCode}
        expand={props.expand}
        programs={props.programs}
        path={props.path}
        fetchPrograms={props.fetchPrograms} />
    </div>
  );
};

