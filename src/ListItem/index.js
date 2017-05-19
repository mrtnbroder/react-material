
import React from 'react'
import styled from 'styled-components'

const button = (props) => props.button && `
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, .12);
  }
`

const RMListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 48px;
  padding: 12px 16px;

  ${button}
`

export const ListItem = ({ children, ...props }) => (
  <RMListItem {...props}>
    {children}
  </RMListItem>
)
