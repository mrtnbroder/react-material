
import React, { PureComponent } from 'react'

import {
  Divider,
  Menu,
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
} from 'react-material'

import { ThirdLevelMenu } from '../ThirdLevelMenu'

export class SecondLevelMenu extends PureComponent {

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
          elevation={9}
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
          <ThirdLevelMenu onRequestClose={this.handleRequestClose}/>
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
