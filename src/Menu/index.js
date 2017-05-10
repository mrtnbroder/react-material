
import React from 'react'
import styled from 'styled-components'

import { MenuList } from '../MenuList'
import { Popover } from '../Popover'

const RMMenu = styled.div`
  padding: 16px 0;
`

export const Menu = ({
  anchorEl,
  anchorOrigin,
  children,
  onRequestClose,
  open,
  targetOrigin,
  ...props
}) => (
  <Popover
    anchorEl={anchorEl}
    anchorOrigin={anchorOrigin}
    onRequestClose={onRequestClose}
    open={open}
    targetOrigin={targetOrigin}
    >
    <MenuList {...props}>
      {children}
    </MenuList>
  </Popover>
)
