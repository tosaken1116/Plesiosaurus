import clsx from 'clsx'

import { AnimationFactory } from './variant/AnimationFactory'

import type { AnimationObject, AnimationProps } from './variant/AnimationFactory'

const animateObject = <T>(props?: AnimationObject<T>, isHover = false): string => {
  if (!props) {
    return ''
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

export const resolveAnimation = <T>(props: AnimationProps<T>): string => {
  const { in: inAnimate, hover } = props
  if (!inAnimate && !hover) {
    throw new Error('Missing animation props')
  }
  return clsx(animateObject(inAnimate), animateObject(hover, true))
}
