
import React from 'react'
import styled from 'styled-components'

export const Typography = (props) => styled[props.component]`
  color: rgba(0, 0, 0, .87);
  font: 16px/24px Roboto, 'sans-serif';
  display: block;
  margin: 0;
`

Typography.defaultProps = {
  component: 'p',
}
