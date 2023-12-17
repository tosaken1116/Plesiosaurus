import clsx from 'clsx'

import { hoverSlideAnimation, slideAnimation } from './style.css'

import type { SlideProps } from '.'
import type { GeneratedAnimationValue } from '../type'

export const genAnimation = (
  props: SlideProps['option'] = {
    direction: 'bottom',
    duration: '0.3s',
    delay: '0s',
  },
  isHover = false,
): GeneratedAnimationValue => ({
  className: clsx(
    isHover
      ? hoverSlideAnimation({ direction: props.direction })
      : slideAnimation({ direction: props.direction }),
  ),
  style: {
    '--animation-duration': props.duration,
    '--animation-delay': props.delay,
  },
})
