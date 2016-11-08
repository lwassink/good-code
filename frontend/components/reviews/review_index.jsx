import React from 'react';
import Paper from 'material-ui/Paper';
import ReviewToolbar from './review_toolbar.jsx';
import ReviewItemContainer from './review_item_container.js';

export default (props) => {
  return (
    <div
    style={{marginTop: '10px'}}>
      <Paper>
        <ReviewToolbar />

        <ReviewItemContainer />
        <ReviewItemContainer />
        <ReviewItemContainer />
      </Paper>
    </div>
  )
}

