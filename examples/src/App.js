
import * as React from 'react'

import './App.css'

import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemEnd,
  ListItemIcon,
  ListItemText,
  TextField,
  Appbar,
  Icon,
  Typography,
  // SelectField,
  Card,
} from 'react-material'

import { FirstLevelMenu } from './FirstLevelMenu'
import StateSelect from './StateSelect'
import TypographyCard from './TypographyCard'

class App extends React.Component {
  render() {
    return (
      <div className='appbar'>
        <Appbar>
          <Icon fill='rgba(255, 255, 255, 1)' icon='menu'/>
          <Typography type='title' color='white'>
            <span>Components</span>
            <span>– Lists</span>
          </Typography>
          <Icon fill='rgba(255, 255, 255, 1)' icon='search'/>
          <Icon fill='rgba(255, 255, 255, 1)' icon='more_vert'/>
        </Appbar>
        <Card className='Card Card--center'>
          <FirstLevelMenu/>
          <StateSelect/>
          <TextField
            id='idle-empty'
            placeholder='Placeholder'
            />
          <TextField
            id='hover'
            label='Label'
            helpText='Helper text'
            />
          <TextField
            id='placeholder'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            />
          <TextField
            id='focus'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            defaultValue='Input'
            />
          <TextField
            error='Error: Text explaining the error'
            id='error'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
            />
          <TextField
            defaultValue='Input'
            helpText='Helper text'
            icon='visibility'
            id='icon'
            label='Label'
            minLength='10'
            placeholder='Placeholder'
            />
          <TextField
            disabled
            id='disabled'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
            />
          <TextField
            prefix='$'
            id='prefix'
            label='Prefix'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
            />
          <TextField
            suffix='@gmail.com'
            id='suffix'
            label='Suffix'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
            />
        </Card>
        <TypographyCard/>
        <Card className='Card Card--center'>
          <TextField
            box
            id='idle-empty-box'
            label='Idle & Empty'
            helpText='Helper text'
            />
          <TextField
            box
            id='hover-box'
            label='Hover'
            helpText='Helper text'
            />
          <TextField
            box
            id='press-box'
            label='Press'
            placeholder='Placeholder'
            helpText='Helper text'
            />
          <TextField
            box
            id='focus-box'
            label='Focus'
            placeholder='Placeholder'
            helpText='Helper text'
            defaultValue='Input'
            />
          <TextField
            box
            id='idle-filled-box'
            label='Idle & Filled'
            helpText='Helper text'
            defaultValue='Input'
            />
          <TextField
            box
            error='Error message'
            id='error-box'
            label='Error'
            defaultValue='Input'
            minLength='10'
            />
          <TextField
            box
            disabled
            id='disabled-box'
            label='Disabled'
            defaultValue='Input'
            />
          <TextField
            box
            icon='arrow_drop_down'
            id='icon-box'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
            />
          <TextField
            box
            prefix='€'
            id='prefix-box'
            label='Prefix'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
            />
          <TextField
            box
            suffix='lbs'
            id='suffix-box'
            label='Suffix'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
            />
        </Card>
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
      </div>
    )
  }
}

export default App
