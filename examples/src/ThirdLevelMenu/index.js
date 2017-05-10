
import React, { PureComponent } from 'react'

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
} from '../../../es6'

export class ThirdLevelMenu extends PureComponent {

  state = {
    anchorEl: null,
    open: false,
    secondary: '1.2',
  }

  handleItemClick = (e) => this.setState({ open: !this.state.open, anchorEl: e.currentTarget })

  handleRequestClose = () => this.setState({ open: false })

  render() {
    return (
      <MenuItem onClick={this.handleItemClick}>
        <MenuItemSpacer>
          <i className="material-icons md-24 md-dark">check</i>
        </MenuItemSpacer>
        <MenuItemText
          primary='Custom: 1.2'
          secondary={
            <i className="material-icons md-24 md-dark">arrow_right</i>
          }
          />
        <Menu
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onRequestClose={this.handleRequestClose}
          open={this.state.open}
          >
          <MenuItem>
            <MenuItemText
              primary='Line Spacing'
              secondary='1.2'
            />
          </MenuItem>
          <MenuItem>
            <MenuItemText
              primary='Paragraph spacing before'
              secondary='1.2'
            />
          </MenuItem>
          <MenuItem>
            <MenuItemText
              primary='Paragraph spacing after'
              secondary='1.5'
            />
          </MenuItem>
        </Menu>
      </MenuItem>
    )
  }
}

ThirdLevelMenu.propTypes = {

}

export default ThirdLevelMenu
