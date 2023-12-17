import type { AnimationBaseProps } from '../type'

export type OptionProps = {
  fade?: 'in' | 'out'
}

export type FadeProps = {
  key: 'fade'
  option: OptionProps & AnimationBaseProps
}
