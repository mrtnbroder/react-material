
import PT from 'prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Input from '../Input'
import { Affix } from '../Affix'
import { TextFieldIcon } from '../TextFieldIcon'

const RMAffixedInput = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
`

export const AffixedInput = ({
  prefix,
  suffix,
  icon,
  onIconClick,
  ...props
}) => (
  <RMAffixedInput>
    {prefix && <Affix>{prefix}</Affix>}
    <Input {...props}/>
    {suffix && <Affix suffix>{suffix}</Affix>}
    {icon && (
      <TextFieldIcon
        box={props.box}
        icon={icon}
        onClick={onIconClick}
        />
    )}
  </RMAffixedInput>
)
