import { hoverShakeAnimation, shakeAnimation } from './style.css'

import type { ShakeProps } from '.'
import type { GeneratedAnimationValue } from '../type'

export const genAnimation = (
  props: ShakeProps['option'] = {
    duration: '1s',
    delay: '0s',
  },
  isHover: boolean = false,
): GeneratedAnimationValue => ({
  className: isHover ? hoverShakeAnimation() : shakeAnimation(),
  style: {
    '--animation-duration': props.duration,
    '--animation-delay': props.delay,
  },
})
