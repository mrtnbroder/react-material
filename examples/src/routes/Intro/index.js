
import * as React from 'react'

import '../../App.css'

import {
  Card,
  Typography,
} from 'react-material'

class App extends React.Component {
  render() {
    return (
      <Card className='Card Card--center'>
        <Typography type='headline4'>Welcome!</Typography>
      </Card>
    )
  }
}

export default App
