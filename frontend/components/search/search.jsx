import React from 'react';
import SearchIndex from './search_index.jsx';
import TextField from 'material-ui/TextField';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" }

    this.search = this.search.bind(this);
  }

  search(event) {
    this.setState({ query: event.target.value });
    this.props.search(event.target.value);
  }

  render() {
    return (
      <div
        className="main">
        <TextField
          value={this.state.query}
          onChange={this.search}
          floatingLabelText="Search"/>

        <SearchIndex programs={this.props.programs} />
      </div>
    );
  }
};

export default Search;

