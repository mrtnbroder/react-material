
import color from 'color'
import * as R from 'ramda'

import {
  darkText,
  lightText,
  darkIcons,
  lightIcons,
  red,
  grey,
  black,
  white,
  indigo,
  pink,
} from './colors'

const light = {
  icon: darkIcons,
  text: {
    ...darkText,
    display4: darkText.secondary,
    display3: darkText.secondary,
    display2: darkText.secondary,
    display1: darkText.secondary,
    headline: darkText.primary,
    title: darkText.primary,
    subhead2: darkText.primary,
    subhead1: darkText.primary,
    body2: darkText.primary,
    body1: darkText.primary,
    caption: darkText.secondary,
    button: lightText.primary,
    error: red['A400'],
    // Text Fields
    // Source: https://material.io/guidelines/components/text-fields.html#text-fields-states
    //
    // Placeholder text
    // Light theme: 42% black (3:1 contrast ratio)
    placeholder: color(black).alpha(0.42).string(),
    // Helper text
    // Light theme: 54% black (4.5:1 contrast ratio)
    helper: darkText.secondary,
    // Input text
    // Light theme: 87% black (15:1 contrast ratio)
    input: darkText.primary,
  },
  background: {
    statusBar: grey[300],
    appBar: grey[100],
    body: grey[50],
    card: white,
    textFieldUnderline: color(black).alpha(0.42).string(),
    button: darkText.primary,
    buttonHover: color(black).darken(0.12).string(),
    buttonFlatHover: color(black).alpha(0.12).string(),
  },
}

const dark = {
  icon: lightIcons,
  text: {
    ...lightText,
    display4: lightText.primary,
    display3: lightText.primary,
    display2: lightText.primary,
    display1: lightText.primary,
    headline: lightText.primary,
    title: lightText.primary,
    subhead2: lightText.primary,
    subhead1: lightText.primary,
    body2: lightText.primary,
    body1: lightText.primary,
    caption: lightText.secondary,
    button: darkText.primary,
    error: red['A400'],
    // Text Fields
    // Source: https://material.io/guidelines/components/text-fields.html#text-fields-states
    //
    // Placeholder text
    // Dark theme: 50% white (4.5:1 contrast ratio)
    placeholder: lightText.disabled,
    // Helper text
    // Dark theme: 70% white (7:1 contrast ratio)
    helper: lightText.secondary,
    // Input text
    // Dark theme: 100% white (13:1 contrast ratio)
    input: lightText.primary,
  },
  background: {
    statusBar: black,
    appBar: grey[900],
    body: '#303030',
    card: grey[800],
    textFieldUnderline: color(white).alpha(0.7).string(),
    button: lightText.primary,
    buttonHover: color(white).darken(0.12).string(),
    buttonFlatHover: color(white).alpha(0.12).string(),
  },
}

export const themeBuilder = (primary, secondary, defaultTheme) => R.mergeDeepRight(defaultTheme, {
  primary,
  secondary,
  grey,
  black,
  white,
  background: {
    appBar: primary[600],
    button: secondary['A400'],
    buttonHover: color(secondary['A400']).darken(0.12).string(),
    buttonFlatHover: color(secondary['A400']).alpha(0.12).string(),
  },
  text: {
    // Button
    // Source: https://material.io/guidelines/components/text-fields.html#text-fields-states
    // Label text
    // Light theme: 87% primary color (Dark A700)
    // Dark theme: 100% primary color (Light A200)
    label: color(primary['A700']).alpha(0.87).string(),
    // Light theme: 87% primary color (Dark A700)
    // Dark theme: 100% primary color (Light A200)
    labelFocused: color(primary['A700']).alpha(0.87).string(),
  }
})

export default themeBuilder(indigo, pink, light)
