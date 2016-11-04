import React from 'react';

export const LogoBig = ({ clickCallback }) => (
  <p className="logo big"
    onClick={clickCallback}>
    <span className="good">good</span>
    <span className="code">code</span>
  </p>
);

export const LogoSmall = ({ clickCallback }) => (
  <p className="logo small"
    onClick={clickCallback}>
    <span className="good">good</span>
    <span className="code">code</span>
  </p>
);
