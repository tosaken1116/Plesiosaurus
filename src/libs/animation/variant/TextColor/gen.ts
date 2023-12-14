import clsx from 'clsx'

import { hoverTextColorAnimation } from './style.css'

import type { TextColorAnimationProps } from './type'
import type { AnimationBaseProps } from '../type'

export type Props = TextColorAnimationProps & AnimationBaseProps

export const genAnimation = (
  props: Props = {
    afterColor: 'primary',
    duration: '0.3s',
    delay: '1s',
    easing: 'ease',
  },
): string => clsx(hoverTextColorAnimation(props))
