
import * as React from 'react'
import styled from 'styled-components'

const RMMenuItemSpacer = styled.span`
  flex-direction: row;
  display: inline-flex;
  flex: 0 0 40px;
`

export const MenuItemSpacer = ({ children }) => (
  <RMMenuItemSpacer>
    {children}
  </RMMenuItemSpacer>
)
