import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Appbar, Icon, Typography } from 'react-material'

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
        <Icon fill="rgba(255, 255, 255, 1)" icon="menu" />
        <Typography type="subtitle1" color="white">
          <span>Components</span>
          <span>– Lists</span>
        </Typography>
        <Icon fill="rgba(255, 255, 255, 1)" icon="search" />
        <Icon fill="rgba(255, 255, 255, 1)" icon="more_vert" />
        <Link className="link" to="/">
          <Typography type="button">Home</Typography>
        </Link>
        <Link className="link" to="/cards">
          <Typography type="button">Cards</Typography>
        </Link>
        <Link className="link" to="/popovers">
          <Typography type="button">Popovers</Typography>
        </Link>
        <Link className="link" to="/typography">
          <Typography type="button">Typography</Typography>
        </Link>
        <Link className="link" to="/lists">
          <Typography type="button">Lists</Typography>
        </Link>
        <Link className="link" to="/text-fields">
          <Typography type="button">Text Fields</Typography>
        </Link>
        <Link className="link" to="/buttons">
          <Typography type="button">Buttons</Typography>
        </Link>
        <Link className="link" to="/menus">
          <Typography type="button">Menus</Typography>
        </Link>
      </Appbar>

      <Route exact path="/" component={Intro} />
      <Route path="/cards" component={Cards} />
      <Route path="/popovers" component={Popovers} />
      <Route path="/typography" component={TypographyRoute} />
      <Route path="/lists" component={Lists} />
      <Route path="/text-fields" component={TextFields} />
      <Route path="/buttons" component={Buttons} />
      <Route path="/menus" component={Menus} />
    </div>
  </Router>
)

export default App
