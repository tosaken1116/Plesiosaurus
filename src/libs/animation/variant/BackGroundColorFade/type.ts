import type { CSSProperties } from 'react'

import type { AnimationBaseProps } from '../type'

export type OptionProps = {
  afterColor?: 'primary' | 'secondary' | 'error'
  // | 'success'
  // | 'warning'
  // | 'info'
  // | 'light'
  // | 'dark',
  duration?: CSSProperties['animationDuration']
}

export type BackGroundColorFadeProps = {
  key: 'bgColorFade'
  option: OptionProps & AnimationBaseProps
}
