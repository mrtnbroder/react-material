

import PT from 'prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const focused = (props) => props.focused && `
  &::after {
    transform: scaleX(1);
  }
`

const boxCenter = (props) => props.box && props.placeholder && !props.label && `
  padding: 20px 0 16px;
`

const asBox = (props) => props.box && `
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;

  &::before,
  &::after {
    top: 54px;
    height: 2px;
  }
`

const error = (props) => props.error && `
  &:hover::before,
  &::before,
  &::after {
    height: 2px;
    background: #EF5350;
  }
`

const disabled = (props) => props.disabled && `
  &:hover::before,
  &::before {
    background: linear-gradient(to right, transparent 50%, rgba(0, 0, 0, .42) 50%);
    background-size: 4px;
    height: 1px;
    ${props.box && `display: none;`}
  }
  &::after {
    display: none;
  }
`

export default styled.div`
  padding: 28px 0 8px;
  margin-bottom: 8px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, .42);
    height: 1px;
  }

  &::after {
    background: #304FFE;
    height: 2px;
    transform-origin: center center;
    transition: transform .25s cubic-bezier(0, 0, .2, 1);
    transform: scaleX(0);
  }

  &:hover::before {
    height: 2px;
    background: rgba(0, 0, 0, .87);
  }

  ${boxCenter}
  ${asBox}
  ${focused}
  ${error}
  ${disabled}
`
