// @flow

import React, { PureComponent } from 'react'
import PT from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { map, isEmpty, noop } from '../_internal/utils/utils'

import { fastOutLinearIn, linearOutSlowIn } from '../_internal/styles/transitions'

/**
 *  @namespace Types
 */

/**
 *  @namespace Utils
 */

/**
 *  @memberof Types
 */
type Point = {
  x: number,
  y: number,
}

/**
 *  @memberof Types
 */
type Props = {
  disabled: boolean,
  bounded: boolean, // otherwise unbounded
}

const togglePairs = [
  // ['focus', 'blur'],
  // ['keydown', 'keyup'],
  ['mousedown', 'mouseup'],
  // ['pointerdown', 'pointerup'],
  // ['touchstart', 'touchend'],
]

/**
 *  Get the ClientRect of an HTMLElement
 *  @memberof Utils
 */
const getClientRect = (node: HTMLElement): ClientRect =>
  node.getBoundingClientRect()

/**
 *  Get the pageX and pageY offset of the window
 *  @memberof Utils
 */
const getWindowPageOffset = (): Point => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
})

/**
 *  Add a listener to an event
 *  @memberof Utils
 */
const addEventListener = (
  name: string,
  fn: EventHandler,
  node: ?HTMLElement
): () => mixed => {
  if (node instanceof HTMLElement) {
    node.addEventListener(name, fn, false)
    return () => {
      if (node instanceof HTMLElement) {
        node.removeEventListener(name, fn)
      }
    }
  }
  return noop
}

/**
 *  Ripple Interface
 */
interface RippleInterface {
  /**
   *  The surfae element
   *  @memberof RippleInterface
   *  @instance
   */
  surface: ?HTMLElement,
  /**
   *  Starts the Animation
   *  @memberof RippleInterface
   *  @instance
   */
  activate: (e: Event) => void,
  /**
   *  Stops the Animation
   *  @memberof RippleInterface
   *  @instance
   */
  deactivate: (e: Event) => void,
  /**
   *  Adds the surface node to the Ripple instance
   *  @memberof RippleInterface
   *  @instance
   */
  setRef: (e: ?HTMLElement) => ?HTMLElement,
}

/**
 *  A Ripple Element
 *  @example
 *  <Ripple><MyComponent/></Ripple>
 *  @desc This is a description of the MyClass class.
 */
class Ripple extends PureComponent<Props> implements RippleInterface {

  surface = null

  componentDidMount() {
    map(([activate, deactivate]) => {
      addEventListener(activate, this.activate, this.surface)
      addEventListener(deactivate, this.deactivate, this.surface)
    })(togglePairs)
  }


  activate = (e) => {
    console.log('e.type', e.type)
  }

  deactivate = (e) => {
    console.log('e.type', e.type)
  }

  setRef = (surface) => this.surface = surface

  render() {
    return (
      <span
        ref={this.setRef}
        {...this.props}
      />
    )
  }
}

const breath = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`

// http://www.tothenew.com/blog/ripple-effect-in-android/
// ::before being the ripple overlay (background)
// ::after being the ripple color (foreground)

// background fades in slowly at a scale of 0.9 and then fades to a scale of 1
// where it stays until further actions happen

// the foreground ripple fades in from the touched pointer position and slowly
// moves into the center of the wrapped container, where it scales up to the
// full width and height of the wrapped container, then it fades out.
const RMRipple = styled(Ripple)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  outline: none;
  ${'' /* overflow: hidden; */}

  &::after,
  &::before {
    will-change: transform, opacity;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.16;
    transition: background-color 125ms ${linearOutSlowIn};
  }

  &:focus::after {
    background-color: currentColor;
    animation: 3s ${breath} ${fastOutLinearIn} infinite;
  }
`

export default RMRipple
