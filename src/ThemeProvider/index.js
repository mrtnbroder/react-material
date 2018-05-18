/**
 *  ThemeProvider
 *
 *  For the app to work, you **must** wrap your entire application into
 *  this ThemeProvider Component.
 *  It manages the colors and typography of the entire application.
 *
 *  By default, the light version is used.
 */

import * as React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'

import * as palette from '../_internal/styles/colors'
import { up } from '../_internal/styles/breakpoints'
import theme from '../_internal/styles/theme'

ThemeProvider.defaultProps = {
  theme,
}

export default ThemeProvider

injectGlobal`
  :root {
    // theme
    --theme-primary: ${palette.indigo[500]};
    --theme-on-primary: ${palette.white};
    --theme-secondary: ${palette.pink[600]};
    --theme-on-secondary: ${palette.white};
    --theme-background: ${palette.white};
    --theme-surface: ${palette.white};
    --theme-on-surface: ${palette.black};
    // dark
    --theme-text-colors-dark-primary: ${palette.darkText.primary};
    --theme-text-colors-dark-secondary: ${palette.darkText.secondary};
    --theme-text-colors-dark-hint: ${palette.darkText.hint};
    --theme-text-colors-dark-disabled: ${palette.darkText.disabled};
    --theme-text-colors-dark-icon: ${palette.darkText.icon};
    // light
    --theme-text-colors-light-primary: ${palette.lightText.primary};
    --theme-text-colors-light-secondary: ${palette.lightText.secondary};
    --theme-text-colors-light-hint: ${palette.lightText.hint};
    --theme-text-colors-light-disabled: ${palette.lightText.disabled};
    --theme-text-colors-light-icon: ${palette.lightText.icon};
    // Text on "theme" background
    --text-primary-on-background: var(--theme-text-colors-dark-primary);
    --text-secondary-on-background: var(--theme-text-colors-dark-secondary);
    --text-hint-on-background: var(--theme-text-colors-dark-hint);
    --text-disabled-on-background: var(--theme-text-colors-dark-disabled);
    --text-icon-on-background: var(--theme-text-colors-dark-icon);
    // Text on "light" background
    --text-primary-on-light: var(--theme-text-colors-light-primary);
    --text-secondary-on-light: var(--theme-text-colors-dalightecondary);
    --text-hint-on-light: var(--theme-text-cololightark-hint);
    --text-disabled-on-light: var(--theme-text-colors-dlightdisabled);
    --text-icon-on-light: var(--theme-text-cololightark-icon);
    // Text on "dark" background
    --text-primary-on-dark: var(--theme-text-colors-dark-primary);
    --text-secondary-on-dark: var(--theme-text-colors-dark-secondary);
    --text-hint-on-dark: var(--theme-text-colors-dark-hint);
    --text-disabled-on-dark: var(--theme-text-colors-dark-disabled);
    --text-icon-on-dark: var(--theme-text-colors-dark-icon);
  }

  body {
    ${'' /* TODO: REMOVE THIS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    background-color: var(--theme-background);
    padding-top: 56px;
  }

  @media screen and (orientation: landscape) {
    body {
      padding-top: 48px;
    }
  }
  ${up('sm')} {
    body {
      padding-top: 64px;
    }
  }
`
