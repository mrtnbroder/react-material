
import React, { PureComponent } from 'react'
import PT from 'prop-types'

import Card from '../Card'
import { Portal } from '../_internal/components'
import { Transition } from '../Transition'
import { elevationShape } from '../_internal/styles/elevations'
import { noop } from '../_internal/utils/utils'

import { getStyle } from './utils'
import transition from './menuTransition'

const horizontal = PT.oneOfType([
  PT.oneOf([ 'left', 'center', 'right' ]),
  PT.number,
]).isRequired

const vertical = PT.oneOfType([
  PT.oneOf([ 'top', 'center', 'bottom' ]),
  PT.number,
]).isRequired

const originShape = PT.shape({
  horizontal,
  vertical,
})

export class Popover extends PureComponent {

  static propTypes = {
    anchorEl: PT.object,
    anchorOrigin: originShape,
    children: PT.node,
    elevation: elevationShape,
    onRequestClose: PT.func.isRequired,
    open: PT.bool.isRequired,
    targetOrigin: originShape,
  }

  static defaultProps = {
    //
    // TODO: This should come from the Menu Component as a prop!
    //
    transition: transition(),
    width: 64 * 5,
    // ENDTODO
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  }

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
        {(open || show) && (
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
        )}
      </Portal>
    )
  }
}

export default Popover
