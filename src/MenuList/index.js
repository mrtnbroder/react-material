
import React from 'react'
import styled from 'styled-components'

const cascading = (props) => props.cascading ? '16px 0' : '8px 0'

export default styled.div`
  padding: ${cascading};
`
