
import { chain, compose, join, map, pipe } from '../internal/utils/utils'

const getOffsetLeft = (rect, horizontal) => {
  if (typeof horizontal === 'number') {
    return horizontal
  } else if (horizontal === 'center') {
    return rect.width / 2
  } else if (horizontal === 'right') {
    return rect.width
  }
  return 0
}

const getOffsetTop = (rect, vertical) => {
  if (typeof vertical === 'number') {
    return vertical
  } else if (vertical === 'center') {
    return rect.height / 2
  } else if (vertical === 'bottom') {
    return rect.height
  }
  return 0
}

const numberToPixel = (n) => typeof n === 'number' ? `${n}px` : n

const getTransformOriginValue = pipe(map(numberToPixel), join(' '))

const getRect = ([elem, origin]) => [elem.getBoundingClientRect(), origin]

const getOffset = ([rect, origin]) => [{
  offsetTop: getOffsetTop(rect, origin.vertical),
  offsetLeft: getOffsetLeft(rect, origin.horizontal),
  top: rect.top,
  left: rect.left,
}, origin]

const getPosition = ([anchor, anchorOrigin, target, targetOrigin]) => {
  const transformOrigin = getTransformOriginValue([
    targetOrigin.horizontal,
    targetOrigin.vertical,
  ])

  return {
    position: 'fixed',
    top: anchor.top + anchor.offsetTop - target.offsetTop,
    left: anchor.left + anchor.offsetLeft - target.offsetLeft,
    transformOrigin,
  }
}

export const getStyle = compose(getPosition, chain(getOffset), map(getRect))
