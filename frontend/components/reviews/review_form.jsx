import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import {
  cardWide,
  preview,
  textInput
} from '../styles/formStyles.js';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { hashHistory } from 'react-router';
import Errors from '../auth/errors.jsx';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: this.props.review,
      touched: {
        body: false
      }
    }
    this.state.review.program_id = this.props.program_id;

    this.getErrors = this.getErrors.bind(this);
    this.update = this.update.bind(this);
    this.validInput = this.validInput.bind(this);
    this.touch = this.touch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  validInput(key) {
    return this.state.review[key].length > 0;
  }

  submittable() {
    return this.validInput('body')
  }

  touch(key) {
    return event => {
      let touched = this.state.touched;
      touched[key] = true;
      this.setState({ touched: touched });
    }
  }

  getErrors(key) {
    if ((this.state.touched[key] || this.props.edit) && !this.validInput(key)) {
      return 'Required';
    } else {
      return false;
    }
  }

  update(key) {
    return event => {
      let review = this.state.review;
      review[key] = event.target.value;
      this.setState({ review });
    }
  }

  handleSubmit() {
    this.props.submit(this.state.review);
  }

  render() {
    return (
      <div
        className="form">
        <Card
          style={cardWide}>

          <TextField
            style={textInput}
            hintText="What project did you use this program for?"
            multiLine={true}
            value={this.state.review.project_used_in}
            onChange={this.update('project_used_in')}
            floatingLabelText="Used for" />

          <TextField
            floatingLabelText="Review"
            onBlur={this.touch('body')}
            value={this.state.review.body}
            onChange={this.update('body')}
            errorText={this.getErrors('body')}
            style={textInput}
            multiLine={true}/>

          <h2>
            Preview:
          </h2>
          <Card
            style={preview}>
            <p>
              {this.state.review.body}
            </p>
          </Card>

          <CardActions>
            <FlatButton
              style={{
                width: '100%'
              }}
              label="Save"
              disabled={!this.submittable()}
              onClick={this.handleSubmit} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default ReviewForm;

