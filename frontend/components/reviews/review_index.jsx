import React from 'react';
import Paper from 'material-ui/Paper';
import ReviewToolbar from './review_toolbar.jsx';
import ReviewItem from './review_item_container.js';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.reviews;
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.reviews);
  }

  render() {
    return (
      <div
        style={{marginTop: '10px'}}>
        <Paper>
          <ReviewToolbar />

          {Object.values(this.state).map(review => (
              <ReviewItem review={review}/>
          ))}
        </Paper>
      </div>
    )
  }
}

export default ReviewIndex;

