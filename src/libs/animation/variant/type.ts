import type { CSSProperties } from 'react'

import type { AnimationProps } from './AnimationFactory'

export type AnimationBaseProps = {
  delay?: CSSProperties['animationDelay']
  duration?: CSSProperties['animationDuration']
  easing?: 'ease' | 'easeIn' | 'easeOut' | 'easeInOut' | 'linear'
  visible?: boolean
}

export type GeneratedAnimationValue = {
  className: string
  style: object
}

export type AnimationArgs = {
  animationProps?: AnimationProps
}
