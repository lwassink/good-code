import React from 'react';
import Paper from 'material-ui/Paper';
import { item } from '../styles/indexStyle.js';
import { Link } from 'react-router';

export default ({ program }) => {
  return (
    <li>
      <Paper
        style={item}>

        <ul
          className="program-item-list">

          <img src={program.thumbnail_url} />

          <li>
            <h2 className="link">
              <Link to={`programs/${program.id}`} >{program.name}</Link>
            </h2>
          </li>
          <li>
            <label>Created by:</label> {program.creator}
          </li>
        </ul>
      </Paper>
    </li>
  );
}

