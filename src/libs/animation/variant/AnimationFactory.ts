import { genBackGroundColorFadeAnimation } from './BackGroundColorFade'
import { genSlideAnimation } from './Slide'
import { genSqueezeAnimation } from './Squeeze'
import { genTextColorAnimation } from './TextColor'

import type { BackGroundColorFadeProps } from './BackGroundColorFade'
import type { SlideProps } from './Slide'
import type { SqueezeProps } from './Squeeze'
import type { TextColorProps } from './TextColor'
import type { GeneratedAnimationValue } from './type'

export type AnimationProps = {
  in?: AnimationObject
  hover?: AnimationObject
}

export type AnimationObject =
  | SlideProps
  | BackGroundColorFadeProps
  | TextColorProps
  | SqueezeProps

export const AnimationFactory: Record<
  AnimationObject['key'],
  (props: AnimationObject['option'], isHover: boolean) => GeneratedAnimationValue
> = {
  slide: genSlideAnimation,
  bgColorFade: genBackGroundColorFadeAnimation,
  textColor: genTextColorAnimation,
  squeeze: genSqueezeAnimation,
} as const
