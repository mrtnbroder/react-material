
export const UNMOUNTED = Symbol('UNMOUNTED')
export const WILL_ENTER = Symbol('WILL_ENTER')
export const DID_ENTER = Symbol('DID_ENTER')
export const WILL_LEAVE = Symbol('WILL_LEAVE')
export const DID_LEAVE = Symbol('DID_LEAVE')

export const hasEntered = (status) => status === WILL_ENTER || status === DID_ENTER

export const hasLeft = (status) => status === WILL_LEAVE || status === DID_LEAVE

export const getTransitionClass = (status, props) => {
  if (status === WILL_ENTER) {
    return `${props.transitionName}-enter`
  }
  if (status === DID_ENTER) {
    return `${props.transitionName}-enter ${props.transitionName}-enter-active`
  }
  if (status === WILL_LEAVE) {
    return `${props.transitionName}-leave`
  }
  if (status === DID_LEAVE) {
    return `${props.transitionName}-leave ${props.transitionName}-leave-active`
  }

  return ''
}
