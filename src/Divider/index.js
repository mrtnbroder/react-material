
import React from 'react'
import styled from 'styled-components'

const RMDivider = styled.hr`
  border: none;
  border-bottom: .5px solid rgba(0, 0, 0, .12);
  margin: ${props => props.nested ? '7.5px 0 8px' : props.inset ? '7.5px 0 8px 72px' : 0}
`

export const Divider = RMDivider
