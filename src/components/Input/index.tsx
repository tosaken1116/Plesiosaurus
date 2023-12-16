import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import { forwardRef } from 'react'

import clsx from 'clsx'

import { input } from './index.css'

export type InputProps = {
  className?: string
}

/**
 * @name Input component
 * Inputを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Input a={1} />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref): JSX.Element => (
    <input className={clsx(input, className)} ref={ref} {...props} />
  ),
)
