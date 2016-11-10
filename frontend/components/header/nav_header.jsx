import React from 'react';
import { Link } from 'react-router';
import { colors } from '../muiTheme.js';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { LogoSmall } from '../misc.jsx';
import { modelAnchor, button } from '../styles/headerStyles.js';
import { hashHistory } from 'react-router';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ListChoice from '../statuses/list_choice.jsx';

class NavHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
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

  render() {
    return (
      <Toolbar
        backgroundColor={colors.light_brown} >
        <LogoSmall
          clickCallback={() => hashHistory.push('/')} />

        <ToolbarGroup>
          <Link to="/" >
            <FlatButton
              style={button}
              label="All Programs"/>
          </Link>

          <Link to="programs/new">
            <FlatButton
              style={button}
              label="Add Program"/>
          </Link>

          <Link to="search">
            <FlatButton
              style={button}
              icon={<ActionSearch />}
              labelPosition="before"
              label="Search"/>
          </Link>

          <ListChoice />
        </ToolbarGroup>

        <ToolbarGroup
          firstChild={true}>
          <FlatButton
            style={modelAnchor}
            label={this.props.user.username}
            icon={<MoreVertIcon />}
            labelPosition="before"
            onClick={this.handleTouchTap}/>
        </ToolbarGroup>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}>

          <Menu>
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

