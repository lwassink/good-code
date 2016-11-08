import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ReviewFormContainer from './review_form_container.js';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose} />,
      <FlatButton
        label="Save"
        primary={true}
        onClick={this.handleClose} />
    ];

    return (
      <div>
        <FlatButton
          label="Add Review"
          style={{ marginTop: '10px' }}
          onClick={this.handleOpen} />

        <Dialog
          contentStyle={{ width: 650 }}
          title="Review"
          actions={actions}
          modal={true}
          open={this.state.open}
          title="Add review">

          <ReviewFormContainer />
        </Dialog>
      </div>
    )
  }
}

export default ReviewModal;
