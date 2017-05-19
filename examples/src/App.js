
import React, { Component } from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemEnd,
  ListItemIcon,
  ListItemText,
  Paper,
} from '../../es6'

import { FirstLevelMenu } from './FirstLevelMenu'

class App extends Component {
  render() {
    return (
      <div>
        <FirstLevelMenu/>
        <Paper style={{ width: 64 * 6, margin: 24 }}>
          <List>
            <ListItem>
              <ListItemText
                primary='Photos'
                />
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Files'
                secondary='Jan 9, 2014'
                />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <i className="material-icons md-light">cloud_queue</i>
              </ListItemAvatar>
              <ListItemText
                primary='Work'
                secondary='Jan 28, 2016'
                />
            </ListItem>
            <Divider inset/>
            <ListItem>
              <ListItemIcon>
                <i className="material-icons md-24 md-dark">phone</i>
              </ListItemIcon>
              <ListItemText
                primary='(650) 555-1234'
                secondary='Work'
                />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="material-icons md-24 md-dark">mail</i>
              </ListItemIcon>
              <ListItemText
                primary='aliconners@example.com'
                secondary='Personal'
                />
            </ListItem>
            <Divider inset/>
            <ListItem>
              <ListItemIcon>
                <i className="material-icons md-24 md-dark">backup</i>
              </ListItemIcon>
              <ListItemText
                primary='aliconners@example.com'
                secondary='Personal'
                />
              <ListItemEnd>
                <i className="material-icons md-18 md-dark">info</i>
              </ListItemEnd>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i style={{color: '#0E9C57' }} className="material-icons md-24 md-dark">check_box</i>
              </ListItemIcon>
              <ListItemText
                primary='List Item selected'
                />
              <ListItemEnd>
                <i className="material-icons md-24 md-dark">comment</i>
              </ListItemEnd>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="material-icons md-24 md-dark">format_bold</i>
              </ListItemIcon>
              <ListItemText
                primary='Bold'
                />
              <ListItemEnd>
                ⌘B
              </ListItemEnd>
            </ListItem>
          </List>
        </Paper>
      </div>
    )
  }
}

export default App
