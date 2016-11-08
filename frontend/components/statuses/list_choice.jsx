import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { modelAnchor, button } from '../styles/headerStyles.js';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { hashHistory } from 'react-router';

class ListChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false }

    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleChoiceClick = this.handleChoiceClick.bind(this);
    this.handleMyProgramsClick = this.handleMyProgramsClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose(event) {
    this.setState({open: false});
  };

  handleChoiceClick(statusCode) {
    return (event) => {
      event.preventDefault();
      hashHistory.push(`lists/${statusCode}`);
      this.setState({open: false});
    }
  }

  handleMyProgramsClick(event) {
    hashHistory.push('programs');
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <FlatButton
          style={modelAnchor}
          label="My Lists"
          icon={<MoreVertIcon />}
          labelPosition="before"
          onClick={this.handleClick}/>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}>

          <Menu>
            <MenuItem
              onClick={this.handleChoiceClick(1)}
              primaryText="Programs I am currently using" />
            <MenuItem
              onClick={this.handleChoiceClick(2)}
              primaryText="Programs I have used" />
            <MenuItem
              onClick={this.handleChoiceClick(3)}
              primaryText="Programs I want to use" />
            <MenuItem
              onClick={this.handleMyProgramsClick}
              primaryText="Programs I added" />
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default ListChoice;

