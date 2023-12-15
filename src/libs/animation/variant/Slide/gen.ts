import clsx from 'clsx'

import { hoverSlideAnimation, slideAnimation } from './style.css'

import type { SlideAnimationProps } from './type'

type Props = SlideAnimationProps

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
