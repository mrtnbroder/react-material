// @flow

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const breakpoints = {
  xs: 480,
  sm: 600,
  md: 840,
  lg: 1280,
  xl: 1920,
}

const unit = 'px'

export const up = (bp: Breakpoint) => {
  const value = bp === 'xs' ? '0' : breakpoints[bp]

  return `@media screen and (min-width: ${value}${unit})`
}

export const down = (bp: Breakpoint) => {
  const value = breakpoints[bp]

  return `@media screen and (max-width: ${value}${unit})`
}
