
import * as React from 'react'

import {
  Divider,
  Menu,
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
} from 'react-material'

import ThirdLevelMenu from '../ThirdLevelMenu'

class SecondLevelMenu extends React.PureComponent {

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
    console.log('SecondLevelMenu');
    e.stopPropagation()
    e.preventDefault()
    if (e.target === this.state.anchorEl) {
      this.setState({ open: false })
    }
  }

  render() {
    return (
      <MenuItem onClick={this.handleItemClick}>
        <MenuItemText
          primary='Line spacing'
          secondary={this.state.secondary}
          />
        <Menu
          cascading
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          onRequestClose={this.handleRequestClose}
          open={this.state.open}
          >
          <MenuItem onClick={this.handleRequestClose}>
            <MenuItemSpacer/>
            Single
          </MenuItem>
          <MenuItem>
            <MenuItemSpacer/>
            1.15
          </MenuItem>
          <MenuItem>
            <MenuItemSpacer/>
            Double
          </MenuItem>
          <ThirdLevelMenu/>
          <Divider nested/>
          <MenuItem>
            Add space before paragraph
          </MenuItem>
          <MenuItem>
            Add space after paragraph
          </MenuItem>
          <Divider nested/>
          <MenuItem>
            Custom spacing…
          </MenuItem>
        </Menu>
      </MenuItem>
    )
  }
}

SecondLevelMenu.propTypes = {

}

export default SecondLevelMenu
