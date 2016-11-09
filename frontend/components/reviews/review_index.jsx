import React from 'react';
import Paper from 'material-ui/Paper';
import ReviewToolbar from './review_toolbar.jsx';
import ReviewItem from './review_item.jsx';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  emptyMessage() {
    if (Object.values(this.props.reviews).length < 3) {
      return (<p>No reviews yet...</p>);
    } else {
      return null;
    }
  }

  render() {
    let prunedReviews = merge({}, this.props.reviews);
    delete prunedReviews.errors;
    delete prunedReviews.formOpen;

    return (
      <div
        className="review-index"
        style={{marginTop: '10px'}}>
        <Paper>
          <ReviewToolbar />

          {this.emptyMessage()}

          {Object.values(prunedReviews).map(review => (
            <ReviewItem
              key={review.id}
              review={review}
              program={this.props.program}
            />
          ))}
        </Paper>
      </div>
    )
  }
}

export default ReviewIndex;

