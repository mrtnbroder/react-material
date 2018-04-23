// @flow
import * as React from 'react'

import Card from '../Card'
import { Portal } from '../_internal/components'
import Transition from '../Transition'
import { elevationShape } from '../_internal/styles/elevations'
import { noop, instanceOf } from '../_internal/utils/utils'

import { getStyle } from './utils'
import transition from './menuTransition'

import type { Elevation } from '../_internal/styles/elevations'
import type { Origin } from '../_internal/utils/shapes'

type Props = {
  anchorEl: ?React.Node,
  anchorOrigin: Origin,
  children: React.Node,
  elevation: Elevation,
  onRequestClose: () => void,
  open: boolean,
  targetOrigin: Origin,
  // TODO: Maybe remove this from here as well?!?!?
  transition: any,
  // TODO: remove this
  width: number,
  // ENDTODO
}

type State = {
  show: boolean,
  style: Object,
}

interface IPopover {
  willEnter(HTMLElement, (() => void) => void, () => void): void;
}

const isMounted = instanceOf(HTMLElement)

class Popover extends React.PureComponent<Props, State> implements IPopover {

  static defaultProps = {
    /**
     *  Popover open state
     */
    open: false,
    /**
     *  Callback when Popover exited.
     */
    onRequestClose: noop,
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

  constructor(props: Props) {
    super(props)

    this.state = {
      show: props.open,
      style: {},
    }
  }

  willEnter = (targetEl, rAF, entering) => {
    const { anchorEl, anchorOrigin, targetOrigin } = this.props

    if (isMounted(targetEl) && isMounted(anchorEl)) {
      const style = getStyle([
        [anchorEl, anchorOrigin],
        [targetEl, targetOrigin],
      ])

      // performance optimization
      targetEl.style.willChange = `transform`
      const children = targetEl.firstChild && targetEl.firstChild.children

      Array.from(children || []).forEach((x, i) => {
        x.style.opacity = '0'
        x.style.willChange = 'opacity'
      })
      // performance optimization end

      this.setState({ show: true, style }, entering)
    } else {
      throw new Error([
        '<Popover/> You\'re trying to animate a node that isn\'t mounted.',
        'You are probably trying to animate before a componentDidMount()',
        'happened, or you did not specify an anchorEl.'
      ].join(' '))
    }
  }

  didFinish = () => {
    this.setState({ show: false }, this.props.onRequestClose)
  }

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

export default Popover
