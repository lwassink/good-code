import React from 'react';
import Paper from 'material-ui/Paper';
import { item } from '../styles/indexStyle.js';

export default ({ program }) => (
  <li>
    <Paper
      style={item}>
      <ul
        className="program-item-list">
        <li>
          <h2>{program.name}</h2>
        </li>
        <li>
          <label>Created by:</label> {program.creator}
        </li>
        <li>
          <label>Description:</label> {program.description}
        </li>
      </ul>
    </Paper>
  </li>
);

