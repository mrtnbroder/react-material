
import React from 'react'
import styled from 'styled-components'

const Primary = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, .87);
  font-weight: 400;
  margin: 0;
`

const Secondary = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, .54);
  margin: 0;
`

const RMListItemText = styled.div`
  flex-direction: column;
  display: inline-flex;
`

export const ListItemText = ({ primary, secondary }) => (
  <RMListItemText>
    {primary && <Primary>{primary}</Primary>}
    {secondary && <Secondary>{secondary}</Secondary>}
  </RMListItemText>
)
