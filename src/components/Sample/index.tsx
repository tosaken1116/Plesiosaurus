import 'modern-normalize/modern-normalize.css'
import type { FC } from 'react'

import { clsx } from 'clsx'

import { root } from './index.css'

export type SampleProps = {
  className?: string
}

export const Sample: FC<SampleProps> = ({ className }) => (
  <p className={clsx(root, className)}>this is ui of Sample </p>
)
