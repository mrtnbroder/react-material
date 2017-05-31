
import React from 'react'
import styled from 'styled-components'

import { Input } from '../Input'

const shrink = (props) => props.shrink && `
  transform: translateY(10px) scale(0.75);
`

const focused = (props) => props.focused && `
  color: #304FFE;
`

const error = (props) => props.error && `
  color: #EF5350;
`

const disabled = (props) => props.disabled && `
  color: rgba(0, 0, 0, .42);
  cursor: not-allowed;
`

const asBox = (props) => props.box && `
  transform: translateY(20px) scale(1);
`

const RMTextFieldLabel = styled.label`
  top: 0;
  position: absolute;
  font: inherit;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.54);
  transform: translateY(30px) scale(1);
  transform-origin: left top;
  transition:
    transform .2s cubic-bezier(.4, 0, .2, 1),
    color .2s cubic-bezier(.4, 0, .2, 1);

  ${asBox}
  ${shrink}
  ${focused}
  ${error}
  ${disabled}
`

export const TextFieldLabel = RMTextFieldLabel
