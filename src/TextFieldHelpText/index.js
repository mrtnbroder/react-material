
import React from 'react'
import styled from 'styled-components'

import { Input } from '../Input'

const error = (props) => props.error && `
  color: #EF5350;
`

const asBox = (props) => props.box && `
  padding-left: 16px;
  padding-right: 16px;
`

const RMTextFieldHelpText = styled.span`
  font: inherit;
  font-size: 12px;
  line-height: 16px;
  display: block;
  color: rgba(0, 0, 0, 0.54);

  ${asBox}
  ${error}
`

export const TextFieldHelpText = RMTextFieldHelpText
