import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { modelAnchor, button } from '../styles/headerStyles.js';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class ListChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false }

    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
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
              primaryText="Programs I am currently using" />
            <MenuItem
              primaryText="Programs I have used" />
            <MenuItem
              primaryText="Programs I want to use" />
            <MenuItem
              primaryText="All" />
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default ListChoice;

