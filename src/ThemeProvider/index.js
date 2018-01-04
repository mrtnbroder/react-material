/**
 *  ThemeProvider
 *
 *  For the app to work, you **must** wrap your entire application into
 *  this ThemeProvider Component.
 *  It manages the colors and typography of the entire application.
 *
 *  By default, the light version is used.
 */

import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../_internal/styles/theme'

ThemeProvider.defaultProps = {
  theme
}

export default ThemeProvider
