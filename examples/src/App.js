
import React, { Component } from 'react'
import styled from 'styled-components'

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
  SelectField,
  Paper,
} from 'react-material'

import { FirstLevelMenu } from './FirstLevelMenu'

class App extends Component {
  render() {
    return (
      <div className='grid'>
        <Paper style={{ padding: 24 }}>
          <FirstLevelMenu/>
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
        </Paper>
        <Paper style={{ padding: 24 }}>
          <TextField
            box
            id='idle-empty-box'
            placeholder='Placeholder'
            />
          <TextField
            box
            id='hover-box'
            label='Label'
            helpText='Helper text'
            />
          <TextField
            box
            id='placeholder-box'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            />
          <TextField
            box
            id='focus-box'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            defaultValue='Input'
            />
          <TextField
            box
            error='Error: Text explaining the error'
            id='error-box'
            label='Label'
            placeholder='Placeholder'
            helpText='Helper text'
            defaultValue='Input'
            minLength='10'
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
          <div style={{
            display: 'inline-grid',
            gridTemplateColumns: '180px 100px 100px',
            gridGap: 24
          }}>
            <TextField
              box
              id='city'
              label='City'
              defaultValue='New York'
              />
            <SelectField
              box
              icon='arrow_drop_down'
              id='state'
              label='State'
              defaultValue='NY'
              >
              {
                // TODO: Menu here? or as prop?
              }
            </SelectField>
            <TextField
              box
              id='zip'
              label='Zip Code'
              defaultValue='10011'
              />
          </div>
        </Paper>
        <Paper style={{ padding: '24px 0' }}>
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
                secondary='Personal Personal Personal Personal Personal Personal Personal Personal Personal'
                />
              <ListItemEnd>
                <i className="material-icons md-18 md-dark">info</i>
              </ListItemEnd>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <i className="material-icons md-24 md-dark">backup</i>
              </ListItemIcon>
              <ListItemText
                primary='Ali Conners'
                secondary={[
                  <span>Brunch this weekend?</span>,
                  <br/>,
                  <span>I'll be in your neighborhood doing errands</span>
                ]}
                />
              <ListItemEnd>
                <i className="material-icons md-24 md-dark">star_border</i>
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
