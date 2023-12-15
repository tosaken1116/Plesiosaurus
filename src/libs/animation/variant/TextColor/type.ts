import type { AnimationBaseProps } from '../type'
import type { CSSProperties } from '@vanilla-extract/css'

export type OptionProps = {
  afterColor?: 'primary' | 'secondary' | 'error'
  // | 'success'
  // | 'warning'
  // | 'info'
  // | 'light'
  // | 'dark',
  duration?: CSSProperties['transitionDuration']
}

export type TextColorProps = {
  key: 'textColor'
  option: OptionProps & AnimationBaseProps
}
