
import React, { PureComponent } from 'react'

import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
} from 'react-material'

export class ThirdLevelMenu extends PureComponent {

  state = {
    anchorEl: null,
    open: false,
    secondary: '1.2',
  }

  handleItemClick = (e) => {
    this.setState({ open: !this.state.open, anchorEl: e.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

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
          cascading
          anchorEl={this.state.anchorEl}
          elevation={10}
          onRequestClose={this.handleRequestClose}
          open={this.state.open}
          targetOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
          <MenuItem onClick={this.handleRequestClose}>
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
