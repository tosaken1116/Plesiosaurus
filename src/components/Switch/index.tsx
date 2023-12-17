/* eslint-disable jsx-a11y/label-has-associated-control */
import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import { forwardRef } from 'react'

import clsx from 'clsx'

import { toggleButtonInput, toggleButtonLabel } from './index.css'

export type SwitchProps = {
  className?: string
}

/**
 * @name Switch component
 * Switchを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Switch a={1} />
 */

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ className }, ref) => (
  <label className={clsx(toggleButtonLabel, className)} htmlFor='switch'>
    <input type='checkbox' className={toggleButtonInput} ref={ref} id='switch' />
  </label>
))
