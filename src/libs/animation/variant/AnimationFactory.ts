import { genBackGroundColorFadeAnimation } from './BackGroundColorFade'
import { genSlideAnimation } from './Slide'

import type { BackGroundColorFadeProps } from './BackGroundColorFade'
import type { SlideProps } from './Slide'
import type { AnimationBaseProps } from './type'

export type AnimationType<T> = AnimationBaseProps &
  (T extends 'slide' ? SlideProps : BackGroundColorFadeProps)

export const AnimationFactory = {
  slide: genSlideAnimation,
  backGroundColorFade: genBackGroundColorFadeAnimation,
}

export type AnimationObject<T> = {
  animation: keyof typeof AnimationFactory
  option?: AnimationType<T>
}

export type AnimationProps<T> = {
  in?: AnimationObject<T>
  hover?: AnimationObject<T>
}
