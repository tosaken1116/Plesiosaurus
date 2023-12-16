import { hoverFadeAnimation, fadeAnimation } from './style.css'

import type { FadeProps } from '.'
import type { GeneratedAnimationValue } from '../type'

export const genAnimation = (
  props: FadeProps['option'] = {
    fade: 'in',
    duration: '1s',
    delay: '0s',
  },
  isHover: boolean = false,
): GeneratedAnimationValue => ({
  className: isHover
    ? hoverFadeAnimation({ fade: props.fade })
    : fadeAnimation({ fade: props.fade }),
  style: {
    '--animation-duration': props.duration,
    '--animation-delay': props.delay,
  },
})
