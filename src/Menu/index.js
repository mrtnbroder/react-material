// @flow

import * as React from 'react'
import { findDOMNode } from 'react-dom'
import styled from 'styled-components'

import MenuList from '../MenuList'
import MenuItem from '../MenuItem'
import Popover from '../Popover'

import { noop } from '../_internal/utils/utils'
// import MenuManager from './menuManager'

import type { Elevation } from '../_internal/styles/elevations'
import type { Origin } from '../_internal/utils/shapes'

type Props = {
  anchorEl?: React.Node,
  anchorOrigin?: Origin,
  children?: React.ChildrenArray<React.Element<typeof MenuItem>>,
  elevation: Elevation,
  menuRef?: () => void,
  // onRequestClose: () => void,
  targetOrigin?: Origin,
}

class Menu extends React.PureComponent<Props> {

  static defaultProps = {
    elevation: 8,
    path: [],
    depth: [0],
    open: false,
    onExited: noop,
    childMounted: noop,
    childExited: noop,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      anchorEl: null,
      openChild: false,
      open: props.open,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.shouldMenuClose(nextProps)
    this.shouldMenuOpen(nextProps)
  }

  shouldMenuOpen = (nextProps) => {
    if (nextProps.open === true && this.state.open !== true) {
      this.setState({ open: true }, this.props.childMounted)
    }
  }

  shouldMenuClose = (nextProps) => {
    // when parent requests a close and we are not already in closed state
    // AND we do not have an openChild
    if (nextProps.open === false && this.state.open !== false) {
      if (!this.state.openChild) {
        this.setState({ open: false })
      }
    }
  }

  onExited = () => {
    // child closed, inform parent
    this.props.childExited()
  }

  childExited = () => {
    // our child exited, set state accordingly and check if this instance
    // also needs to close
    this.setState({
      openChild: false,
    }, () => {
      this.shouldMenuClose(this.props)
    })
  }

  childMounted = () => {
    // our child exited, set state accordingly and check if this instance
    // also needs to close
    this.setState({
      openChild: true,
    })
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
        const open = depth.reduce((_, value, index) => {
          // console.log('index: %d, path: %d, value: %d', index, this.props.path[index], value);
          return this.props.path[index] === value
        }, false)

        return React.cloneElement(child, {
          onClick: this.handleMenuItemClick,
          childExited: this.childExited,
          childMounted: this.childMounted,
          depth,
          open,
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
      open,
      path,
      setPath,
      depth,
      childExited,
      childMounted,
      onExited,
      targetOrigin,
      ...props
    } = this.props

    return (
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        elevation={elevation}
        onRequestClose={this.onExited}
        open={this.state.open}
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
