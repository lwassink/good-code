import React from 'react';

export default ({ errors }) => (
  <ul className="error-list">
    {
      errors.map((error, idx) => (
        <li className="error-item" key={idx}>{error}</li>
      ))
    }
  </ul>
)

