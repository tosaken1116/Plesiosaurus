import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef } from 'react'

import clsx from 'clsx'

import { dividerStyles } from './index.css'

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  className?: string
} & React.HTMLProps<HTMLDivElement>

/**
 * @name Divider component
 * Dividerを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Divider a={1} />
 */
const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', ref, ...props }: DividerProps) => (
    <div
      ref={ref}
      className={clsx(dividerStyles[orientation], className)}
      {...props}
      data-testId='divider'
    />
  ),
)

export { Divider }
