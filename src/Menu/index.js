// @flow

import * as React from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import MenuList from '../MenuList'
import MenuItem from '../MenuItem'
import Popover from '../Popover'

// import MenuManager from './menuManager'

import type { Elevation } from '../_internal/styles/elevations'
import type { Origin } from '../_internal/utils/shapes'

type Props = {
  anchorEl?: React.Node,
  anchorOrigin?: Origin,
  children?: React.ChildrenArray<React.Element<typeof MenuItem>>,
  elevation: Elevation,
  menuRef?: () => void,
  onRequestClose: () => void,
  targetOrigin?: Origin,
}

class Menu extends React.PureComponent<Props> {

  static defaultProps = {
    elevation: 8,
    path: [],
    depth: [0],
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      anchorEl: null,
    }
  }
  handleRequestClose = () => {

  }

  handleMenuItemClick = (e, depth) => {
    this.setState({
      anchorEl: e.currentTarget,
    }, () => {
      this.props.setPath(depth)
    })
  }

  recursiveMap = (child, index) => {
    if (React.isValidElement(child)) {
      if (child.type === MenuItem) {
        const depth = this.props.depth.concat(index)

        return React.cloneElement(child, {
          onClick: this.handleMenuItemClick,
          depth,
          anchorEl: this.state.anchorEl,
          path: this.props.path,
          setPath: this.props.setPath,
        })
      }
    }

    return child
  }

  render() {
    const {
      anchorEl,
      anchorOrigin,
      children,
      elevation,
      menuRef,
      onRequestClose,
      open,
      path,
      setPath,
      depth,
      targetOrigin,
      ...props
    } = this.props

    return (
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        elevation={elevation}
        onRequestClose={this.onRequestClose}
        open={open}
        targetOrigin={targetOrigin}
        >
        <MenuList
          innerRef={menuRef}
          {...props}
          >
          {React.Children.map(children, this.recursiveMap)}
        </MenuList>
      </Popover>
    )
  }
}

export default Menu
