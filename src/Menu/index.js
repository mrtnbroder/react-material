
import React from 'react'
import styled from 'styled-components'

import { MenuList } from '../MenuList'
import { Popover } from '../Popover'

import { elevationType } from '../styles/elevations'

const RMMenu = styled.div`
  padding: 16px 0;
`

export const Menu = ({
  anchorEl,
  anchorOrigin,
  children,
  elevation,
  onRequestClose,
  open,
  targetOrigin,
  ...props
}) => (
  <Popover
    anchorEl={anchorEl}
    anchorOrigin={anchorOrigin}
    elevation={elevation}
    onRequestClose={onRequestClose}
    open={open}
    targetOrigin={targetOrigin}
    >
    <MenuList {...props}>
      {children}
    </MenuList>
  </Popover>
)

Menu.propTypes = {
  elevation: elevationType,
}

Menu.defaultProps = {
  elevation: 8,
}
