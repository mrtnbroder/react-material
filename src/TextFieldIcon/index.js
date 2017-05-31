
import React from 'react'
import styled from 'styled-components'

import { Input } from '../Input'

const asBox = (props) => props.box && `
  margin-right: -4px;
`

const RMTextFieldIcon = styled.span`
  flex: 0 0 auto;
  margin-top: -10px;
  margin-left: 8px;
  ${asBox}
`

export const TextFieldIcon = ({ icon, ...props }) => (
  <RMTextFieldIcon {...props}>
    <i className="material-icons md-dark">{icon}</i>
  </RMTextFieldIcon>
)
