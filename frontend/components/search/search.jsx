import React from 'react';
import SearchIndex from './search_index.jsx';
import TextField from 'material-ui/TextField';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
import { debounce } from 'lodash';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" }

    this.dbSearch = debounce(this.props.search, 250);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.props.clearPrograms();
  }

  search(event) {
    this.setState({ query: event.target.value });
    this.dbSearch(event.target.value);
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
