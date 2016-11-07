import { connect } from 'react-redux';
import StatusSelector from './status_selector.jsx';
import { createStatus, updateStatus, destroyStatus } from '../../actions/statuses_actions.js';

const mapStateToProps = (state, ownProps) => {
  return ({
    statusCode: ownProps.programId ? Number(state.programs[ownProps.programId].status) : 0
  });
}

const setStatus = (dispatch, programId) => {
  const setCallback = (oldStatus, newStatus) => {
    if (oldStatus === 0) {
      dispatch(createStatus({
        content: String(newStatus),
        program_id: programId
      }));
    } else {
      dispatch(updateStatus({
        content: String(newStatus),
        program_id: programId
      }));
    }
  }

  return setCallback;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setStatus: ownProps.programId ? setStatus(dispatch, ownProps.programId) : () => {},
  destroyStatus: ownProps.programId ? () => dispatch(destroyStatus(ownProps.programId)) : () => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusSelector);

