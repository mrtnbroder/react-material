
export const chain = (f) => (x) => [].concat.apply([], map(f)(x))
export const compose = (...fns) => (...args) => fns.reduceRight((acc, fn) => fn(acc), ...args)
export const identity = (x) => x
export const join = (val) => (str) => str.join(val)
export const log = (name) => (x) => console.log(name, x) || x
export const map = (f) => (arr) => arr.map(f)
export const noop = () => {}
export const pipe = (...fns) => (...args) => fns.reduce((acc, fn) => fn(acc), ...args)
