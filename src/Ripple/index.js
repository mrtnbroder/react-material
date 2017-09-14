// @flow

import React, { PureComponent } from 'react'
import PT from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { map, isEmpty, noop } from '../internal/utils/utils'

import { fastOutLinearIn, linearOutSlowIn } from '../internal/styles/transitions'

type Point = {
  x: number,
  y: number,
}

type Props = {
  disabled?: boolean,
  bounded: boolean, // otherwise unbounded
}

const togglePairs = [
  // ['focus', 'blur'],
  // ['keydown', 'keyup'],
  ['mousedown', 'mouseup'],
  // ['pointerdown', 'pointerup'],
  // ['touchstart', 'touchend'],
]

const getClientRect = (node: HTMLElement): ClientRect =>
  node.getBoundingClientRect()

const getWindowPageOffset = (): Point => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
})

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

class Ripple extends PureComponent<Props> {

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
