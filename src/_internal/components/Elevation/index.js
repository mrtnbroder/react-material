// @flow
import * as React from 'react'
import PT from 'prop-types'
import styled from 'styled-components'

import { elevations } from '../../styles/elevations'
import type { Elevation as ElevationType } from '../../styles/elevations'

type ElevationProps = {
  elevation: ElevationType,
}

const Elevation: React.ComponentType<ElevationProps> = styled.div`
  box-shadow: ${(props) => elevations[props.elevation]};
`

Elevation.defaultProps = {
  elevation: 2,
}

export default Elevation
