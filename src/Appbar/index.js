
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import PT from 'prop-types'

import Card from '../Card'

import { colorShape } from '../internal/utils/shapes'
import { up } from '../internal/styles/breakpoints'
import theme from '../internal/styles/theme'

// const getDensity = (props) => props.dense && css`
//   @media screen and (min-width: ${breakpoints.small}px) {
//     height: 48px;
//     padding: 0 24px;
//   }
// `

const Appbar = (props) => (
  <Card {...props}/>
)

const RMAppbar = styled(Appbar)`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 56px;
  left: 0;
  padding: 0 16px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;

  @media screen and (orientation: landscape) {
    height: 48px;
  }

  ${up('sm')} {
    height: 64px;
    padding: 0 24px;
  }
`

RMAppbar.propTypes = {
  component: PT.oneOfType([PT.string, PT.element]),
  elevation: PT.number,
  square: PT.bool,
  color: colorShape,
  theme: PT.object.isRequired,
}

RMAppbar.defaultProps = {
  component: 'header',
  elevation: 4,
  square: true,
  color: theme.background.appBar,
  theme,
}

export default RMAppbar

injectGlobal`
  body {
    ${'' /* TODO: REMOVE THIS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    background-color: ${theme.background.body};
    ${'' /* TODO: REMOVE THIS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    padding-top: 56px;
  }

  @media screen and (orientation: landscape) {
    body {
      padding-top: 48px;
    }
  }

  ${up('sm')} {
    body {
      padding-top: 64px;
    }
  }
`
