
export const UNMOUNTED = Symbol('UNMOUNTED')
export const MOUNTED = Symbol('MOUNTED')
export const IDLE = Symbol('IDLE')
export const WILL_ENTER = Symbol('WILL_ENTER')
export const ENTERING = Symbol('ENTERING')
export const DID_ENTER = Symbol('DID_ENTER')
export const WILL_LEAVE = Symbol('WILL_LEAVE')
export const LEAVING = Symbol('LEAVING')
export const DID_LEAVE = Symbol('DID_LEAVE')

export const isWithinEnterState = (status) => status === WILL_ENTER || status === ENTERING || status === DID_ENTER

export const isWithinLeavingState = (status) => status === WILL_LEAVE || status === LEAVING || status === DID_LEAVE

// export const getTransitionClass = (status, props) => {
//   if (status === WILL_ENTER) {
//     return `${props.transitionName}-enter`
//   }
//   if (status === ENTERING) {
//     return `${props.transitionName}-enter ${props.transitionName}-enter-active`
//   }
//   if (status === WILL_LEAVE) {
//     return `${props.transitionName}-leave`
//   }
//   if (status === LEAVING) {
//     return `${props.transitionName}-leave ${props.transitionName}-leave-active`
//   }
//
//   return ''
// }
