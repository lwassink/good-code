import React from 'react';
import { colors } from '../muiTheme.js';
import { Toolbar } from 'material-ui/Toolbar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { LogoSmall } from '../misc.jsx';
import { modelAnchor } from '../styles/headerStyles.js';
import { hashHistory } from 'react-router';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class NavHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleMyProgramsClick = this.handleMyProgramsClick.bind(this);
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose(event) {
    this.setState({open: false});
  };

  handleMyProgramsClick(event) {
    hashHistory.push('programs');
    this.setState({open: false});
  }

  render() {
    return (
      <Toolbar
        backgroundColor={colors.light_brown} >
        <LogoSmall
          clickCallback={() => hashHistory.push('/')} />

        <FlatButton
          style={modelAnchor}
          label={this.props.user.username}
          icon={<MoreVertIcon />}
          labelPosition="before"
          onClick={this.handleTouchTap}/>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}>

          <Menu>
            <MenuItem
              onClick={this.handleMyProgramsClick}
              primaryText="My programs" />
            <MenuItem
              onClick={this.props.logout}
              primaryText="Log out" />
          </Menu>
        </Popover>
      </Toolbar>
    );
  }
}

export default NavHeader;

