
import React, { PureComponent } from 'react'

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  MenuItemText,
} from 'react-material'

import { SecondLevelMenu } from '../SecondLevelMenu'

export class FirstLevelMenu extends PureComponent {

  state = {
    anchorEl: null,
    open: false,
    secondary: 'Every 2 Weeks',
  }

  handleItemClick = (e) => {
    this.setState({ open: !this.state.open, anchorEl: e.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <List style={{ width: 64 * 4 }}>
          <ListItem
            button
            onClick={this.handleItemClick}
          >
            <ListItemText
              primary='Notification settings'
              secondary={this.state.secondary}
            />
          </ListItem>
        </List>
        <Menu
          cascading
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          onRequestClose={this.handleRequestClose}
          open={this.state.open}
          >
          <MenuItem onClick={this.handleRequestClose}>
            <MenuItemText
              primary='Bold'
              secondary='⌘B'
              />
          </MenuItem>
          <MenuItem>
            <MenuItemText
              primary='Italic'
              secondary='⌘I'
              />
          </MenuItem>
          <MenuItem>
            <MenuItemText
              primary='Underline'
              secondary='⌘U'
              />
          </MenuItem>
          <MenuItem>
            <MenuItemText
              primary='Strikethrough'
              secondary='Alt+Shift+5'
              />
          </MenuItem>
          <Divider nested/>
          <MenuItem>
            <MenuItemText
              primary='Paragraph styles'
              secondary={
                <i className="material-icons md-24 md-dark">arrow_right</i>
              }
              />
          </MenuItem>
          <MenuItem>
            <MenuItemText
              primary='Align'
              secondary={
                <i className="material-icons md-24 md-dark">arrow_right</i>
              }
              />
          </MenuItem>
          <SecondLevelMenu onRequestClose={this.handleRequestClose}/>
          <MenuItem>
            <MenuItemText
              primary='Numbered list'
              secondary={
                <i className="material-icons md-24 md-dark">arrow_right</i>
              }
              />
          </MenuItem>
          <MenuItem>
            <MenuItemText
              primary='List options'
              secondary={
                <i className="material-icons md-24 md-dark">arrow_right</i>
              }
              />
          </MenuItem>
          <Divider nested/>
          <MenuItem>
            <MenuItemText
              primary='Clear formatting'
              secondary='⌘/'
              />
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

FirstLevelMenu.propTypes = {

}

export default FirstLevelMenu
