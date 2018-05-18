
import * as React from 'react'
import styled from 'styled-components'

const Primary = styled.span`
  text-align: left;
`

const Secondary = styled.span`
  text-align: right;
  margin-left: auto;
  display: inline-flex;
`

const RMMenuItemText = styled.div`
  flex-direction: row;
  display: inline-flex;
  flex: 1 0 auto;
`

export const MenuItemText = ({ primary, secondary }) => (
  <RMMenuItemText>
    {primary && <Primary>{primary}</Primary>}
    {secondary && <Secondary>{secondary}</Secondary>}
  </RMMenuItemText>
)
