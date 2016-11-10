import React from 'react';
import Paper from 'material-ui/Paper';
import { item } from '../styles/indexStyle.js';
import { Link } from 'react-router';

export default ({ program, expanded, handleExpand }) => {
  const description = () => {
    let words = program.description.split(' ');
    if (expanded || words.length < 65) {
      return program.description;
    } else {
      return (
        <span>
          {words.slice(0,66).join(' ') + '... ('}
          <span
            onClick={handleExpand}
            className='link'>more</span>)
        </span>
      )
    }
  };

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
          <li>
            {description()}
          </li>
        </ul>
      </Paper>
    </li>
  );
}

