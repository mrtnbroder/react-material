
import * as React from 'react'

import '../../App.css'

import {
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
  Menu,
  Divider,
  List,
  ListItem,
  ListItemText,
  Card,
} from 'react-material'

import menuItems from './menu'

const mkMenuItem = (item, children) => {
  const secondary = item.secondary
    ? typeof item.secondary === 'object'
      ? <i className={item.secondary.classes}>{item.secondary.icon}</i>
      : item.secondary
    : null
  const spacer = item.spacer
    ? typeof item.spacer === 'object'
      ? <MenuItemSpacer>
          <i className={item.spacer.text.classes}>{item.spacer.text.icon}</i>
        </MenuItemSpacer>
      : <MenuItemSpacer/>
    : null
  const text = (item.primary || item.secondary) && (
    <MenuItemText primary={item.primary} secondary={secondary}/>
  )

  return (
    <MenuItem key={item.key}>
      {spacer}
      {text}
      {children}
    </MenuItem>
  )
}

const mkMenu = (item) => {
  if (item.type === 'item') {
    return mkMenuItem(item)
  }

  if (item.type === 'divider') {
    return (
      <Divider key={item.key} nested={item.nested}/>
    )
  }

  if (item.type === 'menu-item') {
    const menu = (
      <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        cascading={item.cascading}
        key={item.key}
        >
        {item.menuItems.map(mkMenu)}
      </Menu>
    )

    return mkMenuItem(item, menu)
  }
}

const menu = menuItems.map(mkMenu)

class App extends React.PureComponent {

  state = {
    anchorEl: null,
    path: [],
    open: false,
  }

  handleItemClick = (e) => {
    this.setState({ anchorEl: e.currentTarget, path: [0], open: true, })
  }

  handleRequestClose = (e) => {
    this.setState({ anchorEl: null, path: [], open: false, })
  }

  setPath = (path) => {
    console.log('setPath', path)
    this.setState({ path })
  }

  render() {
    return (
      <Card className='Card Card--center'>
        <List style={{ width: 64 * 4 }}>
          <ListItem
            button
            onClick={this.handleItemClick}
            >
            <ListItemText
              primary='Notification settings'
              secondary='Every 2 Weeks'
            />
          </ListItem>
        </List>
        <Menu
          cascading
          path={this.state.path}
          setPath={this.setPath}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          >
          {menu}
        </Menu>
      </Card>
    )
  }
}

export default App
