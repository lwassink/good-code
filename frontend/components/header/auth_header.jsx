import React from 'react';
import AuthFormContainer from '../auth/auth_form_container.js';
import { LogoBig } from '../misc.jsx';

export default (props) => (
  <header class="group">
    <LogoBig />

    <div className="header-div">
      <h1 className="display-text">
        Find the right tool for your next software project.
      </h1>
      <div className="auth-form">
        <AuthFormContainer />
      </div>
    </div>
  </header>
)

