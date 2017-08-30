
import React from 'react'
import styled from 'styled-components'

import MenuList from '../MenuList'
import { Popover } from '../Popover'

import { elevationShape } from '../internal/styles/elevations'

import menuManager from './menuManager'

const Menu = ({
  anchorEl,
  anchorOrigin,
  children,
  elevation,
  menuRef,
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
    <MenuList {...props} innerRef={menuRef}>
      {children}
    </MenuList>
  </Popover>
)

Menu.propTypes = {
  elevation: elevationShape,
}

Menu.defaultProps = {
  elevation: 8,
}

export default menuManager(Menu)
