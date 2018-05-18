// @flow

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {
  up,
  breakpoints,
  gutters,
  columns,
} from '../_internal/styles/breakpoints'

/**
 *  @namespace Types
 */

/**
 *  @namespace Utils
 */

/**
 *  @memberof Types
 */
type Props = {}

/**
 *  A Grid Element
 *  @example
 *  <Grid><MyComponent/></Grid>
 *  @desc This is a description of the MyClass class.
 */
const GridItem = styled.div`
  width: auto;
  grid-column-end: span ${(props) => props.xs || 1};

  ${up('md')} {
    grid-column-end: span ${(props) => props.md || 1};
  }

  ${up('lg')} {
    grid-column-end: span ${(props) => props.lg || 1};
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${(props) => props.spacing || gutters.xs}px;
  grid-template-columns: repeat(${columns.xs}, minmax(0, 1fr));

  ${up('md')} {
    grid-gap: ${(props) => props.spacing || gutters.md}px;
    grid-template-columns: repeat(${columns.md}, minmax(0, 1fr));
  }

  ${up('lg')} {
    grid-gap: ${(props) => props.spacing || gutters.lg}px;
    grid-template-columns: repeat(${columns.lg}, minmax(0, 1fr));
  }
 `

const GridInner = styled.div`
  margin: 0 ${(props) => Number.isInteger(props.margin) ? props.margin : gutters.xs}px;

  ${up('md')} {
    margin: 0 ${(props) => Number.isInteger(props.margin) ? props.margin : gutters.md}px;
  }

  ${up('lg')} {
    margin: 0 ${(props) => Number.isInteger(props.margin) ? props.margin : gutters.lg}px;
  }
`

const Grid = ({ children, ...props }) => <GridInner {...props}><GridContainer {...props}>{children}</GridContainer></GridInner>
const RMGrid = (props) => props.item ? <GridItem {...props}/> : <Grid {...props}/>

export default RMGrid
