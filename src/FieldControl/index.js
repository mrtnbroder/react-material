
import PT from 'prop-types'
import React, { PureComponent } from 'react'

import { isEmpty, getDisplayName } from '../internal/utils/utils'

export const FieldControl = (WrappedComponent) =>
  class extends PureComponent {

    static displayName = `FieldControl(${getDisplayName(WrappedComponent)})`

    static propTypes = {
      id: PT.string.isRequired,
      prefix: PT.string,
      suffix: PT.string,
    }

    constructor(props, ...args) {
      super(props, ...args)

      this.state = {
        focused: false,
        shrink: !isEmpty(props.value || props.defaultValue),
      }
    }

    handleOnFocus = (e) => {
      this.setState({ focused: true })
      if (this.props.onFocus) this.props.onFocus(e)
    }

    handleOnBlur = (e) => {
      this.setState({ focused: false })
      if (this.props.onBlur) this.props.onBlur(e)
    }

    handleOnChange = (e) => {
      this.setState({ shrink: !isEmpty(e.target.value) })
      if (this.props.onChange) this.props.onChange(e)
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          onFocus={this.handleOnFocus}
          />
      )
    }
  }
