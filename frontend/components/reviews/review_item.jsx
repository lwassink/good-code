import React from 'react';
import Paper from 'material-ui/Paper';
import { item } from '../styles/indexStyle.js';
import EditAndDeleteContainer from './edit_and_delete_container.js';

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
    case "0":
      status = " has no status set for "
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
              <span className="status">{status}</span>
              {program} for:
            </p>
            <p>
              {review.project_used_in}
            </p>

            <EditAndDeleteContainer review={review}/>
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

