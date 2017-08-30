
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PT from 'prop-types'
import rAF from 'dom-helpers/util/requestAnimationFrame'

import { noop } from '../internal/utils/utils'
import {
  UNMOUNTED,
  MOUNTED,
  IDLE,
  WILL_ENTER,
  ENTERING,
  DID_ENTER,
  WILL_LEAVE,
  LEAVING,
  DID_LEAVE,
  isWithinEnterState,
  isWithinLeavingState,
} from './utils'

export class Transition extends Component {

  // Transition State:
  //   - UNMOUNTED
  //     Child not rendered, idle
  state = {
    status: UNMOUNTED,
  }

  animationId = null

  // shouldComponentUpdate
  //  - if nextState.status equals state.status, do not update OR
  //  - if nextProps.in equals props.in, do not update
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.status !== this.state.status
      || nextProps.in !== this.props.in
    ) {
      return true
    }
    return false
  }

  componentDidMount() {
    this.setState({ status: MOUNTED })
  }

  componentDidUpdate() {
    this.handleIn(this.state, this.props)
    this.handleOut(this.state, this.props)
  }

  //   - componentWillUnmount
  //     cancel any animation
  componentWillUnmount() {
    this.cancelAnimation()
  }

  //   - handleIn
  //     if props.show AND not performing enter transition AND status is UNMOUNTED
  //       then trigger willEnter
  handleIn = (state, props) => {
    if (props.in && !isWithinEnterState(state.status) && state.status === MOUNTED) {
      this.cancelAnimation()
      this.willEnter()
    }
  }

  //   - handleOut
  //     if not props.show AND not performing leaving transition AND status is not UNMOUNTED
  //       then trigger willLeave
  handleOut = (state, props) => {
    if (!props.in && !isWithinLeavingState(state.status) && state.status !== UNMOUNTED) {
      this.cancelAnimation()
      this.willLeave()
    }
  }

  cancelAnimation = () => window.cancelAnimationFrame(this.animationId)

  performAnimation = (fn) => this.animationId = rAF(fn)

  //   - rAF(mounted)
  //     Child rendered, mounted state
  mounted = () => {
    this.setState({ status: MOUNTED })
  }
  //   - WILL_ENTER
  //     Child will render after state transition, prepare stuff here, get's passed
  //     a callback for ENTERING step
  // willEnter = this.createTransition(WILL_ENTER, 'willEnter', 'entering', 'didEnter')
  willEnter = () => {
    this.setState({ status: WILL_ENTER }, () => {
      if (this.props.willEnter) {
        const node = findDOMNode(this)
        this.props.willEnter(node, this.performAnimation, this.entering)
      } else {
        this.entering()
      }
    })
  }
  //   - rAF(ENTERING)
  //     Child rendered, perform entering animation within a rAF until the
  //     callback for DID_ENTER step is called OR the animation gets cancelled via
  //     componentWillReceiveProps
  // entering = this.createTransition(ENTERING, 'entering', 'didEnter', 'didEnter')
  entering = () => {
    this.setState({ status: ENTERING }, () => {
      if (this.props.entering) {
        const node = findDOMNode(this)
        this.props.entering(node, this.performAnimation, this.didEnter)
      } else {
        this.didEnter()
      }
    })
  }
  //   - rAF(DID_ENTER)
  //     Child rendered, perform cleanup here, get's passed a callback for MOUNTED step
  // didEnter = this.createTransition(DID_ENTER, 'didEnter')
  didEnter = () => {
    this.setState({ status: DID_ENTER }, () => {
      if (this.props.didEnter) {
        const node = findDOMNode(this)
        this.props.didEnter(node, this.performAnimation, this.mounted)
      } else {
        this.idle()
      }
    })
  }
  //   - rAF(IDLE)
  //     Child rendered, idle state
  idle = () => {
    this.setState({ status: IDLE })
  }

  //   - rAF(WILL_LEAVE)
  //     Child rendered, prepare stuff here, get's passed
  //     a callback for LEAVING step
  // willLeave = this.createTransition(WILL_LEAVE, 'willLeave', 'leaving', 'didLeave')
  willLeave = () => {
    this.setState({ status: WILL_LEAVE }, () => {
      if (this.props.willLeave) {
        const node = findDOMNode(this)
        this.props.willLeave(node, this.leaving)
      } else {
        this.leaving()
      }
    })
  }
  //   - rAF(LEAVING)
  //     Child rendered, perform leaving animation within a rAF until the
  //     callback for DID_LEAVE step is called OR the animation gets cancelled via
  //     componentWillUnmount
  // leaving = this.createTransition(LEAVING, 'leaving', 'didLeave', 'didFinish')
  leaving = () => {
    this.setState({ status: LEAVING }, () => {
      if (this.props.leaving) {
        const node = findDOMNode(this)
        this.props.leaving(node, this.performAnimation, this.didLeave)
      } else {
        this.didLeave()
      }
    })
  }
  //   - rAF(DID_LEAVE)
  //     Child will be removed in next lifecycle, perform cleanup here, get's passed
  //     a callback for UNMOUNTED step
  // didLeave = this.createTransition(DID_LEAVE, 'didLeave', 'didFinish')
  didLeave = () => {
    this.setState({ status: DID_LEAVE }, () => {
      if (this.props.didLeave) {
        const node = findDOMNode(this)
        this.props.didLeave(node, this.performAnimation, this.unmounted)
      } else {
        this.unmounted()
      }
    })
  }
  //   - UNMOUNTED
  //     Child not rendered, idle
  unmounted = () => {
    this.animationId = null
    this.setState({ status: UNMOUNTED }, this.props.didFinish)
  }

  render() {
    const {
      children,
    } = this.props
    const {
      status
    } = this.state

    return status === UNMOUNTED ? null : React.Children.only(children)
  }
}

Transition.propTypes = {
  willEnter: PT.func,
  entering: PT.func,
  didEnter: PT.func,
  willLeave: PT.func,
  leaving: PT.func,
  didLeave: PT.func,
}

Transition.defaultProps = {
  didFinish: noop,
}
