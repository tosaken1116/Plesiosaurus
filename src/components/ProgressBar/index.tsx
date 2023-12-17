import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import type { CSSProperties, ComponentProps } from 'react'

import clsx from 'clsx'

import { bar, wrapper } from './index.css'

import type { Progress } from './type'

export type ProgressBarProps = {
  className?: string
  progress?: Progress
  range: number
} & ComponentProps<'div'>

/**
 * @name ProgressBar component
 * ProgressBarを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <ProgressBar a={1} />
 */

export const ProgressBar = ({
  range,
  className,
  progress,
  ...props
}: ProgressBarProps): JSX.Element => {
  if (progress) {
    if (progress < 0 || progress > 100) {
      throw new Error('Value must be between 0 and 100')
    }
  }

  return (
    <div className={clsx(wrapper, className)} style={{ width: range }} {...props}>
      <div className={bar} style={{ width: `${progress}%` } as CSSProperties} />
    </div>
  )
}
