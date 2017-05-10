
import React from 'react'
import styled from 'styled-components'

const RMListItemIcon = styled.div`
  margin-right: 16px;
  flex: 0 0 40px;
  display: inline-flex;
  align-items: center;
`

export const ListItemIcon = ({ children }) => (
  <RMListItemIcon>
    {children}
  </RMListItemIcon>
)
