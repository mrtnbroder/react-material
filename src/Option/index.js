
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import MenuItem from '../MenuItem'

const isSelected = (props) => props.isSelected ? `
  color: rgba(0, 0, 0, .87);
  background-color: rgba(0, 0, 0, .12);
` : `
  color: rgba(0, 0, 0, .54);
  background-color: inherit;
`

export const Option = styled(MenuItem)`
  font-size: 16px;
  min-height: 48px;
  ${isSelected}
`
