import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { fetchProgram } from '../../util/programs_api_util.js';

class ProgramShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.program;

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

  editAndDelete() {
    if (this.props.authorId === this.state.author_id) {
      return (
        <div>
          <Link to={`programs/${this.state.id}/edit`}>
            <span className="link">
              Edit
            </span>
          </Link>
          &nbsp;
          <span className="link"
            onClick={this.handleDelete}>
            Delete
          </span>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.destroyProgram();
  }

  render() {
    return (
      <div
        className="program-show">
        <Paper>
          <Paper>

            <div
              className="group">
              <aside>
                <img src={this.state.thumbnail_url} />
                <br />

                <label>Written by</label>: {this.state.creator}
                <br />

                {this.sourceCodeUrl()}
                <br />

                {this.editAndDelete()}
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
                  <label>Description:</label>
                  <br />
                  {this.state.description}
                </li>
              </ul>
            </div>

          </Paper>
        </Paper>
      </div>
    )
  }
}

export default ProgramShow;

