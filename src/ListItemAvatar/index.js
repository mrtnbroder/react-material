
import React from 'react'
import styled from 'styled-components'

const RMListItemAvatar = styled.div`
  margin-right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .26);
`

export const ListItemAvatar = ({ children }) => (
  <RMListItemAvatar>
    {children}
  </RMListItemAvatar>
)
