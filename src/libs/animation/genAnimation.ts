import clsx from 'clsx'

import { AnimationFactory } from './variant/AnimationFactory'

import type { AnimationObject, AnimationProps } from './variant/AnimationFactory'

const animateObject = (props?: AnimationObject, isHover = false): string => {
  if (!props) {
    return ''
  }
  const { animation, option } = props

  const genFunction = AnimationFactory[animation]
  if (genFunction) {
    return genFunction(option, isHover)
  } else {
    throw new Error('Invalid animation type')
  }
}

export const genAnimation = (props: AnimationProps): string => {
  const { in: inAnimate, hover } = props
  if (!inAnimate && !hover) {
    throw new Error('Missing animation props')
  }
  return clsx(animateObject(inAnimate), animateObject(hover, true))
}
