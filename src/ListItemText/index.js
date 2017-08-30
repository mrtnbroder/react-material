
import React from 'react'
import styled from 'styled-components'

import Typography from '../Typography'

const Primary = styled(Typography.withComponent('h5'))`
  font-weight: 400;
  margin: 0;
`

const Secondary = styled(Typography)`
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
