import React from 'react';
import { Card, CardActions } from 'material-ui/Card';
import { card,
  button,
  textInput,
  cardWide,
  submitButton,
  textInputNarrow } from '../styles/formStyles.js';
import { colors } from '../muiTheme.js';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { hashHistory } from 'react-router';
import Errors from '../auth/errors.jsx';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

class ProgramForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      touched: {
        name: false,
        creator: false,
        description: false
      },
      program: this.props.program,
      snackOpen: false
    };

    window.myState = this.state;
    window.myProps = this.props;

    this.getErrors = this.getErrors.bind(this);
    this.update = this.update.bind(this);
    this.validInput = this.validInput.bind(this);
    this.touch = this.touch.bind(this);
    this.cloudinate = this.cloudinate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequestSnackClose = this.handleRequestSnackClose.bind(this);
  }

  componentDidMount() {
    if (this.props.edit) {
      this.props.fetchProgram();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.edit && prevProps.program.name != this.props.program.name) {
      this.setState({
        program: this.props.program
      });
    }
  }

  validInput(key) {
    return this.state.program[key].length > 0;
  }

  submittable() {
    return this.validInput('name') &&
      this.validInput('creator') && this.validInput('description')
  }

  touch(key) {
    return event => {
      let touched = this.state.touched;
      touched[key] = true;
      this.setState({touched: touched});
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
      let program = this.state.program;
      program[key] = event.target.value;
      this.setState({program: program});
    }
  }

  handleRequestSnackClose() {
    this.setState({
      snackOpen: false
    });
  }

  cloudinate(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (errors, imageInfo) => {
        if (errors === null) {
          let program = this.state.program;
          program.image_url = imageInfo[0].url;
          program.thumbnail_url = imageInfo[0].thumbnail_url;
          this.setState({
            program,
            snackOpen: true
          });
        }
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.program);
    this.props.submit(this.state.program);
  }

  render () {
    const title = this.props.edit ? "Edit " + this.props.program.name : "Add a program"
    const pictureButtonText = this.props.edit ? "Update picture" : "Add picture"
    const buttonText = this.props.edit ? "Update Program" : "Add Program"

    return (
      <div
      className="form">
        <Card
          style={cardWide}>

          <Errors errors={this.props.errors} />

          <h1 className="form">{title}</h1>

          <TextField
            style={textInput}
            onChange={this.update("name")}
            value={this.state.program.name}
            errorText={this.getErrors("name")}
            onBlur={this.touch('name')}
            floatingLabelText="Name" />

          <TextField
            style={textInput}
            onChange={this.update("source_code_url")}
            value={this.state.program.source_code_url}
            floatingLabelText="Source Code Url" />

          <TextField
            style={textInput}
            onChange={this.update("creator")}
            value={this.state.program.creator}
            errorText={this.getErrors("creator")}
            onBlur={this.touch('creator')}
            floatingLabelText="Creator" />

          <TextField
            floatingLabelText="Description"
            onChange={this.update("description")}
            errorText={this.getErrors("description")}
            value={this.state.program.description}
            onBlur={this.touch('description')}
            style={textInput}
            multiLine={true}/>

          <CardActions>

            <FlatButton
              style={{
                width: '100%'
              }}
              hoverColor={colors.lightBrown}
              onClick={this.cloudinate}
              label={pictureButtonText} />
            <br />

            <img
              src={this.state.program.thumbnail_url ? this.state.program.thumbnail_url : 'http://res.cloudinary.com/dfmknrbfz/image/upload/c_limit,h_60,w_90/v1478624954/eqc0owfgyzqlujj6afvs.jpg'}
              onClick={this.cloudinate}
              style={{cursor: "pointer"}}
            />

            <Divider
              style={{
                width: '100%',
                marginTop: '8px',
                marginBottom: '8px'
              }}/>

            <FlatButton
              style={{
                width: '100%'
              }}
              disabled={!this.submittable()}
              hoverColor={colors.lightBrown}
              onClick={this.handleSubmit}
              label={buttonText} />
          </CardActions>
        </Card>
        <Snackbar
          open={this.state.snackOpen}
          message="Image saved"
          autoHideDuration={6000}
          onRequestClose={this.handleRequestSnackClose}

        />
      </div>
    );
  }
}

export default ProgramForm;

