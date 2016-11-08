import React from 'react';
import Paper from 'material-ui/Paper';
import { item } from '../styles/indexStyle.js';

export default props => {
  return (
    <li>
      <Paper
        style={item}>

        <ul
          className="program-item-list">

          <img
            src='http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478624954/eqc0owfgyzqlujj6afvs.jpg'
          />

          <li>
            <label>by</label> Tommy Tommerson
          </li>
          <li>
            <label>Used for:</label> Various projects
          </li>
          <li>
            {description()}
          </li>
        </ul>
      </Paper>
    </li>
  )
}

