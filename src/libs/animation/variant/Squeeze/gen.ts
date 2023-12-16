import { hoverSqueezeAnimation, squeezeAnimation } from './style.css'

import type { SqueezeProps } from '.'
import type { GeneratedAnimationValue } from '../type'

export const genAnimation = (
  props: SqueezeProps['option'] = {
    axis: 'x',
    duration: '0.3s',
    delay: '0s',
  },
  isHover: boolean = false,
): GeneratedAnimationValue => ({
  className: isHover
    ? hoverSqueezeAnimation({ axis: props.axis })
    : squeezeAnimation({ axis: props.axis }),
  style: {
    '--animation-duration': props.duration,
    '--animation-delay': props.delay,
  },
})
