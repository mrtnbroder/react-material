// @flow

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Breakpoints = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
}

export const breakpoints: Breakpoints = {
  xs: 480,
  sm: 600,
  md: 840,
  lg: 1280,
  xl: 1920,
}

export const up = (bp: Breakpoint, unit: string = 'px') => {
  const value = bp === 'xs' ? '0' : breakpoints[bp]

  return `@media screen and (min-width: ${value}${unit})`
}

export const down = (bp: Breakpoint, unit: string = 'px') => {
  const value = breakpoints[bp]

  return `@media screen and (max-width: ${value}${unit})`
}
