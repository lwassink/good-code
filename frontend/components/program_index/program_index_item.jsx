import React from 'react';

export default ({ program }) => (
  <li key={program.id}>
    Name: {program.name}
    <br />
    Creator: {program.creator}
    <br />
    Description: {program.description}
  </li>
);

