
import * as React from 'react'

import {
  Menu,
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
} from 'react-material'

class ThirdLevelMenu extends React.PureComponent {

  state = {
    anchorEl: null,
    open: false,
    secondary: '1.2',
  }

  handleItemClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (e.target === e.currentTarget) {
      this.setState({ open: !this.state.open, anchorEl: e.currentTarget })
    }
  }

  handleRequestClose = (e) => {
    console.log('ThirdLevelMenu');
    e.stopPropagation()
    e.preventDefault()
    if (e.target === this.state.anchorEl) {
      this.setState({ open: false })
    }
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

export default ThirdLevelMenu
