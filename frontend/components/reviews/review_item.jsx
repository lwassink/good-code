import React from 'react';
import Paper from 'material-ui/Paper';
import { item } from '../styles/indexStyle.js';

export default ({ review, program }) => {
  let status;
  switch(review.status) {
    case "1":
      status = " is currently using ";
      break;
    case "2":
      status = " has used ";
      break;
    case "3":
      status = " wants to use ";
      break;
  }

  return (
    <div className="review-item">
      <Paper
        style={item}>

        <div
          className="group">
          <aside>
            <p>
              {review.author}
              &nbsp;
              <span>{status}</span>
              &nbsp;
              {program}
              &nbsp;
              for:
            </p>
            <p>
              {review.project_used_in}
            </p>
          </aside>

          <ul
            className="program-item-list">
            <li>
              <p>
                {review.body}
              </p>
            </li>
          </ul>
        </div>
      </Paper>
    </div>
  )
}

