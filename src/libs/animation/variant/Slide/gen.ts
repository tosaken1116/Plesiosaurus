import clsx from 'clsx'

import { hoverSlideAnimation, slideAnimation } from './style.css'

import type { SlideAnimationProps } from './type'
import type { AnimationBaseProps } from '../type'

type Props = SlideAnimationProps & AnimationBaseProps

export const genAnimation = (
  props: Props = {
    duration: '1s',
    delay: '1s',
    direction: 'bottom',
  },
  isHover = false,
): string => clsx(isHover ? hoverSlideAnimation(props) : slideAnimation(props))
