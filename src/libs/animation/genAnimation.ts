import { AnimationFactory } from './variant/AnimationFactory'

import type { AnimationObject, AnimationProps } from './variant/AnimationFactory'

const animateObject = (
  props?: AnimationObject,
  isHover = false,
): { className: string; style: object } => {
  if (!props) {
    return { className: '', style: {} }
  }

  const { key, option } = props

  const genFunction = AnimationFactory[key]

  if (genFunction) {
    return genFunction(option, isHover)
  } else {
    throw new Error('Invalid animation type')
  }
}

export const resolveAnimation = (
  props: AnimationProps,
): { className: string; style: object } => {
  const { in: inAnimate, hover } = props
  if (!inAnimate && !hover) {
    return { className: '', style: {} }
  }
  if (inAnimate) {
    return animateObject(inAnimate)
  }
  return animateObject(hover, true)
}
