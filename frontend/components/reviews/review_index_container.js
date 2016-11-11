import { connect } from 'react-redux';
import ReviewIndex from './review_index.jsx';
import { requestReviews, clearReviews } from '../../actions/review_actions.js';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews,
  program: ownProps.program,
  loggedIn: state.currentUser.id ? true : false,
  path: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReviews: () => dispatch(requestReviews(ownProps.params.id)),
  clearReviews: () => dispatch(clearReviews())
});

const ReviewIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);

export default withRouter(ReviewIndexContainer);

