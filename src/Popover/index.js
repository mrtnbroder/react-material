
import React, { PureComponent } from 'react'
import PT from 'prop-types'

import Card from '../Card'
import { Portal } from '../internal/Portal'
import { Transition } from '../Transition'
import { elevationShape } from '../internal/styles/elevations'
import { noop } from '../internal/utils/utils'

import { getStyle } from './utils'
import { originShape } from './propTypes'
import transition from './menuTransition'

export class Popover extends PureComponent {

  state = {
    show: false,
  }

  willEnter = (targetEl, rAF, onDone) => {
    const { anchorEl, anchorOrigin, targetOrigin } = this.props

    if (targetEl instanceof HTMLElement) {
      const style = getStyle([
        [anchorEl, anchorOrigin],
        [targetEl, targetOrigin],
      ])

      this.setState({ show: true, style }, onDone)
    }
  }

  didFinish = () => this.setState({ show: false })

  render() {
    const {
      children,
      elevation,
      open,
      transition,
    } = this.props
    const {
      show,
      style,
    } = this.state

    return (
      <Portal
        // stay open until didLeave gets called from <Transition/>
        // this is required to ensure the animation can finish before
        // we unmount the node
        open={open || show}
        >
        <Transition
          in={open}
          {...transition}
          willEnter={this.willEnter}
          didFinish={this.didFinish}
          >
          <Card
            style={{ zIndex: 8, width: this.props.width, ...style }}
            elevation={elevation}
            >
            {children}
          </Card>
        </Transition>
      </Portal>
    )
  }
}

Popover.propTypes = {
  anchorEl: PT.object,
  anchorOrigin: originShape,
  children: PT.node,
  elevation: elevationShape,
  onRequestClose: PT.func.isRequired,
  open: PT.bool.isRequired,
  targetOrigin: originShape,
}


Popover.defaultProps = {
  //
  // TODO: This should come from the Menu Component as a prop!
  //
  transition: transition(),
  width: 64 * 5,
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
