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

  componentWillUnmount() {
    this.props.clearReviews(); // this forces it to reloade reviews each time you look at a new program
  }

  componentWillReceiveProps(newProps) {
    if (this.props.path != newProps.path) {
      newProps.fetchReviews();
    }
  }

  emptyMessage() {
    if (_.values(this.props.reviews).length < 3) {
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
          <ReviewToolbar loggedIn={this.props.loggedIn}/>

          {this.emptyMessage()}

          {_.values(prunedReviews).reverse().map(review => (
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

