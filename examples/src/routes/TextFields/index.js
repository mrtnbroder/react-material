
import * as React from 'react'

import '../../App.css'

import {
  TextField,
  Card,
} from 'react-material'

import StateSelect from './StateSelect'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card className='Card Card--center'>
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
      </React.Fragment>
    )
  }
}

export default App
