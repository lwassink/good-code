import React from 'react';
import Paper from 'material-ui/Paper';
import { item } from '../styles/indexStyle.js';

export default (props) => {
  return (
    <div>
      <Paper
        style={item}>

        <div
          className="group">
          <aside>
            <label>Author</label>: Tommy Tommerson
            <br />

            <label>Used for</label>: various and sundry projects
          </aside>

          <ul
            className="program-item-list">
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </li>
          </ul>
        </div>
    </Paper>
  </div>
  )
}

