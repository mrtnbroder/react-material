// @flow
import * as React from 'react'

export const MenuContext = React.createContext({
  path: [],
  map: new Map(),
  onToggleClick: () => {},
});
