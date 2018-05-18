// @flow
import * as R from 'ramda'

export const options = {
  prefix: '',
  element: '__',
  modifier: '--',
}

export const bemify = (opts) => (style) => {
  const styles = R.keys(style)
  const mkBem = (acc, key) => {
    const ele = key.split(opts.element)
    const mod = key.split(opts.modifier)

    if (mod.length === 1) {
      acc[key] = []
    }

    if (mod.length === 2) {
      acc[mod[0]].push(mod[1])
    }

    return acc
  }
  const blocks = R.reduce(mkBem, {}, styles)

  return (
    elementPath: string | Array<string>,
    modifiers?: string | Object,
    extra?: string,
  ) => {
    const element = Array.isArray(elementPath) ? elementPath : [elementPath]
    const classes = typeof modifiers === 'string' ? modifiers : extra
    const el = opts.prefix + R.join(opts.element, element)
    const states = (blocks[el] || [])
      .filter((key) => modifiers[key])
      .map((key) => opts.prefix + el + opts.modifier + key)

    return R.join(
      ' ',
      [el]
        .concat(states)
        .map((key) => style[key])
        .concat(classes),
    )
  }
}

export default bemify(options)
