
import Spring from './spring'

// Duration of the menu animation
const TRANSITION_DURATION_MS = 200
const TRANSITION_DURATION = TRANSITION_DURATION_MS / 1000

export default () => {

  const enterX = new Spring(2, 400, 30)
  const enterY = new Spring(1.5, 200, 30)

  const enterLoop = (x, y, node, rAF, onDone) => {
    if (enterX.done() && enterY.done()) return onDone()

    const scaleX = 1 - x
    const scaleY = 1 - y

    node.style.transform = `scale(${scaleX}, ${scaleY})`

    rAF(() => enterLoop(enterX.x(), enterY.x(), node, rAF, onDone))
  }

  const exitLoop = (x, y, node, rAF, onDone) => {
    if (enterX.done() && enterY.done()) return onDone()

    const opacity = x
    const translateY = y * -1

    node.style.opacity = opacity
    // node.style.transform = `translateY(${translateY}px)`

    rAF(() => exitLoop(enterX.x(), enterY.x(), node, rAF, onDone))
  }

  const entering = (node, rAF, onDone) => {
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

    rAF(() => enterLoop(enterX.x(), enterY.x(), node, rAF, onDone))
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

  const leaving = (node, rAF, onDone) => {
    rAF(() => exitLoop(enterX.x(), enterY.x(), node, rAF, onDone))
  }

  return {
    entering,
    willLeave,
    leaving,
  }
}
