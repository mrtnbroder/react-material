
import React from 'react'
import styled from 'styled-components'

const RMListItemEnd = styled.div`
  margin-right: 16px;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const ListItemEnd = ({ children }) => (
  <RMListItemEnd>
    {children}
  </RMListItemEnd>
)
