
import React, { PureComponent } from 'react'
import * as R from 'ramda'
import cars from './cars.json'

import {
  SelectField,
  Option,
} from 'react-material'

export default class StateSelect extends PureComponent {

  state = {
    value: 'Bugatti',
  }

  handleOnChange = (value) => {
    this.setState(R.assoc('value', value))
  }

  render() {
    return (
      <SelectField
        id='state'
        label='State'
        onChange={this.handleOnChange}
        value={this.state.value}
        >
        {R.pipe(
          R.keys,
          R.map((value) => <Option key={value} value={value}>{value}</Option>)
        )(cars)}
      </SelectField>
    )
  }
}
