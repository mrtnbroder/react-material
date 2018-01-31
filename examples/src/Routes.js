import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
  Appbar,
  Icon,
  Typography,
} from 'react-material'

import Intro from './routes/Intro'
import Cards from './routes/Cards'
import Popovers from './routes/Popovers'
import TypographyRoute from './routes/Typography'
import Lists from './routes/Lists'
import TextFields from './routes/TextFields'
import Buttons from './routes/Buttons'
import Menus from './routes/Menus'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Appbar>
        <Icon fill='rgba(255, 255, 255, 1)' icon='menu'/>
        <Typography type='title' color='white'>
          <span>Components</span>
          <span>– Lists</span>
        </Typography>
        <Icon fill='rgba(255, 255, 255, 1)' icon='search'/>
        <Icon fill='rgba(255, 255, 255, 1)' icon='more_vert'/>
        <Link to='/'>
          <Typography type='body1' color='white'>
            Home
          </Typography>
        </Link>
        <Link to='/cards'>
          <Typography type='body1' color='white'>
            Cards
          </Typography>
        </Link>
        <Link to='/popovers'>
          <Typography type='body1' color='white'>
            Popovers
          </Typography>
        </Link>
        <Link to='/typography'>
          <Typography type='body1' color='white'>
            Typography
          </Typography>
        </Link>
        <Link to='/lists'>
          <Typography type='body1' color='white'>
            Lists
          </Typography>
        </Link>
        <Link to='/text-fields'>
          <Typography type='body1' color='white'>
            Text Fields
          </Typography>
        </Link>
        <Link to='/buttons'>
          <Typography type='body1' color='white'>
            Buttons
          </Typography>
        </Link>
        <Link to='/menus'>
          <Typography type='body1' color='white'>
            Menus
          </Typography>
        </Link>
      </Appbar>

      <Route exact path='/' component={Intro}/>
      <Route path='/cards' component={Cards}/>
      <Route path='/popovers' component={Popovers}/>
      <Route path='/typography' component={TypographyRoute}/>
      <Route path='/lists' component={Lists}/>
      <Route path='/text-fields' component={TextFields}/>
      <Route path='/buttons' component={Buttons}/>
      <Route path='/menus' component={Menus}/>
    </div>
  </Router>
)

export default App
