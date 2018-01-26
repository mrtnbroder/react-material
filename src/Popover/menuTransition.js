
import Spring from './spring'

// Duration of the menu animation
const TRANSITION_DURATION_MS = 200
const TRANSITION_DURATION = TRANSITION_DURATION_MS / 1000

export default () => {

  const enterX = new Spring(2, 400, 30)
  const enterY = new Spring(1.5, 200, 30)

  const enterLoop = (x, y, node, rAF, cb) => {
    if (enterX.done() && enterY.done()) return cb()

    const scaleX = 1 - x
    const scaleY = 1 - y

    // performance optimizations
    node.style.willChange = `transform`
    node.style.transform = `scale(${scaleX}, ${scaleY})`

    Array.from(node.firstChild.children).forEach((x, i) => {
      x.style.willChange = 'opacity'
    })

    rAF(() => enterLoop(enterX.x(), enterY.x(), node, rAF, cb))
  }

  const exitLoop = (x, y, node, rAF, cb) => {
    if (enterX.done() && enterY.done()) return cb()

    const opacity = x
    const translateY = y * -1

    node.style.opacity = opacity
    // node.style.transform = `translateY(${translateY}px)`

    rAF(() => exitLoop(enterX.x(), enterY.x(), node, rAF, cb))
  }

  const didEnter = (node, rAF) => {
    // reset styles
    node.style.transform = ``
    node.style.willChange = ``
  }

  const entering = (node, rAF, cb) => {
    enterX.snap(1)
    enterX.setEnd(0)
    enterY.snap(1)
    enterY.setEnd(0)

    const scaleX = 1 - enterX.x()
    const scaleY = 1 - enterY.x()

    node.style.opacity = 1
    node.style.transform = `scale(${scaleX}, ${scaleY})`

    const childrenSize = node.firstChild.children.length

    Array.from(node.firstChild.children).forEach((x, i) => {
      const delayFraction = i * (TRANSITION_DURATION / childrenSize)

      x.style.opacity = 1
      x.style.transitionProperty = `opacity`
      x.style.transitionTimingFunction = `cubic-bezier(.4, 0, 1, 1)`
      x.style.transitionDelay = `${delayFraction.toFixed(3)}s`
    })

    rAF(() => enterLoop(enterX.x(), enterY.x(), node, rAF, cb))
  }

  const willLeave = (node, cb) => {
    enterX.snap(1)
    enterX.setEnd(0)
    enterY.snap(30)
    enterY.setEnd(0)

    const opacity = enterX.x()
    const translateY = enterY.x()

    node.style.opacity = opacity
    // node.style.transform = `translateY(${translateY}px)`

    cb()
  }

  const leaving = (node, rAF, cb) => {
    rAF(() => exitLoop(enterX.x(), enterY.x(), node, rAF, cb))
  }

  return {
    entering,
    didEnter,
    willLeave,
    leaving,
  }
}
