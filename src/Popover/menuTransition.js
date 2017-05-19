
import rAF from 'dom-helpers/util/requestAnimationFrame'
import Spring from './spring'

export default () => {

  const enterX = new Spring(2, 400, 30)
  const enterY = new Spring(1.5, 200, 30)
  let frame = null

  const enterLoop = (x, y, node) => {
    if (enterX.done() && enterY.done()) return false

    const scaleX = 1 - x
    const scaleY = 1 - y

    node.style.transform = `scale(${scaleX}, ${scaleY})`

    frame = rAF(() => enterLoop(enterX.x(), enterY.x(), node))
  }

  const exitLoop = (x, y, node, cb) => {
    if (enterX.done()) return cb()

    const opacity = x
    const translateY = y * -1

    node.style.opacity = opacity
    // node.style.transform = `translateY(${translateY}px)`

    frame = rAF(() => exitLoop(enterX.x(), enterY.x(), node, cb))
  }

  const willEnter = (node, cb) => {
    window.cancelAnimationFrame(frame)

    enterX.snap(1)
    enterX.setEnd(0)
    enterY.snap(1)
    enterY.setEnd(0)

    const scaleX = 1 - enterX.x()
    const scaleY = 1 - enterY.x()

    node.style.opacity = 1
    node.style.transform = `scale(${scaleX}, ${scaleY})`

    Array.prototype.slice.call(node.firstChild.children).forEach((x, i) => {
      const delay = i * 0.020;

      x.style.transitionProperty = `opacity`
      x.style.transitionTimingFunction = `cubic-bezier(.4, 0, 1, 1)`
      x.style.transitionDelay = `${delay.toFixed(3)}s`
    })

    cb()
  }

  const didEnter = (node) => {
    frame = rAF(() => {
      Array.prototype.slice.call(node.firstChild.children).forEach((x, i) => {
        x.style.opacity = 1
      })
      enterLoop(enterX.x(), enterY.x(), node)
    })
  }

  const willLeave = (node, cb) => {
    window.cancelAnimationFrame(frame)

    enterX.snap(1)
    enterX.setEnd(0)
    enterY.snap(30)
    enterY.setEnd(0)

    const opacity = enterX.x()
    const translateY = enterY.x()

    node.style.opacity = opacity
    // node.style.transform = `translateY(${translateY}px)`

    Array.prototype.slice.call(node.firstChild.children).forEach((x, i) => {
      x.style.opacity = 0
    })

    cb()
  }

  const didLeave = (node, cb) => {
    window.cancelAnimationFrame(frame)
    exitLoop(enterX.x(), enterY.x(), node, cb)
  }

  return {
    willEnter,
    didEnter,
    willLeave,
    didLeave,
  }
}
