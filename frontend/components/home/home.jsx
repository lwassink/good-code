import React from 'react';
import ProgramIndex from '../programs/program_index.jsx';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

export default (props) => {
  const handleGuestLogin = event => {
    event.preventDefault();
    props.loginGuest();
    hashHistory.push('/');
  }

  if (props.loggedIn) {
    return (
      <div
        className="main">
        <p>
          Click a program to leave a reveiw, or click <span className="link">
            <Link to={"programs/new"} >here</Link>
          </span> to add a new program to the list.
      </p>


      <ProgramIndex expand={props.expand} programs={props.programs} path={props.path} fetchPrograms={props.fetchPrograms} />
    </div>
    );
  } else {
    return (
      <div
        className="main">
        <p>
          Click a program to read reviews.
          Log in or continue as as a <span className="link" onClick={handleGuestLogin}>guest</span> to write your own reviews.
        </p>

      <ProgramIndex expand={props.expand} programs={props.programs} path={props.path} fetchPrograms={props.fetchPrograms} />
    </div>
    );
  }
};
