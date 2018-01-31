
import React from 'react'
import { render } from 'react-dom'
import App from './Routes'
import './index.css'
import { ThemeProvider } from 'react-material'

render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
)
