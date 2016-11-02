import React from 'react';
import AuthFormContainer from '../auth/auth_form_container.js';
import { LogoBig } from '../misc.jsx';

export default (props) => (
  <header>
    <LogoBig />

    <div className="auth-form">
      <AuthFormContainer />
    </div>
  </header>
)

