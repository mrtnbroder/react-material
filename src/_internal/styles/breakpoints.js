// @flow

export type Breakpoint = 'xs' | 'md' | 'lg'

export type Breakpoints = {
  xs: number,
  md: number,
  lg: number,
}

/**
 *  Breakpoints
 *
 *  Determines layout for different screen sizes and spaces.
 */
export const breakpoints: Breakpoints = {
  lg: 840,
  md: 600,
  xs: 0,
}

export const columns: Breakpoints = {
  lg: 12,
  md: 8,
  xs: 4,
}

export const gutters: Breakpoints = {
  lg: 24,
  md: 16,
  xs: 16,
}

export const margins: Breakpoints = {
  lg: 24,
  md: 16,
  xs: 16,
}

const spaces: Array<number> = [4, 8, 16, 24, 40]

export const columnWidths: Breakpoints = {
  lg: 72,
  md: 72,
  xs: 72,
}

export const up = (bp: Breakpoint, unit: string = 'px') => {
  const value = bp === 'xs' ? '0' : breakpoints[bp]

  return `@media screen and (min-width: ${value}${unit})`
}

export const down = (bp: Breakpoint, unit: string = 'px') => {
  const value = breakpoints[bp]

  return `@media screen and (max-width: ${value}${unit})`
}
