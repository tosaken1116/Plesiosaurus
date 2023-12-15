import clsx from 'clsx'

import { hoverSlideAnimation, slideAnimation } from './style.css'

import type { SlideAnimationProps } from './type'
import type { AnimationBaseProps } from '../type'

type Props = SlideAnimationProps & AnimationBaseProps

export const genAnimation = (
  props: Props = {
    direction: 'bottom',
    duration: '0.3s',
    delay: '0s',
  },
  isHover = false,
): { className: string; style: object } => ({
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
