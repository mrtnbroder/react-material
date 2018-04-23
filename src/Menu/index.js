// @flow
import * as React from 'react'
import * as R from 'ramda'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import MenuList from '../MenuList'
import MenuItem from '../MenuItem'
import MenuItemSpacer from '../MenuItemSpacer'
import Popover from '../Popover'

import { noop } from '../_internal/utils/utils'
// import MenuManager from './menuManager'

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

export class MenuManager extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      map: {},
      path: [],
    }
  }

  onToggleClick = (event, index, depth) => {
    const { path, map } = this.state
    if (depth === path.length || depth === path.length - 1) {
      console.log('same')
      this.setState({
        map: R.assoc(depth, event.currentTarget, map),
        path: path[depth] ? R.update(depth, index, path) : R.concat(path, [index]),
      })
    } else if (depth < path.length) {
      let len = path.length - depth
      console.log('wat', len)
      const doIt = () => {
        const nextPath = R.dropLast(1, this.state.path)
        this.setState({
          map: R.assoc(depth, event.currentTarget, this.state.map),
          path: R.update(depth, index, nextPath),
        })
        if (len !== 0) {
          len--
          setTimeout(doIt, 1050)
        }
      }
      setTimeout(doIt, 1050)
    } else if (depth > path.length) {
      console.log('higher')
      this.setState({
        map: R.assoc(depth, event.currentTarget, map),
        path: R.update(depth, index, path),
      })
    }
  }

  render() {
    return React.cloneElement(this.props.children, {
      ...this.state,
      cascading: true,
      onToggleClick: this.onToggleClick,
    })
  }
}

class Menu extends React.PureComponent<MenuProps> {

  onToggleClick = (e) => {
    this.props.onToggleClick(e, this.props.index, this.props.depth)
  }

  render() {
    const {
      // anchorEl,
      cascading,
      anchorOrigin,
      children,
      elevation,
      menuRef,
      map,
      toggle,
      depth,
      path,
      index,
      onToggleClick,
      targetOrigin,
      ...props
    } = this.props
    const open = path[depth] === index
    const anchorEl = open ? map[depth] : null
    // console.log('depth, index', path, depth, index)
    // console.log('open, anchorEl', open, anchorEl)
    console.log('path', path)
    console.log('depth', depth)

    return (
      <React.Fragment>
        {React.cloneElement(toggle, {
          onClick: this.onToggleClick,
        })}
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={anchorOrigin}
          elevation={elevation}
          // onRequestClose={this.onExited}
          open={open}
          targetOrigin={targetOrigin}>
          <MenuList innerRef={menuRef} {...props}>
            {React.Children.map(children, (child, idx) => {
              if (child.type === Menu) {
                return React.cloneElement(child, {
                  ...child.props,
                  cascading,
                  depth: depth + 1,
                  elevation: elevation + 1,
                  map,
                  onToggleClick,
                  path,
                  index: idx,
                })
              }

              return child
            })}
          </MenuList>
        </Popover>
      </React.Fragment>
    )
  }
}

Menu.defaultProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
  elevation: 8,
  index: 0,
  depth: 0,
}

export default Menu
