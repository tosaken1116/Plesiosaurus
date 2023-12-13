import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import type { FC } from 'react'

import { clsx } from 'clsx'

import { genAnimation } from '../../libs/animation'

import { root } from './index.css'

import type { AnimationProps } from '../../libs/animation/variant/AnimationFactory'

export type SampleProps = {
  className?: string
  animationProps: AnimationProps
}

export const Sample: FC<SampleProps> = ({ className, animationProps }) => (
  <p className={clsx(root, className, genAnimation(animationProps))}>
    this is ui of Sample{' '}
  </p>
)
