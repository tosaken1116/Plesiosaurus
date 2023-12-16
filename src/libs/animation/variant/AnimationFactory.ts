import { genBackGroundColorFadeAnimation } from './BackGroundColorFade'
import { genSlideAnimation } from './Slide'
import { genTextColorAnimation } from './TextColor'

import type { BackGroundColorFadeProps } from './BackGroundColorFade'
import type { SlideProps } from './Slide'
import type { TextColorProps } from './TextColor'
import type { GeneratedAnimationValue } from './type'

export type AnimationProps = {
  in?: AnimationObject
  hover?: AnimationObject
}

export type AnimationObject = SlideProps | BackGroundColorFadeProps | TextColorProps

export const AnimationFactory: Record<
  AnimationObject['key'],
  (props: AnimationObject['option'], isHover: boolean) => GeneratedAnimationValue
> = {
  slide: genSlideAnimation,
  bgColorFade: genBackGroundColorFadeAnimation,
  textColor: genTextColorAnimation,
} as const
