import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { fetchProgram } from '../../util/programs_api_util.js';

class ProgramShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchProgram()
  }

  componentDidReceiveProps(newProps) {
    if (this.props.path != newProps.path) {
      newState.fetchProgram();
    }
  }

  sourceCodeUrl() {
    if (this.props.program.source_code_url) {
      return (
        <a
          href={this.props.program.source_code_url}
          className="link">
          Source code
        </a>
      );
    } else {
      return(<div></div>);
    }
  }

  editAndDelete() {
    if (this.props.authorId === this.props.program.author_id) {
      return (
        <div>
          <Link to={`programs/${this.props.program.id}/edit`}>
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
                <img src={this.props.program.thumbnail_url} />
                <br />
                {this.sourceCodeUrl()}
                <br />

                {this.editAndDelete()}
              </aside>

              <ul
                className="program-item-list">
                <li>
                  <h2>{this.props.program.name}</h2>
                </li>
                <li>
                  <label>Created by:</label> {this.props.program.creator}
                </li>
                <li>
                  <label>Description:</label>
                  <br />
                  {this.props.program.description}
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

