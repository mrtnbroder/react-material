
export const getOffsetLeft = (rect, horizontal) => {
  if (typeof horizontal === 'number') {
    return horizontal
  } else if (horizontal === 'center') {
    return rect.width / 2
  } else if (horizontal === 'right') {
    return rect.width
  }
  return 0
}

export const getOffsetTop = (rect, vertical) => {
  if (typeof vertical === 'number') {
    return vertical
  } else if (vertical === 'center') {
    return rect.height / 2
  } else if (vertical === 'bottom') {
    return rect.height
  }
  return 0
}

export const getTransformOriginValue = (transformOrigin) =>
  [ transformOrigin.horizontal, transformOrigin.vertical ]
    .map((n) => typeof n === 'number' ? `${n}px` : n)
    .join(' ')
