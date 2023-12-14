import clsx from 'clsx'

import { hoverBackGroundColorFadeAnimation } from './style.css'

import type { BackGroundColorFadeAnimationProps } from './type'
import type { AnimationBaseProps } from '../type'

export type Props = BackGroundColorFadeAnimationProps & AnimationBaseProps

export const genAnimation = (
  props: Props = {
    afterColor: 'primary',
    duration: '0.3s',
    delay: '1s',
    easing: 'ease',
  },
): string => clsx(hoverBackGroundColorFadeAnimation(props))
