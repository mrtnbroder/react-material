
import * as React from 'react'
import styled from 'styled-components'

const asBox = (props) => props.box && `

`

const show = (props) => props.show && `
  opacity: 1;
`

const RMTextFieldPlaceholder = styled.span`
  font: inherit;
  color: rgba(0, 0, 0, 0.42);
  transition: opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  pointer-events: none;
  position: absolute;
  ${show}
  ${asBox}
`

export const TextFieldPlaceholder = RMTextFieldPlaceholder
