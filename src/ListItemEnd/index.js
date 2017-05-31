
import React from 'react'
import styled from 'styled-components'

const RMListItemEnd = styled.div`
  margin-right: 16px;
  margin-left: auto;
  margin-top: 12px;
  align-self: flex-start;
`

export const ListItemEnd = ({ children }) => (
  <RMListItemEnd>
    {children}
  </RMListItemEnd>
)
