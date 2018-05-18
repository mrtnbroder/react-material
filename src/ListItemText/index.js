
import * as React from 'react'
import styled from 'styled-components'
import PT from 'prop-types'

import Typography from '../Typography'
import { weights } from '../_internal/styles/typography'

const Primary = styled(Typography.withComponent('h5'))`
  font-weight: ${weights.regular};
  margin: 0;
`

const Secondary = styled(Typography)`
  font-size: 14px;
  color: ${(props) => props.theme.text.secondary};
  margin: 0;
`

const RMListItemText = styled.div`
  flex-direction: column;
  display: inline-flex;
  flex: 1 0 auto;
`

const ListItemText = ({ primary, secondary }) => (
  <RMListItemText>
    {primary && <Primary>{primary}</Primary>}
    {secondary && <Secondary>{secondary}</Secondary>}
  </RMListItemText>
)

export default ListItemText
