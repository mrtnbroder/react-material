// @flow

import PT from 'prop-types'

export type OriginHorizontal = 'left' | 'center' | 'right' | number

export type OriginVertical = 'top' | 'center' | 'bottom' | number

export type Origin = {
  horizontal: OriginHorizontal,
  vertical: OriginVertical,
}

export type PrimaryColor = 'contrast' | 'inherit' | 'secondary' | 'primary' | 'default' | string

export const colorShape = PT.string // PT.oneOf(['contrast', 'inherit', 'secondary', 'primary', 'default'])
