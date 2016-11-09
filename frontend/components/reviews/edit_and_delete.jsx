import React from 'react';
import Divider from 'material-ui/Divider';

export default ({ owner, editReview, deleteReview, openReviewForm }) => {
  if (owner) {
    return (
      <div
        className="white-space">
        <Divider
          style={{marginTop: 10}}/>

        <span className="link"
        onClick={openReviewForm}>
          Edit
        </span>
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

