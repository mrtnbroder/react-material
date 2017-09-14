
import React, { PureComponent } from 'react'
import PT from 'prop-types'

import Typography from '../Typography'
import theme from '../internal/styles/theme'

class ThemeProvider extends PureComponent {
  getChildContext() {
    return { theme: this.props.theme }
  }
  render() {
    return this.props.children
  }
}

ThemeProvider.defaultProps = {
  theme,
}

ThemeProvider.propTypes = {
  theme: PT.object,
}

ThemeProvider.childContextTypes = {
  theme: PT.object,
}
ThemeProvider.contextTypes = {
  theme: PT.object,
}

export default ThemeProvider
