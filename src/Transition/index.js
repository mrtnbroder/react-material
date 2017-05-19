
import cx from 'classnames'
import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import PT from 'prop-types'
import rAF from 'dom-helpers/util/requestAnimationFrame'

import { noop } from '../utils/utils'
import {
  UNMOUNTED,
  WILL_ENTER,
  DID_ENTER,
  WILL_LEAVE,
  DID_LEAVE,
  hasEntered,
  hasLeft,
} from './utils'

export class Transition extends PureComponent {

  state = {
    status: UNMOUNTED,
  }

  componentDidMount() {
    this.handleIn(this.state, this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.in !== nextProps.in) {
      this.handleIn(this.state, nextProps)
      this.handleOut(this.state, nextProps)
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestAnimationId)
  }

  handleIn = (state, props) => {
    if (props.in && !hasEntered(state.status)) {
      const node = findDOMNode(this)
      const willEnter = () => this.willEnter(node, props, state)
      this.requestAnimationId = rAF(willEnter)
    }
  }

  handleOut = (state, props) => {
    if (!props.in && hasEntered(state.status)) {
      const node = findDOMNode(this)
      const willLeave = () => this.willLeave(node, props, state)
      this.requestAnimationId = rAF(willLeave)
    }
  }

  willEnter = (node, props, state) => {
    const didEnter = () => this.didEnter(node, props, this.state)
    const nextStep = () => {
      if (props.willEnter) {
        props.willEnter(node, didEnter)
      } else {
        this.requestAnimationId = rAF(didEnter)
      }
    }

    this.setState({ status: WILL_ENTER }, nextStep)
  }

  didEnter = (node, props, state) => {
    const nextStep = () => {
      if (props.didEnter) {
        props.didEnter(node, props, this.state)
      } else {
        this.requestAnimationId = 0
      }
    }

    this.setState({ status: DID_ENTER }, nextStep)
  }

  willLeave = (node, props, state) => {
    const didLeave = () => this.didLeave(node, props, this.state)
    const nextStep = () => {
      if (props.willLeave) {
        props.willLeave(node, didLeave)
      } else {
        this.requestAnimationId = rAF(didLeave)
      }
    }

    this.setState({ status: WILL_LEAVE }, nextStep)
  }

  didLeave = (node, props, state) => {
    const didFinish = () => this.didFinish(props.didFinish)
    const nextStep = () => {
      if (props.didLeave) {
        props.didLeave(node, didFinish)
      } else {
        this.requestAnimationId = rAF(didFinish)
      }
    }

    this.setState({ status: DID_LEAVE }, nextStep)
  }

  didFinish = (cb) => {
    this.requestAnimationId = null
    this.setState({ status: UNMOUNTED }, cb)
  }

  render() {
    const {
      children,
    } = this.props

    return children
  }
}

Transition.propTypes = {
  didEnter: PT.func,
  didLeave: PT.func,
  willEnter: PT.func,
  willLeave: PT.func,
}

Transition.defaultProps = {
  didFinish: noop,
}
