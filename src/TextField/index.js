
import PT from 'prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { TextFieldLabel } from '../TextFieldLabel'
import { FieldControl } from '../FieldControl'
import { AffixedInput } from '../AffixedInput'
import { TextFieldHelpText } from '../TextFieldHelpText'
import { TextFieldPlaceholder } from '../TextFieldPlaceholder'
import FormControl from '../FormControl'

import { isEmpty } from '../internal/utils/utils'

const RMTextField = styled.div`
  position: relative;
  cursor: text;
  width: 100%;
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 8px;
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
  theme,
  ...props
}) => (
  <RMTextField>
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
          box={props.box}
          disabled={props.disabled}
          error={error}
          focused={focused}
          htmlFor={props.id}
          shrink={shrink || focused || props.prefix || props.suffix}
          >
          {label}
        </TextFieldLabel>
      )}
      {placeholder && (
        <TextFieldPlaceholder
          show={(focused || !label) && isEmpty(props.value || props.defaultValue)}
          >
          {placeholder}
        </TextFieldPlaceholder>
      )}
      <AffixedInput
        {...props}
        />
      {children}
    </FormControl>
    {(helpText || error) && !props.disabled && (
      <TextFieldHelpText
        box={props.box}
        error={error}
        >
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
