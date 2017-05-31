
import PT from 'prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { TextFieldLabel } from '../TextFieldLabel'
import { FieldControl } from '../FieldControl'
import { AffixedInput } from '../AffixedInput'
import { TextFieldHelpText } from '../TextFieldHelpText'
import { TextFieldPlaceholder } from '../TextFieldPlaceholder'
import { FormControl } from '../FormControl'

import { isEmpty } from '../utils/utils'

const RMTextField = styled.div`
  position: relative;
  cursor: text;
  width: 100%;
  font: 16px/20px Roboto, 'sans-serif';
  color: rgba(0, 0, 0, .87);
  margin-bottom: 8px;

  ${(props) => props.disabled && `
    cursor: not-allowed;
  `}
`

const querySelector = (x, node) => node.querySelector(x)

const handleFocus = (e) => querySelector('input', e.currentTarget).focus()

const Field = ({
  children,
  label,
  helpText,
  shrink,
  error,
  focused,
  placeholder,
  ...props
}) => (
  <RMTextField disabled={props.disabled}>
    <FormControl
      box={props.box}
      disabled={props.disabled}
      error={error}
      focused={focused}
      label={label}
      onClick={handleFocus}
      placeholder={placeholder}
      >
      {label && (
        <TextFieldLabel
          error={error}
          focused={focused}
          box={props.box}
          disabled={props.disabled}
          shrink={shrink || focused || props.prefix || props.suffix}
          htmlFor={props.id}
          >
          {label}
        </TextFieldLabel>
      )}
      {placeholder && (
        <TextFieldPlaceholder show={(focused || !label) && isEmpty(props.value || props.defaultValue)}>
          {placeholder}
        </TextFieldPlaceholder>
      )}
      <AffixedInput {...props}/>
      {children}
    </FormControl>
    {(helpText || error) && !props.disabled && (
      <TextFieldHelpText error={error} box={props.box}>
        {error || helpText}
      </TextFieldHelpText>
    )}
  </RMTextField>
)

Field.propTypes = {
  id: PT.string.isRequired,
  prefix: PT.string,
  suffix: PT.string,
}


export const TextField = FieldControl(Field)
