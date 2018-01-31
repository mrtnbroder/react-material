// @flow

import * as React from 'react'
import styled from 'styled-components'

import { elevations } from '../_internal/styles/elevations'
import { linearOutSlowIn } from '../_internal/styles/transitions'
import theme from '../_internal/styles/theme'

const getColor = (props) => props.flat ? `
  color: ${props.theme.background.button};
  background-color: transparent;

  &:focus {
    background-color: ${props.theme.background.buttonFlatHover}
  }
  &:focus:active {
    background-color: ${props.theme.background.buttonFlatHover}
  }

` : `
  color: ${props.theme.text.button};
  background-color: ${props.theme.background.button};
`
const getElevation = (props) => !props.flat && `
  box-shadow: ${elevations[2]};

  &:focus {
    box-shadow: ${elevations[6]};
  }
  &:focus:active {
    box-shadow: ${elevations[8]};
  }
`
const getDense = (props) => props.dense && `
  margin: 8px;
  line-height: 32px;
  font-size: 13px;
`

const hover = (props) => props.flat ? `
  &:hover {
    background-color: ${props.theme.background.buttonFlatHover};
  }
` : `
  &:hover {
    background-color: ${props.theme.background.buttonHover};
  }
`

class Button extends React.Component {
  render() {
    const {
      component: Component,
      getRef,
      flat,
      dense,
      theme,
      ...props
    } = this.props

    return (
      <Component ref={getRef} {...props}/>
    )
  }
}

const RMButton = styled(Button)`
  border: 0;
  outline: 0;
  margin: 6px 8px;
  background: none;
  padding: 0 8px;
  line-height: 36px;
  text-align: center;
  font-family: Roboto, 'sans-serif';
  vertical-align: middle;
  font-size: 14px;
  font-weight: 500;
  border-radius: 2px;
  text-transform: uppercase;
  min-width: 88px;
  cursor: pointer;
  position: relative;
  transition:
    background-color .2s ${linearOutSlowIn},
    box-shadow .2s ${linearOutSlowIn};

  ${getColor};
  ${getElevation};
  ${getDense};
  ${hover};
`

RMButton.defaultProps = {
  component: 'button',
  flat: false,
  dense: false,
  theme,
}

export default RMButton
