import { hoverBackGroundColorFadeAnimation } from './style.css'

import type { BackGroundColorFadeProps } from '.'
import type { GeneratedAnimationValue } from '../type'

export const genAnimation = (
  props: BackGroundColorFadeProps['option'] = {
    afterColor: 'primary',
    easing: 'ease',
    duration: '0.3s',
    delay: '0s',
  },
): GeneratedAnimationValue => ({
  className: hoverBackGroundColorFadeAnimation({
    afterColor: props.afterColor,
    easing: props.easing,
  }),
  style: { '--transition-duration': props.duration, '--transition-delay': props.delay },
})
