
import React from 'react'
import styled from 'styled-components'

import Ripple from '../Ripple'

const size = (props) => props.size
  ? props.size
  : props.dense
    ? '20px'
    : '24px'

const fill = (props) => props.fill || 'rgba(0, 0, 0, .54)'

const density = (props) => props.dense ? '8px' : '12px'

const bounds = (props) => props.dense ? '40px' : '48px'

const Icon = styled(Ripple).attrs({
  className: 'material-icons', // required: google-material-ui's classname for icons
  role: 'button',
  tabIndex: 0,
  children: (props) => props.icon,
})`
  color: ${fill};
  font-size: ${size};
  padding: ${density};
  width: ${bounds};
  height: ${bounds};
  cursor: pointer;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

export default Icon
