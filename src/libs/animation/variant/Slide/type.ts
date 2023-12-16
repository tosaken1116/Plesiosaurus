import type { AnimationBaseProps } from '../type'

export type OptionProps = {
  direction?: 'left' | 'right' | 'top' | 'bottom'
}

export type SlideProps = {
  key: 'slide'
  option: OptionProps & AnimationBaseProps
}
