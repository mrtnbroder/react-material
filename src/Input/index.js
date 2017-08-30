
import React from 'react'
import styled from 'styled-components'

const disabled = (props) => props.disabled && `
  cursor: not-allowed;
  color: rgba(0, 0, 0, .42);
`

export default styled.input`
  border: 0;
  display: block;
  font: inherit;
  line-height: inherit;
  background-color: transparent;
  outline: none;
  padding: 0;
  color: inherit;
  vertical-align: middle;
  white-space: normal;
  flex: 1 0 auto;

  ${disabled}
`
