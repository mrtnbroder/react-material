import * as React from 'react'

import '../../App.css'

import {
  MenuItem,
  MenuItemText,
  MenuItemSpacer,
  Menu,
  MenuManager,
  Divider,
  List,
  ListItem,
  ListItemText,
  Card,
} from 'react-material'

class App extends React.PureComponent {
  render() {
    return (
      <Card className="Card Card--center">
        <List style={{ width: 64 * 4 }}>
          <MenuManager>
            <Menu
              toggle={
                <ListItem button>
                  <ListItemText
                    primary="Notification settings"
                    secondary="Every 2 Weeks"
                  />
                </ListItem>
              }>
              <MenuItem>
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
              <Menu
                toggle={
                  <MenuItem>
                    <MenuItemText
                      primary='Align'
                      secondary={
                        <i className="material-icons md-24 md-dark">arrow_right</i>
                      }
                      />
                  </MenuItem>
                }
                >
                <MenuItem>
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
                  <Menu
                    toggle={
                      <MenuItem>
                        <MenuItemSpacer>
                          <i className="material-icons md-24 md-dark">check</i>
                        </MenuItemSpacer>
                        <MenuItemText
                          primary='Custom: 1.2'
                          secondary={
                            <i className="material-icons md-24 md-dark">arrow_right</i>
                          }
                          />
                      </MenuItem>
                    }
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
              <Menu
                toggle={
                  <MenuItem>
                    <MenuItemText
                      primary='Line spacing'
                      secondary='1.2'
                      />
                  </MenuItem>
                }
                >
                <MenuItem>
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
                  <Menu
                    toggle={
                      <MenuItem>
                        <MenuItemSpacer>
                          <i className="material-icons md-24 md-dark">check</i>
                        </MenuItemSpacer>
                        <MenuItemText
                          primary='Custom: 1.2'
                          secondary={
                            <i className="material-icons md-24 md-dark">arrow_right</i>
                          }
                          />
                      </MenuItem>
                    }
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
          </MenuManager>
        </List>
      </Card>
    )
  }
}

export default App
