import { AnimationFactory } from './variant/AnimationFactory'

import type { AnimationObject, AnimationProps } from './variant/AnimationFactory'

const animateObject = <T>(
  props?: AnimationObject<T>,
  isHover = false,
): { className: string; style: object } => {
  if (!props) {
    return { className: '', style: {} }
  }

  const { animation, option } = props

  const genFunction = AnimationFactory[animation]

  if (genFunction) {
    // @ts-expect-error : Generic typeはこの時点では不明だが、実行時には確定しているので問題ない
    return genFunction(option, isHover)
  } else {
    throw new Error('Invalid animation type')
  }
}

export const resolveAnimation = <T>(
  props: AnimationProps<T>,
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
