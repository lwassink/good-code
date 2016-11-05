import React from 'react';
import Paper from 'material-ui/Paper';
import { fetchProgram } from '../../util/programs_api_util.js';

class ProgramShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProgram()
  }

  componentWillReceiveProps(newState) {
    if (this.props.path != newState.path) {
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

