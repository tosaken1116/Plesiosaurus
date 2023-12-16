import { genSlideAnimation } from './Slide'

import type { SlideProps } from './Slide'

export type AnimationType = SlideProps

export const AnimationFactory = {
  slide: genSlideAnimation,
}

export type AnimationObject = {
  animation: keyof typeof AnimationFactory
  option?: AnimationType
}

export type AnimationProps = {
  in?: AnimationObject
  hover?: AnimationObject
}
