// @flow
import * as React from 'react'
import PT from 'prop-types';
import styled from 'styled-components'

import { elevationShape } from '../_internal/styles/elevations'
import Elevation from '../_internal/components/Elevation'

const Card = styled(Elevation)`
  --card-surface: var(--theme-surface);
  --card-corner-radius: ${props => props.square ? '0' : '2px'};

  background-color: var(--card-surface);
  border-radius: var(--card-corner-radius);
`

Card.defaultProps = {
  elevation: 2,
  square: false,
}

export default Card
