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


      <ProgramIndex
        key='all-logged-in'
        expand={props.expand}
        programs={props.programs}
        path={props.path}
        fetchPrograms={props.fetchPrograms} />
    </div>
    );
  } else {
    return (
      <div
        className="main">
        <p>
          Click a program to read reviews.
      Click <span className="link"><Link to="search">here</Link></span> to search for a program.
        </p>

        <ProgramIndex
          key='all-logged-out'
          expand={props.expand}
          programs={props.programs}
          path={props.path}
          fetchPrograms={props.fetchPrograms} />
    </div>
    );
  }
};

