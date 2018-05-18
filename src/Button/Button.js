// @flow

import * as React from 'react'
import styled from 'styled-components'

import { elevations } from '../_internal/styles/elevations'
import { linearOutSlowIn } from '../_internal/styles/transitions'
// import theme from '../_internal/styles/theme'

type Appearancea =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success'

type Appearance =
  | 'flat'
  | 'raised'
  | 'fab'

type Theme =
  | 'light'
  | 'dark'

type Type =
  | 'button'
  | 'submit'
  | 'reset'

type ButtonProps = {
  /**
   *  Appearance of the button
   */
  appearance: Appearance,
  /**
   *  Button theme
   */
  mode: Theme,
  /**
   *  Button takes 100% of it's available width
   */
  block: boolean,
  /**
   *  Button will be shown in a dense layout
   */
  dense: boolean,
  /**
   *  Button will be a regular button or form submission/reset handler.
   */
  type: Type,
  /**
   *  The button's children
   */
  children?: React.Node,
}

class Button extends React.PureComponent<ButtonProps> {

  static defaultProps = {
    appearance: 'raised',
    mode: 'light',
    block: false,
    dense: false,
    type: 'button',
  }

  render() {
    return (
      <StyledButton {...this.props}/>
    )
  }
}

const themeNamespace = '@rauzy-ui/rauzy-ui-button'

const getThemeStyles = (props, ctx) => {
  const theme = getThemeDefault(props)
  return theme[themeNamespace][props.mode][props.appearance]
}

const getThemeDefault = (props) => ({
  [themeNamespace]: {
    light: {
      raised: `
        color: var(--theme-on-secondary);
        background: var(--theme-secondary);
        &:focus {
          background: ${props.theme.primary[700]};
        }
        &:disabled {
          color: rgba(0, 0, 0, 0.26);
          background: rgba(0, 0, 0, 0.12);
        }
      `,
      flat: `
        background: transparent;
        &:focus {
          background: rgba(153, 153, 153, 0.40);
        }
        &:disabled {
          background: rgba(0, 0, 0, 0.26);
        }
      `
    },
    dark: {
      raised: `
        color: ${props.theme.white};
        background: ${props.theme.primary[500]};
        &:focus {
          background: ${props.theme.primary[700]};
        }
        &:disabled {
          color: rgba(255, 255, 255, 0.30);
          background: rgba(255, 255, 255, 0.12);
        }
      `,
      flat: `
        color: ${props.theme.white};
        &:focus {
          background: rgba(204, 204, 204, 0.25);
        }
        &:disabled {
          color: rgba(255, 255, 255, 0.30);
        }
      `
    },
  }
})

const getElevation = (props) => props.appearance === 'raised' ? `
  &:hover {
    box-shadow: ${elevations[2]};
  }
` : `
  box-shadow: none;
`

const getDense = (props) => props.dense ? `
  margin: 8px;
  line-height: 32px;
  font-size: 13px;
` : `
  font-size: 14px;
  margin: 6px 8px;
  line-height: 36px;
`

const StyledButton = styled.button`
  box-sizing: border-box;
  border-width: 0;
  outline: 0;
  padding: 0 8px;
  text-align: center;
  font-family: Roboto, 'sans-serif';
  vertical-align: middle;
  font-weight: 500;
  border-radius: 2px;
  text-transform: uppercase;
  min-width: 88px;
  cursor: pointer;
  transition:
    background-color .2s ${linearOutSlowIn},
    box-shadow .2s ${linearOutSlowIn};
  &:disabled {
    cursor: default;
  }
  ${getDense}
  ${getElevation}
  ${getThemeStyles}
`

export default Button
