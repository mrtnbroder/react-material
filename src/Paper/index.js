
import React from 'react'
import styled from 'styled-components'

import { elevations, elevationType } from '../styles/elevations'

const RMPaper = styled.div`
  border-radius: 2px;
  background-color: #fff;
  box-shadow: ${(props) => elevations[props.elevation]}
`

export const Paper = RMPaper

Paper.propTypes = {
  elevation: elevationType,
}

Paper.defaultProps = {
  elevation: 2,
  square: false,
}
