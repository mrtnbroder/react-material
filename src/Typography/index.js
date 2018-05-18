
import * as React from 'react'
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

const getTypeStyles = (props) => props.typography[props.type]

const RMTypography = styled(Typography)`
  color: ${getColor};
  margin: 0;
  ${getTypeStyles}
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
    'headline1',
    'headline2',
    'headline3',
    'headline4',
    'headline5',
    'headline6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ]),
  typography: PT.object.isRequired,
}

export default RMTypography
