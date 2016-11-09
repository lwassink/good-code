import React from 'react';
import { Link, hashHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { fetchProgram } from '../../util/programs_api_util.js';
import StatusSelectorContainer from '../statuses/status_selector_container.js';
import ReviewIndexContainer from '../reviews/review_index_container.js';

class ProgramShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.program;
    this.state.deleteOpen = false;

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchProgram()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.program.id != this.state.id) {
      newProps.fetchProgram();
    }
    this.setState(newProps.program);
  }

  sourceCodeUrl() {
    if (this.state.source_code_url) {
      return (
        <a
          href={this.state.source_code_url}
          className="link">
          Source code
        </a>
      );
    } else {
      return(<div></div>);
    }
  }

  editAndDelete(actions) {
    if (this.props.authorId === this.state.author_id) {
      return (
        <div
          className="white-space"
        >
          <Divider
            style={{marginTop: 10}}
          />

          <Link to={`programs/${this.state.id}/edit`}>
            <span className="link">
              Edit
            </span>
          </Link>
          &nbsp;
          &nbsp;
          <span className="link"
            onClick={() => this.setState({deleteOpen: true})}>
            Delete
          </span>

          <Dialog
            title="Delete Program"
            actions={actions}
            modal={false}
            open={this.state.deleteOpen}
            onRequestClose={() => this.setState({deleteOpen: false})}>
            Are you sure you want to delete this program?
          </Dialog>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyProgram();
    this.setState({deleteOpen: false });
    hashHistory.push('/');
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.setState({deleteOpen: false})}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        onClick={this.handleDelete}
      />,
    ];

    return (
      <div
        className="program-show">
        <Paper>
          <Paper>

            <div
              className="group">
              <aside>
                <img src={this.state.thumbnail_url} />

                {this.props.authorId ?  <StatusSelectorContainer programId={this.state.id} /> : <div></div> }

                <label>Created by</label>: {this.state.creator}
                <br />

                {this.sourceCodeUrl()}

                {this.editAndDelete(actions)}
              </aside>

              <ul
                className="program-item-list">
                <li>
                  <h2>{this.state.name}</h2>
                </li>
                <li>
                  <label>Created by:</label> {this.state.creator}
                </li>
                <li>
                  {this.state.description}
                </li>
              </ul>
            </div>

          </Paper>

          <ReviewIndexContainer program={this.state.name}/>
        </Paper>
      </div>
    )
  }
}

export default ProgramShow;

