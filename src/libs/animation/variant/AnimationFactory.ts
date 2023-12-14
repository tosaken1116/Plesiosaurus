import { genBackGroundColorFadeAnimation } from './BackGroundColorFade'
import { genSlideAnimation } from './Slide'
import { genTextColorAnimation } from './TextColor'

import type { BackGroundColorFadeProps } from './BackGroundColorFade'
import type { SlideProps } from './Slide'
import type { TextColorProps } from './TextColor'
import type { AnimationBaseProps } from './type'

export type AnimationType<T> = AnimationBaseProps &
  (T extends 'slide'
    ? SlideProps
    : T extends 'background'
    ? BackGroundColorFadeProps
    : T extends 'textColor'
    ? TextColorProps
    : never)

export const AnimationFactory = {
  slide: genSlideAnimation,
  backGroundColorFade: genBackGroundColorFadeAnimation,
  textColor: genTextColorAnimation,
}

export type AnimationObject<T> = {
  animation: keyof typeof AnimationFactory
  option?: AnimationType<T>
}

export type AnimationProps<T> = {
  in?: AnimationObject<T>
  hover?: AnimationObject<T>
}
