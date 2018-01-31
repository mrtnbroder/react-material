
import * as React from 'react'

import '../../App.css'

import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemEnd,
  ListItemIcon,
  ListItemText,
  Icon,
  Card,
} from 'react-material'

class App extends React.Component {
  render() {
    return (
      <Card className='Card Card--center'>
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
              <Icon fill='rgba(255, 255, 255, 1)' icon='cloud_queue'/>
            </ListItemAvatar>
            <ListItemText
              primary='Work'
              secondary='Jan 28, 2016'
              />
          </ListItem>
          <Divider inset/>
          <ListItem>
            <ListItemIcon icon='phone'/>
            <ListItemText
              primary='(650) 555-1234'
              secondary='Work'
              />
          </ListItem>
          <ListItem>
            <ListItemIcon icon='mail'/>
            <ListItemText
              primary='aliconners@example.com'
              secondary='Personal'
              />
          </ListItem>
          <Divider inset/>
          <ListItem>
            <ListItemIcon icon='backup'/>
            <ListItemText
              primary='aliconners@example.com'
              secondary='Personal Personal Personal Personal Personal Personal Personal Personal Personal'
              />
            <Icon size='18px' icon='info'/>
          </ListItem>
          <ListItem>
            <ListItemIcon icon='backup'/>
            <ListItemText
              primary='Ali Conners'
              secondary={[
                <span key='1'>Brunch this weekend?</span>,
                <br key='2'/>,
                <span key='3'>I'll be in your neighborhood doing errands</span>
              ]}
              />
            <Icon icon='star_border'/>
          </ListItem>
          <ListItem>
            <ListItemIcon fill='#0E9C57' icon='check_box'/>
            <ListItemText
              primary='List Item selected'
              />
            <Icon icon='comment'/>
          </ListItem>
          <ListItem>
            <ListItemIcon icon='format_bold'/>
            <ListItemText
              primary='Bold'
              />
            <ListItemEnd>
              ⌘B
            </ListItemEnd>
          </ListItem>
        </List>
      </Card>
    )
  }
}

export default App
