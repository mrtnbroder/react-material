
import React, { PureComponent } from 'react'
import PT from 'prop-types'

import rAF from 'dom-helpers/util/requestAnimationFrame'

import { Paper } from '../Paper'
// import { Modal } from '../Modal'
import { Portal } from '../Portal'
import { Transition } from '../Transition'

import { elevationType } from '../styles/elevations'

//
// TODO: This should come from the Menu Component as a prop!
//
import menuTransition from './menuTransition'
const { willEnter, didEnter, willLeave, didLeave } = menuTransition()
//

import { getStyle } from './utils'
import { originShape } from './propTypes'

export class Popover extends PureComponent {

  constructor(props, ...args) {
    super(props, ...args)

    this.portal = {
      getLayer: () => {}
    }

    const { willEnter, didEnter, willLeave, didLeave } = menuTransition()

    this.willEnter = willEnter
    this.didEnter = didEnter
    this.willLeave = willLeave
    this.didLeave = didLeave

    this.state = {
      show: false,
      style: {
        width: 64 * 5,
      }
    }
  }

  componentDidMount() {
    this.willAppear(this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.open && this.props.open !== prevProps.open) {
      this.willAppear(this.props)
    }
  }

  willAppear = (props) => {
    const { anchorEl, anchorOrigin, targetOrigin } = props
    const targetEl = this.portal.getLayer()

    if (targetEl) {
      const style = getStyle([
        [anchorEl, anchorOrigin],
        [targetEl, targetOrigin],
      ])

      this.setState({ show: true, style: { ...this.state.style, ...style } })
    }
  }

  didFinish = () => this.setState({ show: false })

  setPortalNode = (portal) => this.portal = portal

  render() {
    const {
      children,
      elevation,
      open,
    } = this.props
    const {
      show,
      style,
    } = this.state

    return (
      <Portal
        open={show || open}
        ref={this.setPortalNode}
        >
        <Transition
          didEnter={this.didEnter}
          didLeave={this.didLeave}
          in={open}
          willEnter={this.willEnter}
          willLeave={this.willLeave}
          didFinish={this.didFinish}
          >
          <Paper
            style={style}
            elevation={elevation}
            >
            {children}
          </Paper>
        </Transition>
      </Portal>
    )
  }
}

Popover.propTypes = {
  anchorEl: PT.object,
  anchorOrigin: originShape,
  children: PT.node,
  elevation: elevationType,
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
