import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import { toolbarTitle } from '../styles/indexStyle.js';
import ReviewModalContainer from './review_modal_container.js';

export default (props) => {
  return (
    <Toolbar
      style={{
        marginTop: '-8px'
      }}>
      <ToolbarGroup>
        <ToolbarTitle text="Reviews"
          style={toolbarTitle}/>
      </ToolbarGroup>

      <ToolbarGroup>
        {props.loggedIn ? <ReviewModalContainer /> : null}
      </ToolbarGroup>
    </Toolbar>
  )
}

