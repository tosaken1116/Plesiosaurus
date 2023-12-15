import type { CSSProperties } from 'react'

export type SlideAnimationProps = {
  duration?: CSSProperties['animationDuration']
  delay?: CSSProperties['animationDelay']
  direction?: 'left' | 'right' | 'top' | 'bottom'
  distance?: number
  easing?: string
  visible?: boolean
}
