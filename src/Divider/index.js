// @flow
import * as React from 'react'
import styled from 'styled-components'

type DividerProps = {
  className?: string,
  nested?: boolean,
  inset?: boolean,
}

const Divider = styled.hr`
  --divider-on-surface: rgba(0, 0, 0, 0.12);
  display: flex;
  border: none;
  border-bottom: 1px solid var(--divider-on-surface);
  margin: 0;

  ${(props) => props.nested && 'margin: 7px 0 8px'};
  ${(props) => props.inset && 'margin: 7px 0 8px 72px'};
`
export default Divider
