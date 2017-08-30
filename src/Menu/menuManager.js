
import React, { PureComponent } from 'react'

import { getDisplayName } from '../internal/utils/utils'

// MenuManager
//   - should set correct elevation (but not override custom)
//   - should handle closing of nested menus (last first)
//   - should handle closing of sibling menus (if menu is on the same layer, close the other one)

const stack = {}

const MenuManager = (WrappedComponent) =>
  class extends PureComponent {

    static displayName = `MenuManager(${getDisplayName(WrappedComponent)})`

    constructor(props) {
      super(props)
    }

    add(key, item, rank) {
      // if we have a stack
      if (stack[key]) {
        // if we already have a menu on this rank, close it first
        if (stack[key][rank]) {
          this.remove(key, stack[key][rank])
        }
        stack[key].push(item)
      } else {
        stack[key] = [item]
      }
      return stack[key]
    }

    remove(key, item) {
      if (stack[key]) {
        if (stack[key][stack[key].indexOf(item)]) {
          stack[key][stack[key].indexOf(item)].close()
        }
        stack[key].splice(stack[key].indexOf(item), 1)
        return stack[key]
      }
      return false
    }

    render() {
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }

export default MenuManager
