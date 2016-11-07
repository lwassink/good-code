import React from 'react';
import ProgramIndex from '../programs/program_index.jsx';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div
      className="main">
      <p>
        Programs of status {props.statusCode}
      </p>

      <ProgramIndex expand={props.expand} programs={props.programs} path={props.path} fetchPrograms={props.fetchPrograms} />
    </div>
  );
};

