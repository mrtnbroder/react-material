// @flow
import * as React from 'react'
import styled from 'styled-components'

import Menu from '../Menu'

import { fastOutSlowIn } from '../_internal/styles/transitions'

type MenuItemProps = {
  anchorEl?: React.Node,
  anchorOrigin?: Origin,
  children?: React.ChildrenArray<React.Element<*>>,
}

class MenuItem extends React.PureComponent<MenuItemProps> {

  handleClick = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render() {
    const {
      anchorEl,
      ...props
    } = this.props

    return (
      <RMMenuItem {...props}/>
    )
  }
}

const RMMenuItem = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 400;
  padding: 4px 24px;
  cursor: pointer;
  position: relative;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: background-color 225ms ${fastOutSlowIn};

  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`

export default RMMenuItem
