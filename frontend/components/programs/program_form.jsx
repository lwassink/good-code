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
      loading: this.props.edit
    };

    window.myState = this.state;
    window.myProps = this.props;

    this.getErrors = this.getErrors.bind(this);
    this.update = this.update.bind(this);
    this.validInput = this.validInput.bind(this);
    this.touch = this.touch.bind(this);
    this.cloudinate = this.cloudinate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.edit) {
      debugger
      this.props.fetchProgram();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.program.name != this.props.program.name) {
      this.setState({
        program: this.props.program,
        loading: false
      });
    }
  }

  validInput(key) {
    return this.state.program[key].length > 0;
  }

  submittable() {
    return this.validInput('name') && this.validInput('sourceCodeUrl')
      && this.validInput('creator') && this.validInput('description')
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

  cloudinate(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (errors, imageInfo) => {
        if (errors === null) {
          let program = this.state.program;
          program.image_url = imageInfo[0].url;
          program.thumbnail_url = imageInfo[0].thumbnail_url;
          this.setState({ program })
        }
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.program);
    this.props.submit(this.state.program);
    hashHistory.push(`/`)
  }

  render () {
    const title = this.props.edit ? "Edit " + this.props.program.name : "Add a program"
    const pictureButtonText = this.props.edit ? "Update picture" : "Add picture"
    const buttonText = this.props.edit ? "Update Program" : "Add Program"

    if (this.state.loading) {
      return <div></div>;
    }

    return (
      <div>
        <Card
          style={cardWide}>

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
            onChange={this.update("sourceCodeUrl")}
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
              hoverColor={colors.lightBrown}
              onClick={this.handleSubmit}
              label={buttonText} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ProgramForm;

