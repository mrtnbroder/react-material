
import React, { PureComponent } from 'react'

import { getDisplayName } from '../_internal/utils/utils'

// menuManager
//   - should set correct elevation (but not override custom)
//   - should handle closing of nested menus
//      - close sibling menus (menus on the same level)
//      - close deepest menu first and continue upwards
//      - close menu on MenuItem click

const menuManager = (WrappedComponent) =>
  class extends PureComponent {

    static displayName = `MenuManager(${getDisplayName(WrappedComponent)})`

    stack = []

    add(key, item) {

    }

    remove(key, item) {

    }

    render() {
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }

export default menuManager
