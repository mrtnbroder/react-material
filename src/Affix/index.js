
import styled from 'styled-components'

const side = (props) => props.prefix ? `
  margin-right: 4px;
` : `
  margin-left: 4px;
`

export const Affix = styled.span`
  flex: 0 0 auto;
  font: inherit;
  color: ${(props) => props.theme.text.secondary};
  ${side}
`
