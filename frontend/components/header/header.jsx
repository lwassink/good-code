import React from 'react';
import AuthHeader from './auth_header.jsx';

export default ({ loggedIn, logout }) => {
  if(loggedIn)
  {
    return(
      <div>
        You're logged in. I willl one day be the nav header
        <br />

        <button onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  else
  {
    return(
      <AuthHeader />
    );
  }
}

