// @flow
import * as React from 'react'
import styled, { injectGlobal } from 'styled-components'
import PT from 'prop-types'

import Card from '../Card'

import { up } from '../_internal/styles/breakpoints'
import theme from '../_internal/styles/theme'
import type { Elevation } from '../_internal/styles/elevation'

// const getDensity = (props) => props.dense && css`
//   @media screen and (min-width: ${breakpoints.small}px) {
//     height: 48px;
//     padding: 0 24px;
//   }
// `

type TopAppBarProps = {
  elevation: Elevation,
  fixed: boolean,
  prominent: boolean,
  short: boolean,
  shortCollapsed: boolean,
}

const Appbar = styled(Card)`
  --card-surface: var(--theme-primary);
  ${(props) => !props.shortCollapsed && '--card-corner-radius: 0'};

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

  ${'' /* clip-path: polygon(
    var(--card-sharp) 0%,
    calc(100% - var(--card-sharp)) 0%,
    100% var(--card-sharp),
    100% calc(100% - var(--card-sharp)),
    calc(100% - var(--card-sharp)) 100%,
    var(--card-sharp) 100%,
    0% calc(100% - var(--card-sharp)),
    0% var(--card-sharp)
  ); */};
`

Appbar.defaultProps = {
  elevation: 4,
  fixed: true,
  prominent: false,
  short: false,
  shortCollapsed: false,
}

export default Appbar
