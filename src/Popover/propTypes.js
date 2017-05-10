
import PT from 'prop-types'

export const horizontal = PT.oneOfType([
  PT.oneOf([ 'left', 'center', 'right' ]),
  PT.number,
]).isRequired

export const vertical = PT.oneOfType([
  PT.oneOf([ 'top', 'center', 'bottom' ]),
  PT.number,
]).isRequired

export const originShape = PT.shape({
  horizontal,
  vertical,
})
