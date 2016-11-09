import { connect } from 'react-redux';
import ReviewIndex from './review_index.jsx';
import { requestReviews } from '../../actions/review_actions.js';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchReviews: () => dispatch(requestReviews(ownProps.params.id))
  });
};

const ReviewIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);

export default withRouter(ReviewIndexContainer);

