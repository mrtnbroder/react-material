
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
            <Button appearance='flat'>Default</Button>
            <Button appearance='flat'>Primary</Button>
            <Button appearance='flat'>Secondary</Button>
            <Button appearance='flat'>Danger</Button>
            <Button appearance='flat'>Warning</Button>
            <Button appearance='flat'>Info</Button>
            <Button appearance='flat' disabled>Disabled</Button>
            <Button appearance='flat' dense>Dense</Button>
          </main>
        </article>
        <article>
          <header>
            Raised Buttons
          </header>
          <main>
            <Button>Default</Button>
            <Button>Primary</Button>
            <Button>Secondary</Button>
            <Button>Danger</Button>
            <Button>Warning</Button>
            <Button>Info</Button>
            <Button disabled>Disabled</Button>
            <Button dense>Dense</Button>
          </main>
        </article>
      </Card>
    )
  }
}

export default App
