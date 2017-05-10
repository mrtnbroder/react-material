
import React, { PureComponent } from 'react'
import PT from 'prop-types'

import { Paper } from '../Paper'
import { Portal } from '../Portal'

import {
  getOffsetLeft,
  getOffsetTop,
  getTransformOriginValue,
} from './utils'
import {
  originShape,
} from './propTypes'

const getAnchorOffset = (anchorElProp, anchorOrigin, targetOrigin) => {
  const anchorEl = anchorElProp || document.body
  const anchorRect = anchorEl.getBoundingClientRect()

  return {
    top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
    left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal),
  }
}

const getStyle = (anchorEl, anchorOrigin, targetOrigin) => {
  const offset = getAnchorOffset(anchorEl, anchorOrigin, targetOrigin)

  return {
    width: 64 * 5,
    position: 'fixed',
    ...offset,
  }
}

export class Popover extends PureComponent {

  render() {
    const {
      anchorEl,
      anchorOrigin: anchorOriginProp,
      targetOrigin: targetOriginProp,
      onRequestClose,
      children,
      open,
    } = this.props

    const style = getStyle(anchorEl, anchorOriginProp, targetOriginProp)

    return (
      <Portal open={open}>
        <Paper style={style}>
          {children}
        </Paper>
      </Portal>
    )
  }
}

Popover.propTypes = {
  anchorEl: PT.object,
  anchorOrigin: originShape,
  children: PT.node,
  onRequestClose: PT.func.isRequired,
  open: PT.bool.isRequired,
  targetOrigin: originShape,
}

Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
}

export default Popover
