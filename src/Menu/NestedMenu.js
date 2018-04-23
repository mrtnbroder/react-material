// @flow
import * as React from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import MenuList from '../MenuList'
import MenuItem from '../MenuItem'
import MenuItemSpacer from '../MenuItemSpacer'
import Popover from '../Popover'

import { noop } from '../_internal/utils/utils'
import { MenuContext } from './MenuContext'

import type { Elevation } from '../_internal/styles/elevations'
import type { Origin } from '../_internal/utils/shapes'

type MenuItemTypes =
  | React.Element<typeof MenuItem>
  | React.Element<typeof MenuItemSpacer>

type MenuProps = {
  anchorEl?: React.Node,
  anchorOrigin?: Origin,
  isRoot: ?boolean,
  path: string,
  depth: number,
  children?: React.ChildrenArray<MenuItemTypes>,
  elevation: Elevation,
  menuRef?: () => void,
  open?: boolean,
  toggle: React.Element<*>,
  // onRequestClose: () => void,
  targetOrigin?: Origin,
}

const Menu = ({
  anchorEl,
  anchorOrigin,
  children,
  elevation,
  menuRef,
  open,
  toggle,
  depth,
  path,
  setParentAnchor,
  onToggleClick,
  targetOrigin,
  ...props
}: MenuProps) => (
  <MenuContext.Consumer>
    {({ path, map, onToggleClick }) => (
      <React.Fragment>
        {React.cloneElement(toggle, {
          onClick: onToggleClick,
        })}
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={anchorOrigin}
          elevation={elevation}
          // onRequestClose={this.onExited}
          open={open}
          targetOrigin={targetOrigin}>
          <MenuList innerRef={menuRef} {...props}>
            {React.Children.map(children, (child, index) => {
              if (child.type === Menu) {
                return React.cloneElement(child, {
                  ...child.props,
                  cascading: true,
                  elevation: elevation + 1,
                  isRoot: false,
                  path: `${path}/${index}`,
                  depth: depth + 1,
                  setParentAnchor,
                })
              }

              return child
            })}
          </MenuList>
        </Popover>
      </React.Fragment>
    )}
  </MenuContext.Consumer>
)

export default Menu
