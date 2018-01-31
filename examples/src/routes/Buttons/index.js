
import * as React from 'react'

import '../../App.css'

import {
  Button,
  Card,
} from 'react-material'

class App extends React.Component {
  render() {
    return (
      <Card className='Card Card--center'>
        <article>
          <header>
            Flat Buttons
          </header>
          <main>
            <Button flat>Default</Button>
            <Button flat dense>Default</Button>
            <Button flat>Primary</Button>
            <Button flat dense>Primary</Button>
            <Button flat>Secondary</Button>
            <Button flat dense>Secondary</Button>
          </main>
        </article>
        <article>
          <header>
            Raised Buttons
          </header>
          <main>
            <Button>Default</Button>
            <Button dense>Default</Button>
            <Button>Primary</Button>
            <Button dense>Primary</Button>
            <Button>Secondary</Button>
            <Button dense>Secondary</Button>
          </main>
        </article>
      </Card>
    )
  }
}

export default App
