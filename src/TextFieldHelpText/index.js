
import React from 'react'
import styled from 'styled-components'

import Input from '../Input'

const error = (props) => props.error && `
  color: ${props.theme.text.error};
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
  color: ${(props) => props.theme.text.primary};
  ${asBox}
  ${error}
`

export const TextFieldHelpText = RMTextFieldHelpText
