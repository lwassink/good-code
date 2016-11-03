import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import HeaderContainer from './header/header_container.js';

export default ({ children }) => (
  <div>
    <HeaderContainer />
    { children }
  </div>
);

