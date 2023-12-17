import { genBackGroundColorFadeAnimation } from './BackGroundColorFade'
import { genFadeAnimation } from './Fade'
import { genShakeAnimation } from './Shake'
import { genSlideAnimation } from './Slide'
import { genSqueezeAnimation } from './Squeeze'
import { genTextColorAnimation } from './TextColor'

import type { BackGroundColorFadeProps } from './BackGroundColorFade'
import type { FadeProps } from './Fade'
import type { ShakeProps } from './Shake'
import type { SlideProps } from './Slide'
import type { SqueezeProps } from './Squeeze'
import type { TextColorProps } from './TextColor'
import type { GeneratedAnimationValue } from '..'

export type AnimationProps = {
  in?: AnimationObject
  hover?: AnimationObject
}

export type AnimationObject =
  | SlideProps
  | BackGroundColorFadeProps
  | TextColorProps
  | SqueezeProps
  | ShakeProps
  | FadeProps

export const AnimationFactory: Record<
  AnimationObject['key'],
  (props: AnimationObject['option'], isHover: boolean) => GeneratedAnimationValue
> = {
  slide: genSlideAnimation,
  bgColorFade: genBackGroundColorFadeAnimation,
  textColor: genTextColorAnimation,
  squeeze: genSqueezeAnimation,
  shake: genShakeAnimation,
  fade: genFadeAnimation,
} as const
