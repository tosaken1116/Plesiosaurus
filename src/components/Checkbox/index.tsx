import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

import clsx from 'clsx'

import { inputDefaultStyle } from './index.css'

export type CheckboxProps = {
  className?: string
} & HTMLAttributes<HTMLInputElement>

/**
 * @name Checkbox component
 * Checkboxを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Checkbox a={1} />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, ...props }, ref): JSX.Element => (
    <input
      ref={ref}
      type='checkbox'
      id={id}
      className={clsx(inputDefaultStyle, className)}
      {...props}
    />
  ),
)
