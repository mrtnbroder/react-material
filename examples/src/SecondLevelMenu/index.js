
import React, { PureComponent } from 'react'

import {
  Divider,
  Menu,
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
} from '../../../es6'

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
    this.setState({ open: false }, () => {
      this.timeout = setTimeout(() => {
        if (this.props.onRequestClose) this.props.onRequestClose()
      }, 150)
    })
  }

  render() {
    return (
      <MenuItem onClick={this.handleItemClick}>
        <MenuItemText
          primary='Line spacing'
          secondary={this.state.secondary}
          />
        <Menu
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
