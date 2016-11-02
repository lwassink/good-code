import React from 'react';
import AuthHeader from './auth_header.jsx';
import NavHeaderContainer from './nav_header_container.js';

export default ({ loggedIn, logout }) => {
  if(loggedIn)
  {
    return(
      <div>
        <NavHeaderContainer />
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

