
import * as React from 'react'

import '../../App.css'

import {
  Typography,
  Card,
} from 'react-material'

class App extends React.Component {
  render() {
    return (
      <Card className='Card Card--center'>
        <Typography type='display4'>Display4</Typography>
        <Typography type='display3'>Display3</Typography>
        <Typography type='display2'>Display2</Typography>
        <Typography type='display1'>Display1</Typography>
        <Typography type='headline'>Headline</Typography>
        <Typography type='title'>Title</Typography>
        <Typography type='subhead2'>Subhead2</Typography>
        <Typography type='subhead1'>Subhead1</Typography>
        <Typography type='body2'>Body2</Typography>
        <Typography type='body1'>Body1</Typography>
        <Typography type='caption'>Caption</Typography>
        <Typography type='button'>Button</Typography>
      </Card>
    )
  }
}

export default App
