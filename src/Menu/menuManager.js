
// menuManager
//   - should provide correct elevation (but not override custom)
//   - should handle closing of nested menus
//      - close sibling menus (menus on the same level)
//      - close deepest menu first and continue upwards
//      - close menu on MenuItem click

const length = (x) => x.length
const eq = (x) => (y) => x === y
const findIndex = (f, x) => x.findIndex(f)

class MenuManager {

  stack = {}

  push = (depth, item) => {
    return this.stack[depth] = {
      depth,
      item,
      siblings: [],
    }
  }

  pop = (item) => {
    return this.stack[depth] = null
  }

  peek = () => {
    const l = length(this.stack)
    return this.stack[l - 1]
  }

  handleRequestClose = (item) => {
    // find item position
    // close deepest node and then siblings
  }

  getElevation = (item) => {
    // const eqItem = eq(item)
    // const idx = findIndex(eqItem, this.stack)
    // const elevation = (idx === -1 ? 0 : idx) + 8
    // return elevation
  }

}

MenuManager.of = () => new MenuManager()

export default MenuManager
