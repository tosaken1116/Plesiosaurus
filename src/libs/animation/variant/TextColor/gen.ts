import clsx from 'clsx'

import { hoverTextColorAnimation } from './style.css'

import type { TextColorProps } from '.'
import type { GeneratedAnimationValue } from '../type'

export const genAnimation = (
  props: TextColorProps['option'] = {
    afterColor: 'primary',
    duration: '0.3s',
    delay: '1s',
    easing: 'ease',
  },
  isHover: boolean,
): GeneratedAnimationValue => {
  if (isHover) {
    return {
      className: clsx(hoverTextColorAnimation(props)),
      style: {
        '--transition-duration': props.duration,
        '--transition-delay': props.delay,
      },
    }
  }
  return { className: '', style: {} }
}
