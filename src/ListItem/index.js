
import React from 'react'
import styled from 'styled-components'

const RMListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 48px;
  padding: 12px 16px;
`

export const ListItem = ({ children, ...props }) => (
  <RMListItem {...props}>
    {children}
  </RMListItem>
)
