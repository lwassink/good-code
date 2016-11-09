import React from 'react';
import Divider from 'material-ui/Divider';
import EditReviewModalContainer from './edit_review_modal_container.js';

export default ({ owner, deleteReview, openReviewForm, review }) => {
  if (owner) {
    return (
      <div
        className="white-space">
        <Divider
          style={{marginTop: 10}}/>

          <EditReviewModalContainer review={review} />
        &nbsp;
        &nbsp;
        <span className="link"
        onClick={deleteReview}>
          Delete
        </span>
      </div>
    );
  } else {
    return null;
  }
}

