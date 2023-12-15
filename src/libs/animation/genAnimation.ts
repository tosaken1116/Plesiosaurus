import clsx from 'clsx'

import { AnimationFactory } from './variant/AnimationFactory'

import type { AnimationObject, AnimationProps } from './variant/AnimationFactory'

const animateObject = (
  props?: AnimationObject,
  isHover = false,
): { className: string; style: object } => {
  if (!props) {
    return { className: '', style: {} }
  }
  const { animation, option } = props

  const genFunction = AnimationFactory[animation]
  if (genFunction) {
    return genFunction(option, isHover)
  } else {
    throw new Error('Invalid animation type')
  }
}

export const genAnimation = (
  props: AnimationProps,
): { className: string; style: object } => {
  const { in: inAnimate, hover } = props
  if (!inAnimate && !hover) {
    throw new Error('Missing animation props')
  }
  const { className, style } = animateObject(inAnimate)
  const { className: hoverClassName, style: hoverStyle } = animateObject(hover, true)
  return {
    className: clsx(className, hoverClassName),
    style: { ...style, ...hoverStyle },
  }
}
