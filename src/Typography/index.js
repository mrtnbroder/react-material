
import React from 'react'
import PT from 'prop-types'
import styled from 'styled-components'

import { colorShape } from '../_internal/utils/shapes'
import { defaultTypography } from '../_internal/styles/typography'

const getColor = (props) => props.color === 'default'
  ? props.theme.text[props.type]
  : props.color === 'secondary'
    ? props.theme.text.secondary['A200']
    : props.color

const Typography = ({
  color,
  component: Comp,
  theme,
  type,
  typography,
  ...props,
}) => (
  <Comp {...props}/>
)

const RMTypography = styled(Typography)`
  color: ${getColor};
  font-size: ${(props) => props.typography.size[props.type]};
  font-weight: ${(props) => props.typography.weight[props.type]};
  letter-spacing: ${(props) => props.typography.tracking[props.type]};
  line-height: ${(props) => props.typography.leading[props.type]};
  text-transform: ${(props) => props.typography.transform[props.type]};
  margin: 0;
`

RMTypography.defaultProps = {
  color: 'default',
  component: 'p',
  type: 'body1',
  typography: defaultTypography,
}

RMTypography.propTypes = {
  color: colorShape,
  component: PT.oneOfType([PT.element, PT.string]),
  type: PT.oneOf([
    'display4',
    'display3',
    'display2',
    'display1',
    'headline',
    'title',
    'subhead2',
    'subhead1',
    'body2',
    'body1',
    'caption',
    'button',
  ]),
  typography: PT.object.isRequired,
}

export default RMTypography
