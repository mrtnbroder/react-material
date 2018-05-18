
import * as React from 'react'
import styled from 'styled-components'

import Input from '../Input'
import { fastOutSlowIn } from '../_internal/styles/transitions'

const box = (props) => props.box && `
  transform: translateY(20px) scale(1);
`

const shrink = (props) => props.shrink && `
  transform: translateY(10px) scale(0.75);
`

const focused = (props) => props.focused && `
  color: ${props.theme.text.labelFocused};
`

const error = (props) => props.error && `
  color: ${props.theme.text.error};
`

const disabled = (props) => props.disabled && `
  color: ${props.theme.text.disabled};
`

const RMTextFieldLabel = styled.label`
  color: ${(props) => props.theme.text.secondary};
  font: inherit;
  line-height: 16px;
  position: absolute;
  top: 0;
  cursor: inherit;
  transform: translateY(30px) scale(1);
  transform-origin: left top;
  transition:
    transform 0.2s ${fastOutSlowIn},
    color 0.2s ${fastOutSlowIn};
  ${box}
  ${shrink}
  ${focused}
  ${error}
  ${disabled}
`

export const TextFieldLabel = RMTextFieldLabel
