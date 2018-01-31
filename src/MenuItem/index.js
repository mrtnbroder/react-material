// @flow
import * as React from 'react'
import styled from 'styled-components'

import Menu from '../Menu'

import { fastOutSlowIn } from '../_internal/styles/transitions'

class MenuItem extends React.PureComponent {

  handleClick = (e) => {
    e.stopPropagation()
    e.preventDefault()

    this.props.onClick(e, this.props.depth)
  }

  recursiveMap = (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Menu) {
        const open = this.props.depth.reduce((_, value, index) => {
          // console.log('index: %d, path: %d, value: %d', index, this.props.path[index], value);
          return this.props.path[index] === value
        }, false)

        return React.cloneElement(child, {
          open,
          depth: this.props.depth,
          anchorEl: this.props.anchorEl,
          path: this.props.path,
          setPath: this.props.setPath,
          children: React.Children.map(child.props.children, this.recursiveMap),
        })
      }
    }
    return child
  }

  render() {
    const {
      depth,
      setPath,
      path,
      anchorEl,
      open,
      children,
      ...props
    } = this.props

    return (
      <div {...props} onClick={this.handleClick}>
        {React.Children.map(children, this.recursiveMap)}
      </div>
    )
  }
}

const RMMenuItem = styled(MenuItem)`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 400;
  padding: 4px 24px;
  cursor: pointer;
  position: relative;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: background-color 225ms ${fastOutSlowIn};

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`

export default RMMenuItem
