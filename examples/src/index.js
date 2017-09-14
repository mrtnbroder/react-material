
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from 'styled-components'
// import { ThemeProvider } from 'react-material'
import theme from 'react-material/es6/internal/styles/theme'

render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>,
  document.getElementById('root')
)
