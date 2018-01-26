
import React, { PureComponent } from 'react'
import PT from 'prop-types'
import styled from 'styled-components'
import { compose, withProps, withHandlers, withState, pure } from 'recompose'

import { mean } from '../_internal/utils/utils'

import { TextField } from '../TextField'
import Menu from '../Menu'
import { Option } from '../Option'

const getMaxHeight = (props) => `${props.maxItems * 48}px`

const RMMenu = styled(Menu)`
  max-height: ${getMaxHeight};
  overflow: scroll;
`

const init = (props) => {
  return {
    menuEl: null,
    anchorEl: null,
    open: false,
    value: props.value || props.defaultValue
  }
}

const handlers = {
  onFocus: (props) => (e) => {
    props.setState({ ...props.state, open: true })
  },
  onOptionClick: (props) => (value, index) => (e) => {
    props.setState({ ...props.state, open: false, value }, () => {
      if (props.onChange) props.onChange(value, e, index)
    })
  },
  onRequestClose: (props) => () => {
    props.setState({ ...props.state, open: false })
  },
  addContainerRef: (props) => (anchorEl) => {
    props.setState({ ...props.state, anchorEl })
  },
}

const setScrollPositionOfSelectedOption = {
  addMenuRef: (props) => (menuEl) => {
    if (menuEl) {
      const middle = Math.floor(mean([0, props.maxItems])) - 1

      menuEl.scrollTop = (props.selected - middle) * 48
    }
  }
}

const enhanceChildrenWithOptionProps = (props) => {
  let selected = 0
  const mapChildren = (child, idx) => {
    const isSelected = (props.value || props.defaultValue) === child.props.value
    const optionProps = {
      isSelected,
      onClick: props.onOptionClick(child.props.value, idx),
    }

    if (isSelected) {
      selected = idx
    }

    return React.cloneElement(child, { ...child.props, ...optionProps })
  }
  const children = React.Children.map(props.children, mapChildren)
  const middle = Math.floor(mean([0, props.maxItems])) - 1

  return {
    children,
    selected,
    anchorOrigin: { vertical: 'top', horizontal: 'left' },
    targetOrigin: { vertical: (middle * 48) - 9, horizontal: 24 },
  }
}

const RMSelectField = ({
  children,
  maxItems,
  anchorOrigin,
  targetOrigin,
  onRequestClose,
  onOptionClick,
  defaultValue, // eslint-disable-line no-unused-variables
  onChange, // eslint-disable-line no-unused-variables
  state,
  width,
  ...props,
}) => {
  return (
    <div ref={props.addContainerRef}>
      <TextField
        {...props}
        value={state.value}
      />
      <RMMenu
        anchorEl={state.anchorEl}
        anchorOrigin={anchorOrigin}
        targetOrigin={targetOrigin}
        onRequestClose={onRequestClose}
        open={state.open}
        maxItems={maxItems}
        menuRef={props.addMenuRef}
        width={width}
        >
        {children}
      </RMMenu>
    </div>
  )
}

const optionShape = PT.shape({
  type: PT.oneOf([Option])
})

const SelectField = compose(
  withState('state', 'setState', init),
  withHandlers(handlers),
  withProps(enhanceChildrenWithOptionProps),
  withHandlers(setScrollPositionOfSelectedOption),
)(RMSelectField)

SelectField.propTypes = {
  children: PT.arrayOf(optionShape),
  maxItems: PT.number,
  onChange: PT.func,
  icon: PT.string,
}

SelectField.defaultProps = {
  maxItems: 7,
  icon: 'arrow_drop_down',
}

export default SelectField
