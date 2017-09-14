// @flow

import React from 'react'
import styled from 'styled-components'
import PT from 'prop-types'

import { colorShape } from '../internal/utils/shapes'
import { elevations, elevationShape } from '../internal/styles/elevations'
import theme from '../internal/styles/theme'

const getRadius = (props) => props.square ? '0' : '2px'

const getColor = (props) => props.color === 'default'
  ? props.theme.background.card
  : props.color === 'secondary'
    ? props.theme.secondary['A200']
    : props.color

const getBoxShadow = (props) => elevations[props.elevation]

const Card = ({
  component: Comp,
  color,
  elevation,
  square,
  theme,
  ...props
}) => (
  <Comp {...props}/>
)

const RMCard = styled(Card)`
  border-radius: ${getRadius};
  background-color: ${getColor};
  box-shadow: ${getBoxShadow};
`

RMCard.propTypes = {
  component: PT.string,
  elevation: elevationShape,
  color: colorShape,
  theme: PT.object.isRequired,
}

RMCard.defaultProps = {
  component: 'div',
  color: 'default',
  elevation: 2,
  square: false,
  theme,
}

export default RMCard
