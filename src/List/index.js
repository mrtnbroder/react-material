
import React from 'react'
import styled from 'styled-components'

const RMList = styled.div`
  padding: 8px 0;
`

export const List = ({ children, ...props }) => (
  <RMList {...props}>
    {children}
  </RMList>
)
