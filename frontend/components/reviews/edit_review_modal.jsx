import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ReviewFormContainer from './review_form_container.js';

class EditReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: this.props.open }

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState( { open: newProps.open } );
  }

  handleOpen() {
    this.props.openDialog();
  }

  handleClose() {
    this.props.closeDialog();
  }

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose} />
    ];

    return (
      <div
      style={{display: 'inline'}}>
        <span className="link"
          onClick={this.handleOpen}>
          Edit
        </span>

        <Dialog
          contentStyle={{ width: 650 }}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
          title="Review"
          actions={actions}
          modal={true}
          repositionOnUpdate={true}
          open={this.state.open}
          title="Add review">

          <ReviewFormContainer review={this.props.review} />
        </Dialog>
      </div>
    )
  }
}

export default EditReviewModal;
